# Adding Videos
Explore incorporating both 2D and 360º videos in WebXR using A-Frame, enhancing user experience with interactive video controls and immersive elements.
The consumption of video-based content is on the rise. It’s one of the best mediums to effectively disseminate information. WebXR provides extensive support to include video-based interactivity for both conventional non-immersive 2D videos and immersive 360º videos. In the following sections, we elaborate on how to include videos to enrich our WebXR experiences.

## Including non-immersive 2D videos
In this example, we add a simple video to the scene, with the 8 × 4.5 dimensions. We also created a play-pause button similar to the one used in the sound example.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Video-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script>
      AFRAME.registerComponent('play-pause', {
        init: function () {
          var myEl = document.querySelector('#city-video');
          var vidControls = document.querySelector('#controls');
          this.el.addEventListener('click', function () {
            if (myEl.paused) {
              myEl.play();
              vidControls.setAttribute('src', '#pause');
            } else {
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/W5EVZeejoBQ/play-button.png](https://www.educative.io/udata/W5EVZeejoBQ/play-button.png)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/X1QgrwMWYJR/pause-button.png](https://www.educative.io/udata/X1QgrwMWYJR/pause-button.png)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/zQvLajx5agr/city-video.mp4](https://www.educative.io/udata/zQvLajx5agr/city-video.mp4)

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/W5EVZeejoBQ/play-button.png](https://www.educative.io/udata/W5EVZeejoBQ/play-button.png)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/X1QgrwMWYJR/pause-button.png](https://www.educative.io/udata/X1QgrwMWYJR/pause-button.png)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/zQvLajx5agr/city-video.mp4](https://www.educative.io/udata/zQvLajx5agr/city-video.mp4)

components:raycaster:warn \[raycaster\] For performance, please define raycaster.objects when using raycaster or cursor components to whitelist which entities to intersect with. e.g., raycaster="objects: \[data-raycastable\]".

A 2D video example

We can play/pause the video by aligning the cursor with the icon and then clicking it:

*   Under the `<a-assets>` primitive, we import all the required assets for the scene. We use the standard HTML `<video>` tag to import video in the A-Frame scene.
    
*   We use the `<a-cursor>` primitive to interact with the video controls in the scene.
    
*   We create a `play-pause` component to enable the functionality of playing and pausing the video with a single button.
    
*   We used the `<a-video>` primitive to load the video in our scene, then added `<a-image>` as a sub-element to append the icon as a child of the `<a-video>` primitive, and added the `play-pause` component to the `<a-image>` tag to control the play/pause functionality with the image icon.
    
*   If the video is paused, we play the video by triggering the `play()` method of the `video` element and changing the `src` attribute of the `controls` element to the `pause` icon. Similarly, when the video is paused, we trigger the `pause()` method of the video element and change the `src` attribute of the `controls` element to the `play` icon.
    

## Including immersive 360º videos
Similar to the `sky` component, we can also use 360º videos to define our environment. We can use the `<a-videosphere>` primitive to load 360º video in the scene. The `<a-videosphere>` primitive is a sphere with a radius of 500 meters, with the video texture mapped inside it. In this example, we use the A-Frame’s boilerplate 360º video with on-click play/pause functionality.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Video-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>

    <script>
      AFRAME.registerComponent('enter-vr', {
        init: function () {
          this.playVideo = this.playVideo.bind(this);
          this.playVideo
Tick = this.playVideo
Tick.bind(this);
        },
        play: function () {
          this.el.sceneEl.addEventListener('enter-vr', this.playVideo
Tick);
        },
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://cdn.jsdelivr.net/gh/aframevr/assets@master/360-video-boilerplate/video/city.mp4](https://cdn.jsdelivr.net/gh/aframevr/assets@master/360-video-boilerplate/video/city.mp4)

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://cdn.jsdelivr.net/gh/aframevr/assets@master/360-video-boilerplate/video/city.mp4](https://cdn.jsdelivr.net/gh/aframevr/assets@master/360-video-boilerplate/video/city.mp4)

Adding 360º video example

We can start the video by clicking anywhere in the window:

*   We import the video into the asset management system within the `<a-assets>` tag. We also attach the `autoplay` and `loop` components so that the video loops and plays automatically.
    
*   We create two `enter-vr` and `window-click` named components. These components enable the user activation that plays the video by clicking anywhere on the window or clicking on the “Enter VR / Full Screen” button.
    

### The `window-click` component
The `window-click` component has three methods: `init()`, `play()`, and `pause()`. The `init()` method initializes the component by binding the `onClick()` function to the current instance of the component using the `this.onClick = this.onClick.bind(this);` call.

The `play()` method adds an event listener to the window object for the `click` event, causing the `onClick()` method to be called when the event is triggered.

The `pause()` method removes the `click` event listener from the window object.

The `onClick()` method is called when the `click` event is triggered and checks if the component’s `el` (entity) has a video material. If it does, the video is played; otherwise, the method returns and nothing happens.

### The `enter-vr` component
The `enter-vr` event is triggered when the user enters VR mode in the scene. The component has three methods: `init()`, `play()`, and `pause()`. The `init()` method initializes the component by binding the `playVideo()` and `playVideo
Tick()` functions to the current instance of the component.

The `playVideo
Tick()` signifies a step in an event loop, representing a unit of time. The “next tick” denotes the imminent iteration of the event loop. When we schedule a function using the `setTimeout(callback, 0)` call, it runs in the subsequent tick, enabling tasks to follow the current context while preserving the order of asynchronous operations

The `play()` method adds an event listener to the `enter-vr` event on `sceneEl` (the A-Frame scene element) and calls the `playVideo
Tick()` method when the event is triggered. The `pause()` method removes the `enter-vr` event listener from the `sceneEl` element.

The `playVideo
Tick()` method is called when the `enter-vr` event is triggered and waits for the next tick of the event loop before calling the `playVideo()` method using the `setTimeout(this.playVideo);` call.

The `playVideo()` method is called by `playVideo
Tick()` and checks if the component’s `el` (entity) has a video material. If it does, the video is played. Otherwise, the method returns, and nothing happens.

## Conclusion
Now, we’ve learned the fundamental skills to effectively utilize videos and media within our virtual environments, ensuring they’re informative, user-friendly, and engaging.