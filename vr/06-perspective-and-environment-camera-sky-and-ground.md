# Perspective and Environment: Camera, Sky, and Ground
Get an introduction to the camera component and its features. Learn to add sky and ground components to your scene.
The **camera** component in A-Frame represents the perspective from which the user views the scene. To create a camera component in A-Frame, we can use the `<a-camera>` primitive, which is a convenience layer (i.e., syntactic sugar) for the `<a-entity>` element with camera components.

## Recreating the default camera
A-Frame adds a default camera on its own if we don’t explicitly define the camera in the scene. The camera component is just an entity with the `camera`, `look-controls`, and `wasd-controls` properties as shown below:

index.html

HTML

```
<a-entity
  camera="active: true"
  look-controls
  wasd-controls
  position="0 1.6 0"></a-entity>
```

The default camera’s height is set at `1.6` meters because this is the human eye level. As we can see in the example below, when we zoom into the model, we’re at the average human eye level. We can experiment with changing the height to `0` and we’ll feel the differences that varying the height level can cause. This is why the height level is a critical piece of information that we take into account when designing virtual scenes. Remember that we can always change the height of the camera to cater to different user groups. For instance, a height of `1.6` meters won’t be suitable if we’re designing a science exhibition for children. We’ll have to decrease the height level to the average height of the child.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Camera-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg" />
      </a-assets>
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

core:a-node:warn Rendering scene with errors on node:

1.  ▶{#@t: "HTMLElement", data: Object}
    

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

core:a-node:warn Rendering scene with errors on node:

1.  ▶{#@t: "HTMLElement", data: Object}
    

components:gltf-model:warn Failed to fetch

Let’s take a look at the camera properties for the above demo.

## Camera properties
The camera component comes with some built-in properties, which are as follows:

*   `position`: This property sets the position of the camera in 3D space. It takes three coordinate values (x, y, z) and determines where the camera is located in the scene.
    
*   `look-controls`: This property enables the camera to be controlled by the user’s head movement. When this property is set to `true`, the user can look around the scene by moving their head.
    
*   `wasd-controls`: This property enables the camera to be controlled by the user’s keyboard. When this property is set to `true`, the user can move around the scene using the W, A, S, and D keys.
    
*   `fov`: This property sets the field of view for the camera. It determines how much of the scene is visible to the user. The value is measured in degrees and can range from 1 to 179.
    
*   `near`: This property sets the distance to the near clipping plane. Objects closer than this distance won’t be rendered by the camera.
    
*   `far`: This property sets the distance to the far clipping plane. Objects farther than this distance won’t be rendered by the camera.
    
*   `active`: This property determines whether the camera is the active camera in the scene. Only one camera can be active at a time, and the active camera is the one that is used to render the scene.
    
*   `zoom`: This property determines the zoom factor of the camera.
    

You’re encouraged can experiment with these properties in the example above by tweaking the `position` attribute’s value in the highlighted line.

The above figure displays the camera in A-Frame Inspector.

## Camera in VR
Remember that certain camera properties like `far`, `near`, `fov`, and `zoom` only apply in 2D mode and **magic window mode**, a feature where a frame-like viewport can be moved on a screen. In VR mode, the camera’s settings are automatically adjusted by the WebXR Device API to match the interpupillary distance (IPD) and the headset’s field of view (FOV). These parameters are fixed and cannot be modified during VR operation.

After exiting the VR session, the camera’s rotation will be restored to its original rotation before entering VR. This ensures that the camera’s rotation is back to the default position for a desktop screen.

## HUD-like behavior
We can also fix entities with the camera such that they always stay within the user’s view. An application of this behavior is the **heads-up display (HUD)**. Using a heads-up display (HUD) in VR can be a great way to provide additional information to the user without disrupting the immersive experience. By displaying information like a minimap, health bar, or objective marker in a fixed position within the user’s field of view, HUD can enhance the overall VR experience and make it easier for the user to navigate and interact with the virtual environment.

However, it’s important to be mindful of the size, position, and visual design of the HUD elements to avoid causing discomfort or distraction for the user.

> **Note:** Use HUDs sparingly as they cause eye strain in VR. If you have to choose HUD, make sure that HUD elements are positioned near the center of the field of view, so that the user doesn’t have to strain their eyes to view them.

The HUD shouldn’t block or obscure essential parts of the scene or require the user to shift their focus to view it. Additionally, the design of the HUD should be consistent with the overall visual style of the experience to ensure a cohesive and immersive user experience.

The following example demonstrates a simple implementation of fixing a plane entity as a child of the camera:

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Camera-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg" />
      </a-assets>
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

core:a-node:warn Rendering scene with errors on node:

1.  ▶{#@t: "HTMLElement", data: Object}
    

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

core:a-node:warn Rendering scene with errors on node:

1.  ▶{#@t: "HTMLElement", data: Object}
    

components:gltf-model:warn Failed to fetch

Moving around in the scene, we can see how the plane moves along with the camera’s position in the scene.

> **Note:** A-Frame provides two ways to specify camera properties, i.e., either we assign attributes within the `<a-camera>` primitive or specify in a separate `camera` attribute attached to an entity, and both styles are valid.

## Sky and ground
So far in our scenes, we’ve observed that there’s a white negative space. We can replace this by adding the `<a-sky>` primitive to customize the overall virtual scene in the example below. Behind the scenes, the sky is a sphere with a default radius of `500` meters. The image we provide to the `<a-sky>` primitive is mapped inside this sphere.

After adding the sky, we’ll still see that there’s a large empty space. Since the sky’s diameter is `500` meters, we can extend our ground (the `<a-plane>` primitive) by scaling it to `1000` meters in the x-y plane to create an appropriate horizon in our scene.

We can cause dramatic changes in the lighting and visual impact of the scene by changing the y-axis rotation of the `<a-sky>` entity, first to `0`, then to `-75`, and finally, to `-45`.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Camera-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <a-asset-item
          id="sample"
          src="https://cdn.glitch.global/7078a71b-383a-4515-abb9-5800d43c6930/compressed.glb?v=1692186289432"></a-asset-item>
        <img
          id="sky"
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

### Conclusion
We learned about the camera and its attributes in this lesson. To stitch an item permanently onto the user’s view, we learned to include an empty square within the camera. This feature can be useful in case we want to display additional information to the user like player/enemy health, etc. We also learned to set up the sky and ground for our scene.