# Application: Blink Teleportation
Learn to create blink teleportation to combine all the concepts we’ve learned in this chapter.
**Blink teleportation** is a common movement technique used in VR games and applications. It allows the user to quickly move from one location to another within the VR environment by clicking a designated entity rather than physically walking or navigating there.

## Building the scenes
We’ll create a scene where we place different objects and teleport near them to inspect them. As a starting point, we’ll set up the following scene with four objects and a teleportation sign above each object. We can go near each object by clicking on its corresponding teleportation sign using the cursor. We’ve disabled keyboard navigation in the scene by setting the `wasd-controls-enabled` attribute to `false`. Now, we want to be able to teleport directly to each object rather than navigate to it using the keyboard. Here’s how we can do this:

HTML

```
 <!doctype html>
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title>Blink-Teleportation Lesson</title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
  </head>

  <body>
    <a-scene background="color: #FFFFFF">
      <!-- ASSET MANAGEMENT SYSTEM -->
      <a-sky
        rotation="0 -60 0"
        color='skyblue'>
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/WP9g6Leeawb/triangle.png](https://www.educative.io/udata/WP9g6Leeawb/triangle.png)

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/WP9g6Leeawb/triangle.png](https://www.educative.io/udata/WP9g6Leeawb/triangle.png)

Implementing the starting scene

The scene above features our objects and their corresponding teleportation signs, though we have yet to add the blink teleportation functionality.

We can break down the blink teleportation functionality into the following main features:

*   Animate blink transition (closing the eyes)
    
*   Moving the camera rig
    
*   Animate blink transition (opening the eyes)
    

## Building the component
The design of our scene is ready. We now have to work on the teleportation component that actually allows us to move from our current camera position to a location near the object when we click the “Teleport Here” icon. We’ll name this component `blink-teleportation` and attach it to the teleportation icon in the scene.

index.js

AFRAME.registerComponent('blink-teleportation', {

  schema: {

    pos: { type: 'vec3' },

    dur: { type: 'number', default: 300 },

  },

  init: function () {

    var el = this.el;

    var data = this.data;

    var camera = document.querySelector('#camera');

    var cameraRig = document.querySelector('#cameraRig');

    // Create the illusion of blink using a black image

    var blink = document.createElement('a-image');

    blink.setAttribute('material', {

      color: '#000000',

      opacity: 0,

    });

    // After setting the z coordinate we append the blink image to the camera as its child

    blink.setAttribute('position', { x: 0, y: 0, z: -0.1 });

    camera.appendChild(blink);

    // Animating the black image on click event (fade-in)

    el.addEventListener('click', function () {

      blink.setAttribute('animation', {

        property: 'material.opacity',

        from: 0,

        to: 1,

        dur: data.dur,

        easing: 'easeOutCubic',

      });

      // After animation completion, move the camera rig to the component's position

      setTimeout(function () {

        cameraRig.setAttribute('position', data.pos);

        // Emitting a custom event to trigger the fade-out animation

        el.emit('trigger-fadeout');

      }, data.dur);

    });

    // On custom event,

    el.addEventListener('trigger-fadeout', function () {

      blink.setAttribute('animation', {

        to: 0,

      });

    });

  },

});

The blink-teleportation component

Let’s take a look at how we’ve implemented the features of the blink teleportation functionality in the code above:

*   **Lines 2–5**: Schema is used to define the properties of the component.
    
    *   The first property is `pos`, which has a `vec3` property type, allowing for the passing of coordinate information as three numbers.
        
    *   The second property is `dur`, a number property type with a default value of 300, representing the duration of the animation.
        
*   **Lines 7–44**: In the `init()` function, the following operations are performed:
    
    *   **Line 8**: We get and store the reference to the entity to which the component is attached using `this.el`.
        
    *   We access the data passed to the component, storing it in the `data` variable.
        
    *   We use the `querySelector()` function to get references to the camera and camera rig in the scene.
        
    *   A black image is initialized using the `createElement()` DOM function, creating an `<a-image>` tag with opacity set to 0.
        
    *   **Line 22**: We append this image, after changing its position, as a child entity of the camera.
        
    *   The black image’s opacity is initially set to zero, making it invisible.
        
    *   We add an animation to the blink entity that’s triggered on click, changing the opacity of the black image from 0 to 1 to create a blinking illusion.
        
    *   The `setTimeout()` function is used to schedule the execution of the code that moves the camera after the duration specified by `data.dur`.
        
    *   This function also creates a smooth transition, preventing immediate change in the camera's position at the start of the animation.
        
    *   A "trigger-fadeout" event is emitted to trigger the fadeout animation.
        
    *   **Line 40**: An event listener is added to the entity, which sets the opacity back to zero using the `setAttribute()` function upon detecting the 'trigger-fadeout' event.
        

## Final demo
Now, we’ll simply add the component that we built above to all the `<a-image>` entities in the scene signaling teleportation. We provide the `pos` data in the component in accordance with where we want the camera rig to be after teleportation.

We also attach the `look-at` component to the entities and direct them to the camera. The `look-at` component allows us to dynamically rotate an entity’s face toward another entity or position. We embed the `look-at` component in the teleportation entities so that whenever we teleport to a certain position, the “Teleport Here” arrow looks at us.

HTML

```
 <!doctype html>
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title>Blink-Teleportation Lesson</title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
  </head>

  <body>
    <a-scene background="color: #FFFFFF">
      <!-- ASSET MANAGEMENT SYSTEM -->
      
      <a-sky
        rotation="0 -60 0"
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/WP9g6Leeawb/triangle.png](https://www.educative.io/udata/WP9g6Leeawb/triangle.png)

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/WP9g6Leeawb/triangle.png](https://www.educative.io/udata/WP9g6Leeawb/triangle.png)

Final teleportation demo

In order to experience the demo in your VR headset, please click the “Run” button below and then follow the instructions given below.

 <!doctype html>
<html>
  <head>
    <title>Blink-Teleportation Lesson</title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
  </head>

  <body>
    <a-scene background="color: #FFFFFF">
      <!-- ASSET MANAGEMENT SYSTEM -->
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg" />
      </a-assets>
      <a-sky
        color="skyblue"
        rotation="0 -60 0">
      </a-sky>
      <a-assets>
        <a-asset-item
          id="car"
          src="https://cdn.glitch.me/40132c39-d787-404a-944d-86a83cbc1dbe/free\_porsche\_911\_carrera\_4s.glb"></a-asset-item>
        <a-asset-item
          id="model"
          src="https://cdn.glitch.global/7078a71b-383a-4515-abb9-5800d43c6930/compressed.glb?v=1692186289432"></a-asset-item>
        <img
          id="arrow"
          src="https://www.educative.io/udata/WP9g6Leeawb/triangle.png" />
      </a-assets>

      <!--Sky-->

      <!-- Car Model -->
      <a-entity
        gltf-model="#car"
        scale="0.5 0.5 0.5"
        position="-3 0.5 7">
      </a-entity>
      <a-image
        src="#arrow"
        position="-3 1.5 4"
        blink-teleportation="pos: -2 0 6"
        look-at="#camera">
        <a-text
          color="black"
          position="-0.7 0.8 0"
          value="Teleport Here"></a-text>
      </a-image>

      <!-- Green box -->
      <a-box
        color="#00AA00"
        position="3.5 0.5 4">
      </a-box>
      <a-image
        src="#arrow"
        position="3 2 4"
        blink-teleportation="pos: 2 0 4"
        look-at="#camera">
        <a-text
          color="black"
          position="-0.7 0.8 0"
          value="Teleport Here"></a-text>
      </a-image>

      <!-- Fighter Model -->
      <a-entity
        gltf-model="#model"
        position="-3 0.5 -4">
      </a-entity>
      <a-image
        src="#arrow"
        position="-3 3.5 -4"
        blink-teleportation="pos: -2 0 -3"
        look-at="#camera">
        <a-text
          color="black"
          position="-0.7 0.8 0"
          value="Teleport Here"></a-text>
      </a-image>

      <!-- Blue tetrahedron -->
      <a-tetrahedron
        color="#0077FF"
        position="3.5 0.55 -4">
      </a-tetrahedron>
      <a-image
        src="#arrow"
        position="3 2.5 -4"
        blink-teleportation="pos: 2 0 -2"
        look-at="#camera">
        <a-text
          color="black"
          position="-0.7 0.8 0"
          value="Teleport Here"></a-text>
      </a-image>

      <!-- Ground -->
      <a-plane
        color="gray"
        scale="1000 1000 0"
        rotation="-90 0 0">
      </a-plane>

      <!-- Camera rig -->
      <a-entity
        id="cameraRig"
        position="0 0 12">
        <!-- Camera -->
        <a-camera
          id="camera"
          wasd-controls-enabled="false">
          <a-cursor></a-cursor>
        </a-camera>
      </a-entity>
    </a-scene>
  </body>
  <script>

AFRAME.registerComponent('blink-teleportation', {
  schema: {
    pos: { type: 'vec3' },
    dur: { type: 'number', default: 300 },
  },

  init: function () {
    var el = this.el;
    var data = this.data;
    var camera = document.querySelector('#camera');
    var cameraRig = document.querySelector('#cameraRig');

    // Create the illusion of blink using a black image
    var blink = document.createElement('a-image');
    blink.setAttribute('material', {
      color: '#000000',
      opacity: 0,
    });
    // After setting the z coordinate we append the blink image to the camera as its child
    blink.setAttribute('position', { x: 0, y: 0, z: -0.1 });
    camera.appendChild(blink);
    // Animating the black image on click event (fade-in)
    el.addEventListener('click', function () {
      blink.setAttribute('animation', {
        property: 'material.opacity',
        from: 0,
        to: 1,
        dur: data.dur,
        easing: 'easeOutCubic',
      });
      // After animation completion, move the camera rig to the component's position
      setTimeout(function () {
        cameraRig.setAttribute('position', data.pos);
        // Emitting a custom event to trigger the fade-out animation
        el.emit('trigger-fadeout');
      }, data.dur);
    });
    // Listen on the custom event and trigger the fadeout animation
    el.addEventListener('trigger-fadeout', function () {
      blink.setAttribute('animation', {
        to: 0,
      });
    });
  },
});

    </script>
</html>

Final demo of teleportation demo for VR headset

You can experience this demo in VR by connecting your headset and clicking the “Run Application” button:

Connect your VR headset to get started.

Both teleportation techniques, blink and cursor teleportation, have their own use cases. We can use blink teleportation for use cases that require the user to teleport to a precise location. On the other hand, cursor teleportation is relatively less precise. Another important thing to note is that cursor teleportation is easier to implement than blink teleportation.

## Conclusion
We’ve explored how to enable useful interactions in VR, with the help of the built-in capabilities of A-Frame and JavaScript, as well as the `event-set` component.