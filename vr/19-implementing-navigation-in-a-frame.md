# Implementing Navigation in A-Frame
Learn to implement smooth movement, teleportation, and versatile control systems for enhanced user interaction and immersion in virtual environments.
**VR** **locomotion** refers to how users move and navigate a virtual environment. In other words, it’s the technology and techniques used to simulate movement in a virtual space, including walking, running, jumping, flying, and even teleporting.
Locomotion is significant in VR because it’s crucial in creating a sense of immersion and presence within the virtual environment. It allows users to explore and interact with virtual worlds in a natural and intuitive way, which can enhance the overall experience and make it more engaging and compelling.
However, VR locomotion can also present challenges and limitations, such as motion sickness, disorientation, and difficulty navigating complex environments. As a result, VR developers have been working to develop new and innovative locomotion techniques that address these issues and provide users with a more seamless and comfortable experience.

## Smooth locomotion
So far, in our A-Frame experiences, we’ve moved around in the scene using the WASD keyboard keys and the mouse. This movement is known as smooth locomotion. We see the scene from the camera’s perspective, so we can think of the camera as the player. Two main components are attached to the `<a-camera>` primitive, enabling _smooth locomotion_:

*   `look-controls`
    
*   `wasd-controls`
    

### The `look-controls` component
The `look-controls` component rotates the entity it is attached to when we rotate a VR camera, move the mouse, or touch-drag the touchscreen.

Let’s create a camera rig that will serve as the parent entity of the camera. We’ll apply all our transformations on the camera rig rather than the camera itself. We can think of the rig as the gimbal, so when we move the gimbal, we’re indirectly moving the camera. This approach is useful for understanding locomotion and creating immersive experiences because it allows us to implement consistent and expected movement patterns for the user’s viewpoint while maintaining control over the camera’s behavior.

index.html

HTML

<a-entity

  id="camera-rig"

  position="0 1.6 0"

  look-controls>

  <a-camera

    id="camera"

    position="0 0 0">

  </a-camera>

</a-entity>

So far, we’ve clicked and dragged the mouse in order to explore the A-Frame scene. We can modify the `look-controls` component to create a first-person shooter game-type player where we don’t have to click and drag. We can do this by setting the `pointerLockEnabled` flag to `true`, as shown in this example:

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Teleportation-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg" />
      </a-assets>
      <a-sky
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

look-controls component

We noticed that we were not able to move around using the WASD keys. We’ll learn about this next.

### The `wasd-controls` component
The `wasd-controls` component controls an entity with the WASD or arrow keyboard keys. The `wasd-controls` component is commonly attached to the camera.

*   This component is responsible for the `acceleration` attribute of the `wasd-controls` component. The default value of the acceleration is `65`.
    
*   It allows to modify the `fly` attribute for the flying movement, which means the player can move beyond their initial plane. You can experiment with this by pointing the camera toward the sky and then pressing the “W” key.
    

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Teleportation-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/wLybRkdEJD6/Screenshot 2023-11-10 at 3.32.04 PM.png" />
      </a-assets>
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/wLybRkdEJD6/Screenshot](https://www.educative.io/udata/wLybRkdEJD6/Screenshot) 2023-11-10 at 3.32.04 PM.png

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/wLybRkdEJD6/Screenshot](https://www.educative.io/udata/wLybRkdEJD6/Screenshot) 2023-11-10 at 3.32.04 PM.png

The wasd-controls component

In the example above, we attach the `wasd-controls` component to the `camera` entity with an `acceleration` of `10` and the `fly` attribute set to `true`.

## The `movement-controls` component
So far, our input modality on the web has consisted of the keyboard and mouse to move around in the virtual scene. But what if we extend locomotion to other modalities, such as touchpad, gamepad, or hand controllers? For this functionality, we have the `movement-controls` component. We add the component using the following `<script>` tag to import the `aframe-extras.js` file:

index.html

HTML

<script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-extras@fb96ab2/dist/aframe-extras.js"></script>

The `movement-controls` component provides several modes: `walk`, `fly`, and `teleport`. In the following example, we demonstrate the default locomotion behavior after we include the `look-controls` component in the `cameraRig` entity. We’ve set the `pointerLockEnabled` attribute to `true`.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Locomotion-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-extras@fb96ab2/dist/aframe-extras.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <a-asset-item
          id="scene"
          src="https://cdn.glitch.me/40132c39-d787-404a-944d-86a83cbc1dbe/low_poly_forest.glb"></a-asset-item>
        <img
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

WARNING: Multiple instances of Three.js being imported.

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

WARNING: Multiple instances of Three.js being imported.

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

In the example above, we load a forest model and attach the `movement-controls` component to the camera rig. It’s crucial to see that we’ve not attached any components to the `camera` entity. The `movement-controls` component has configured the input medium itself, and we can move around in the scene using the WASD keys.

## Teleportation
Lastly, we’ll cover teleportation as part of our locomotion lesson. **Teleportation** is a popular technique for enabling user movement in VR. It allows users to quickly and easily move from one location to another within the virtual environment. In A-Frame, we can use the `cursor-teleport` component to enable teleportation. Include the following `<script>` tag to import the `aframe-cursor-teleport-component.min.js` file:

index.html

HTML

<script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-cursor-teleport@581ab70/dist/aframe-cursor-teleport-component.min.js"></script>

In this example, we attach the `cursor-teleport` component to the `cameraRig` entity. We set the `cameraRig` property of the component to the `#cameraRig` entity and the `cameraHead` property to the `#head` entity. This configuration allows the user to teleport around the virtual environment by pointing their cursor and clicking on the desired space.

We also define entities in the scene with two classes: `collision` and `ignore`. The `collision` class entity is where the cursor teleport function will occur. We do this by specifying the `collisionEntities` property to `.collision`. Similarly, we set the `ignoreEntities` property on the `cursor-teleport` component to `.ignore` to ignore teleportation on the objects with this class.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Teleportation-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-cursor-teleport@581ab70/dist/aframe-cursor-teleport-component.min.js"></script>
  </head>

  <body>
    <a-scene cursor="rayOrigin: mouse">
      <a-assets>
        <a-asset-item
          id="sample"
          src="https://cdn.glitch.global/7078a71b-383a-4515-abb9-5800d43c6930/compressed.glb?v=1692186289432"></a-asset-item>
      </a-assets>
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

The cursor-teleport component

That is it for locomotion. Fighter guy credits: SketchFab

## Conclusion
In this lesson, we saw a variety of different locomotion techniques, such as smooth artificial locomotion and teleportation. Overall, locomotion is a crucial aspect of the VR experience because it enables users to explore and interact with virtual environments in a way that feels natural and immersive.