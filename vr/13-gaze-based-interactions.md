# Gaze-Based Interactions
Learn how to include gaze-based interactions in your VR scene.
We learned how the `event-set` component helps simplify interaction events for us. With our introduction to the `cursor` component, we can now understand how _gaze-based_ or _fuse-based_ interactions work. As the name suggests, a gaze-based cursor can be considered a laser strapped to the user’s head, extending into the 3D scene. If the user stares at an entity long enough (e.g., the `fuseTimeout`), then the cursor will trigger a click.
Fuse-based interactions benefit VR because they don’t necessitate additional input devices beyond the headset. These interactions can be used by Google Cardboard applications and employ a fuse-based cursor. Nevertheless, one drawback is that users need to move their heads around quite a bit.

## Example
We’ll use the example in the previous lesson, where we interacted with the sphere to activate the spotlight on the car. To understand gaze-based interaction, we run the following experience’s URL in any device’s browser that supports the WebXR experience:

<html>
  <head>
    <title> Gaze-based-interaction-set-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-assets>
        <a-asset-item
          id="car"
          src="https://cdn.glitch.me/40132c39-d787-404a-944d-86a83cbc1dbe/free\_porsche\_911\_carrera\_4s.glb"></a-asset-item>
        <img
          id="sky"
          src="/udata/MvYQRVanpqG/SKY.jpg" />
      </a-assets>
      <a-sky src="#sky"></a-sky>
      <a-entity
        gltf-model="#car"
        scale="0.5 0.5 0.5"
        position="0 0.5 -5"
        event-set\_\_close="\_event:click; \_target:#car-light; visible: false;">
      </a-entity>
      <a-plane
        rotation="-90 0 0"
        scale="1000 1000 0"
        color="#ff7b42"></a-plane>
      <a-sphere
        position="2 0.5 -6"
        scale="0.25 0.25 0.25"
        color="#1ec28c"
        event-set\_\_show="\_event:click; \_target: #car-light;visible:true;"></a-sphere>
      <!-- Default lighting by A-Frame -->
      <a-entity light="type: ambient; color:#BBB"></a-entity>
      <a-entity
        light="type: directional; color: #FFF; intensity: 0.6; "
        position="-0.5 1 1"></a-entity>
      <!--Spotlight on car (set visible to false)-->
      <a-entity
        id="car-light"
        light="color: #f7ef08; type: spot"
        position="-0.1 1.2 -5.5"
        visible="false"
        rotation="-90 0 0"></a-entity>
      <!--Player-->
      <a-entity id="rig">
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>
    </a-scene>
  </body>
</html>

Gaze-based interaction for Android

We experienced that when we gaze at the sphere and then left-click with the mouse, we trigger the synthetic `click` event activating the car’s spotlight that we defined in the scene. We need to make sure that the cursor is precisely aligned on the sphere before clicking it.

Output

Mobile VR experience before cursor interactivity

## Visual feedback
We saw that the above experience isn’t good in terms of user experience since we’re not providing enough visual feedback to the user in order to understand or cue them about interactions.

To provide a visual indication of when the cursor is clicking or fusing, we can utilize the `animation` component. Because the cursor intersects with the entity, it’ll emit an event that the animation system can detect using the `startEvents` attribute. This allows us to add visual feedback to the cursor.

### Example: Adding visual feedback
In this example, we add animation on the `cursor` component to provide visual feedback.

*   We attach a cursor to the camera, set the `cursor` component’s `fuse` property to `true` and set a timeout of one second.
    
*   The animation scales the cursor from a value of `0.05 0.05 0.05` to a value of `0.02 0.02 0.02` whenever the cursor intersects with entities.
    
*   The animation is triggered on the `fusing` event as indicated by the `startEvents` attribute in the `animation` component.
    
*   `fusing` is emitted both on the cursor and the intersected entity when the fuse-based cursor starts counting down.
    

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Gaze-based-interaction-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-assets>
        <a-asset-item
          id="car"
          src="https://cdn.glitch.me/40132c39-d787-404a-944d-86a83cbc1dbe/free_porsche_911_carrera_4s.glb"></a-asset-item>
      </a-assets>
      <a-sky color="#FFFFFF"></a-sky>
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-node:warn Rendering scene with errors on node:

1.  ▶{#@t: "HTMLElement", data: Object}
    

components:raycaster:warn \[raycaster\] For performance, please define raycaster.objects when using raycaster or cursor components to whitelist which entities to intersect with. e.g., raycaster="objects: \[data-raycastable\]".

components:gltf-model:warn Failed to fetch

Adding animation to cursor for visual feedback

Now, we don’t need to click the sphere in order to trigger the spotlight. The fuse-based cursor does it automatically after one second. We can test this in our mobile VR setup as well by running the following experience’s URL:

<html>
  <head>
    <title> Gaze-based-interaction-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <a-asset-item
          id="car"
          src="https://cdn.glitch.me/40132c39-d787-404a-944d-86a83cbc1dbe/free\_porsche\_911\_carrera\_4s.glb"></a-asset-item>
      </a-assets>

      <a-sky color="#FFFFFF"></a-sky>
      <a-entity
        gltf-model="#car"
        scale="0.5 0.5 0.5"
        position="0 0.5 -5"
        event-set\_\_close="\_event:click; \_target:#car-light; visible: false;">
        <a-plane
          color="#787878"
          rotation="-90 0 0"
          position="0 -0.7 0"
          scale="10 10 0"></a-plane>
      </a-entity>

      <a-sphere
        position="2 1 -6"
        scale="0.5 0.5 0.5"
        color="#E7E36B"
        event-set\_\_enter="\_event:click; \_target: #car-light; visible:true;"></a-sphere>

      <!-- Default lighting by A-Frame -->
      <a-entity light="type: ambient; color:#BBB"></a-entity>
      <a-entity
        light="type: directional; color: #FFF; intensity: 0.6; "
        position="-0.5 1 1"></a-entity>

      <!--Spotlight on car (set visible to false)-->
      <a-entity
        id="car-light"
        light="color: #f7ef08; type: spot"
        position="-0.1 1.2 -5.5"
        visible="false"
        rotation="-90 0 0"></a-entity>

      <!--Player-->

      <a-entity id="rig">
        <a-camera>
          <a-entity
            cursor="fuse: true; fuseTimeout: 1000"
            position="0 0 -1"
            geometry="primitive: ring;"
            material="color: red; shader: flat;"
            animation="property: scale; from:0.05 0.05 0.05; to: 0.02 0.02 0.02 ;dur: 1000;easing: linear;startEvents: fusing;">
          </a-entity>
        </a-camera>
      </a-entity>
    </a-scene>
  </body>
</html>

Adding animation to cursor for visual feedback

As shown in the video below, it’s much more intuitive to understand how events are triggered with the embedded visual feedback:

Output

Mobile VR experience after cursor interactivity

## Conclusion
We’ve now understood gaze-based interactions and we can elevate the immersion and user experience of our VR scene, making it more captivating and interactive for your audience. 
, we’ll learn interactions in detail by understanding JavaScript and DOM operations on a deeper level.