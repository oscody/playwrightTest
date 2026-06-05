const { chromium } = require('playwright');
const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');

const START_URL = process.argv[2];
if (!START_URL) { console.error('Usage: node crawl.js <url>'); process.exit(1); }
// Derived from START_URL — everything up to (but not including) the final lesson ID.
// All lesson links in this module share this path prefix.
const MODULE_SEGMENT = new URL(START_URL).pathname.split('/').slice(0, -1).join('/') + '/';
const courseName = new URL(START_URL).pathname.split('/').filter(Boolean)[1];
const OUT_DIR = path.join(__dirname, 'pages', courseName);

fs.mkdirSync(OUT_DIR, { recursive: true });

async function scrapePage(page, url) {
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });

  await page.evaluate(async () => {
    await new Promise(resolve => {
      let total = 0;
      const timer = setInterval(() => {
        window.scrollBy(0, 400);
        total += 400;
        if (total >= document.body.scrollHeight) { clearInterval(timer); resolve(); }
      }, 100);
    });
  });
  await page.waitForTimeout(2000);

  const lessonHeading = await page.locator('h1').first().textContent().catch(() => null);
  const title = lessonHeading?.trim() || await page.title();

  const { html, removedAltTexts } = await page.evaluate(() => {
    document.querySelectorAll('.ace_editor').forEach(editor => {
      const textarea = editor.querySelector('textarea');
      let code = textarea ? textarea.value.trim() : '';
      if (!code) {
        code = [...editor.querySelectorAll('.ace_line')].map(l => l.innerText).join('\n');
      }
      if (code) {
        const pre = document.createElement('pre');
        const codeEl = document.createElement('code');
        codeEl.textContent = code;
        pre.appendChild(codeEl);
        editor.replaceWith(pre);
      } else {
        editor.remove();
      }
    });

    ['script', 'style', 'noscript', 'iframe', 'figcaption'].forEach(tag =>
      document.querySelectorAll(tag).forEach(el => el.remove())
    );

    const alts = [];
    document.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src') || '';
      if (
        src.startsWith('data:') ||
        /bat\.bing|doubleclick|facebook\.com\/tr/.test(src) ||
        src.includes('/api/collection/')
      ) {
        const alt = img.getAttribute('alt');
        if (alt) alts.push(alt.trim());
        img.remove();
      }
    });
    return { html: document.body.innerHTML, removedAltTexts: alts };
  });

  const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

  td.addRule('remove-heading-anchors', {
    filter: node =>
      node.nodeName === 'A' &&
      (node.getAttribute('href') || '').startsWith('#') &&
      node.textContent.trim() === '#',
    replacement: () => '',
  });

  td.addRule('skip-api-images', {
    filter: node =>
      node.nodeName === 'IMG' &&
      (node.getAttribute('src') || '').includes('/api/collection/'),
    replacement: () => '',
  });

  td.addRule('flatten-hash-links', {
    filter: node =>
      node.nodeName === 'A' &&
      (node.getAttribute('href') || '').startsWith('#'),
    replacement: content => content,
  });

  td.remove(['script', 'style', 'noscript', 'svg']);

  let markdown = td.turndown(html);

  const h1Match = markdown.indexOf(`# ${title}`);
  if (h1Match !== -1) markdown = markdown.slice(h1Match);

  markdown = markdown.replace(/^# \n/, `# ${title}\n`);

  const firstH2 = markdown.indexOf('\n## ');
  if (firstH2 !== -1) {
    const header = markdown.slice(0, firstH2);
    const body = markdown.slice(firstH2);
    const headerLines = header.split('\n').filter(line =>
      line.startsWith('# ') || /[.!?]$/.test(line.trim())
    );
    markdown = headerLines.join('\n') + '\n' + body;
  }

  markdown = markdown.replace(/^(#{1,6} .+?)#\s*$/gm, (_, h) => h.trimEnd());

  if (removedAltTexts.length) {
    const altPattern = new RegExp(
      `^(${removedAltTexts.map(a => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})$`, 'gm'
    );
    markdown = markdown.replace(altPattern, '');
  }

  const backIdx = markdown.indexOf('\nBacklesson');
  if (backIdx !== -1) markdown = markdown.slice(0, backIdx);

  markdown = markdown.replace(/\n*(Ask|CompletedCompleted|Completed|Next)\n*/g, '\n');

  markdown = markdown
    .split('\n')
    .filter(line => {
      const t = line.trim();
      if (/^[ה]+$/.test(t)) return false;
      if (/^X{10,}$/.test(t)) return false;
      if (/^\d+$/.test(t)) return false;
      if (/^\s*[\\>\.\|…⋯]+\s*$/.test(t)) return false;
      if (/^(Ace Editor|Javascript \(babel-node\)|Saved|Run|Terminal|VR Not Connected|Experience in VR|Run Application|Did you find this helpful\?)$/.test(t)) return false;
      return true;
    })
    .join('\n');

  markdown = markdown.replace(/\*\*Your app can be found at:\*\*.*/g, '');
  markdown = markdown.replace(/\n{3,}/g, '\n\n').trim();

  return { title, markdown };
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: 'auth/session.json' });
  const page = await context.newPage();

  // Load start page and extract the full ordered lesson list from the sidebar TOC.
  // This is more reliable than chasing "Next" buttons which can loop or pick wrong links.
  console.log('Loading start page to extract course TOC...');
  await page.goto(START_URL, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(1000);

  const allUrls = await page.evaluate((seg) => {
    const seen = new Set();
    const urls = [];
    document.querySelectorAll(`a[href*="${seg}"]`).forEach(a => {
      const href = a.href.split('?')[0];
      if (!seen.has(href)) { seen.add(href); urls.push(href); }
    });
    return urls;
  }, MODULE_SEGMENT);

  const startClean = START_URL.split('?')[0];
  const startIdx = allUrls.findIndex(u => u === startClean);
  const urlsToScrape = startIdx >= 0 ? allUrls.slice(startIdx) : allUrls;

  console.log(`Found ${allUrls.length} lesson URLs in sidebar, scraping ${urlsToScrape.length} from start\n`);

  for (let i = 0; i < urlsToScrape.length; i++) {
    const url = urlsToScrape[i];
    const pageNum = i + 1;
    console.log(`[${pageNum}/${urlsToScrape.length}] ${url}`);

    try {
      const { title, markdown } = await scrapePage(page, url);

      const slug = title
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/^-|-$/g, '')
        .toLowerCase()
        .slice(0, 50);

      const filename = `${String(pageNum).padStart(2, '0')}-${slug}.md`;
      fs.writeFileSync(path.join(OUT_DIR, filename), markdown, 'utf8');
      console.log(`    -> "${title}" — ${filename} (${markdown.length} chars)`);
    } catch (err) {
      console.error(`    Error: ${err.message}`);
    }
  }

  console.log(`\nDone. ${urlsToScrape.length} pages saved to ./pages/${courseName}/`);
  await browser.close();
})();
