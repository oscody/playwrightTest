const { chromium } = require('playwright');
const TurndownService = require('turndown');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    storageState: 'auth/session.json'
  });
  const page = await context.newPage();

  console.log('Navigating...');
  await page.goto('https://www.educative.io/module/page/pg03nJFpLmyqpMvNN/10370001/4960980090617856/6098444918325248', {
    waitUntil: 'networkidle',
    timeout: 60000,
  });

  // Scroll to trigger lazy-loaded content
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
  console.log('Title:', title);

  // Minimal DOM cleanup — only remove obvious noise, leave content intact
  const html = await page.evaluate(() => {
    ['script', 'style', 'noscript', 'iframe'].forEach(tag =>
      document.querySelectorAll(tag).forEach(el => el.remove())
    );
    // Remove tracking pixel images and SVG placeholder images
    document.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src') || '';
      if (src.startsWith('data:') || /bat\.bing|doubleclick|facebook\.com\/tr/.test(src))
        img.remove();
    });
    return document.body.innerHTML;
  });

  const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

  // Remove [#] heading anchor links (e.g. <a href="#heading">#</a>)
  td.addRule('remove-heading-anchors', {
    filter: node =>
      node.nodeName === 'A' &&
      (node.getAttribute('href') || '').startsWith('#') &&
      node.textContent.trim() === '#',
    replacement: () => '',
  });

  // Convert TOC anchor links to plain text (removes the hyperlink, keeps label)
  td.addRule('flatten-hash-links', {
    filter: node =>
      node.nodeName === 'A' &&
      (node.getAttribute('href') || '').startsWith('#'),
    replacement: content => content,
  });

  td.remove(['script', 'style', 'noscript', 'svg']);

  let markdown = td.turndown(html);

  // Strip everything before the first h1
  const h1Match = markdown.indexOf(`# ${title}`);
  if (h1Match !== -1) markdown = markdown.slice(h1Match);

  // Keep only h1 + subtitle before first ##, drop TOC lines
  // Subtitle ends with sentence punctuation; TOC items are bare titles
  const firstH2 = markdown.indexOf('\n## ');
  if (firstH2 !== -1) {
    const header = markdown.slice(0, firstH2);
    const body = markdown.slice(firstH2);
    const headerLines = header.split('\n').filter(line =>
      line.startsWith('# ') || /[.!?]$/.test(line.trim())
    );
    markdown = headerLines.join('\n') + '\n' + body;
  }

  // Remove trailing # from headings (heading anchor artifact, with or without space)
  markdown = markdown.replace(/^(#{1,6} .+?)#\s*$/gm, (_, h) => h.trimEnd());

  // Remove bottom UI nav elements
  markdown = markdown.replace(/\n*(Ask|CompletedCompleted|Completed|XR Process|Next)\n*/g, '\n');

  // Remove lines that are only symbols/punctuation (escaped breadcrumb artifacts)
  markdown = markdown
    .split('\n')
    .filter(line => !/^\s*[\\>\.\|…]+\s*$/.test(line))
    .join('\n');

  // Collapse 3+ blank lines into 2
  markdown = markdown.replace(/\n{3,}/g, '\n\n').trim();

  const filename = title
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
    .slice(0, 60) + '.md';

  fs.writeFileSync(path.join(__dirname, filename), markdown, 'utf8');
  console.log(`Saved: ${filename} (${markdown.length} chars)`);

  await browser.close();
})();
