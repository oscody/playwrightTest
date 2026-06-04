# XR Scene Setup and Object Decomposition
Learn to configure A-Frame and get an introduction to XR objects and their basic components, such as position, rotation, and scale.
What constitutes an XR scene?
To start with A-Frame development, we can start an HTML file by dropping a `<script>` tag pointing to the CDN build in the head of the file.
We’ll use the latest A-Frame version 1.4.0 released in 2023 in this course.

## What constitutes an XR scene?
An XR experience is defined in a scene. The following snippet demonstrates how we can include an `<a-scene>` tag in our scene.

index.html

HTML

```
<html>
  <head>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>
  <body>
    <a-scene> </a-scene>
  </body>
</html>
```

Once we specify the A-Frame version, a button is automatically added on the bottom-right of the web page, as shown in the upcoming example. Inspecting the elements of the web page in the browser’s developer tools, we observe that the `<a-scene>` tag comes with a boilerplate code that sets up the **camera**, **renderer**, **render loop**, and **default lighting** and also configures the WebXR device (which would otherwise have to be done manually).

Now, let’s add a primitive object, such as a box. To add a box, we’ll add an `<a-box>` tag under the `<a-scene>` tag. We use the `color` property of the primitive box to give it a green color to distinguish it from the white background. We navigate within the scene using WASD keys and using the click-and-drag functionality of the mouse.

HTML

```
<html>
  <head>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg" />
      </a-assets>

      <a-plane
        color="gray"
        position="0 0 -3"
        scale="1000 1000 0"
        rotation="-90 0 0">
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

Implementing a primitive geometry object

You’re encouraged to experiment with other primitive objects such as a sphere (`<a-sphere>`), a plane (`<a-plane>`), a sky (`<a-sky>`), a cylinder (`<a-cylinder>`), a cone (`<a-cone>`), and a dodecahedron(`<a-dodecahedron>`).

### Exploring primitive properties
, let’s learn about the properties associated with primitive objects in A-Frame. Because VR programming involves modeling real environments in virtual ones, let’s try to prototype a car model with primitives in A-Frame. Here’s a rough car sketch that we aim to create:

We can see that this car can be modeled with eight `<a-box>` tags (four sides including roof, windshield, hood, and rear) and four `<a-cylinder>` primitives for the wheels of the vehicle.

### The `position` attribute
The `position` attribute is used to specify the 3D coordinates of an entity in the scene. The values for the x, y, and z values of the `position` attribute determine the entity’s position along the x-, y-, and z-axes, respectively. Usually, the default position value for an object is at the origin at (0, 0, 0). Each unit in the A-Frame scene is equivalent to one meter in the real world. These values can be set using either absolute units (such as meters) or relative units (such as percentages of the scene’s dimensions).

index.html

HTML

```
<a-box
  id="roof"
  color="#FFFAAA"
  position="0 0 -2"
  height="0.05"
  width="1.5"
  depth="0.75">
</a-box>
```

For example, the above code would position a box with the `“id”` property set to `“roof”` at the (0, 0, -2) point in the scene.

### The `rotation` attribute
The `rotation` attribute is used to specify the rotation of an entity in the scene. The values for the x, y, and z properties of the `rotation` attribute determine the entity’s rotation around the x-, y-, and z-axes, respectively. These values are specified in degrees.

index.html

HTML

```
<a-box
  id="windshield"
  color="#FFFAAA"
  position="1 -0.25 -2"
  rotation="0 0 140"
  height="0.05"
  width="0.75"
  depth="0.75">
</a-box>
```

For example, the above code would rotate a box (with the `“id”` property set to `“windshield”`) a total of 140 degrees around the z-axis.

#### The right-hand rule
The **right-hand rule** is a convention used to determine the direction of an object’s rotation. The rule states that if you point your thumb in the direction of the positive axis (e.g., positive x-axis), then your fingers will curl in the direction of negative rotation (counterclockwise). The same is true for other y- and z-axes.

This helps to ensure consistency in the rotation of objects in 3D space and can be especially useful when working with complex models or scenes that require precise rotations.

### The `scale` property
The `"scale"` property is used to change the size of an object in the 3D space. The scale property can be applied to any A-Frame entity, and it takes three values, one for each axis (x, y, and z). The scale is set to `"1,1,1"` by default, which means the object has a normal size. To make an object larger, we’ll increase one or more values. For example, to make an object twice as large along the x-axis, we’ll set the `scale` property to `"2 1 1"`. To make an object smaller, we would decrease one or more of the values.

index.html

HTML

```
<a-box
  id="bonnet"
  color="FFFAAA"
  position="1.25 -0.6275 -2"
  scale="1 0.3 0.74211">
</a-box>
```

For example, the above code would scale a box with the `“id”` property set to `"bonnet"` to 1 along the x-axis, 0.3 along the y-axis, and 0.74211 along the z-axis. Scaling should be appropriately modified along all axes to preserve the original shape.

> **Note:** We'll learn more about these properties visually in the upcoming lesson.

Let’s now apply the above components to create the initial model of our car. We nest all the primitives used to represent our car inside an `<a-entity>` tag. We can now change the position of all the primitives, or set their rotation or their scale, as a whole, by setting the appropriate attributes of the `<a-entity>` tag. For example, in this case, we instruct A-Frame to place the object at the (0, 0, -3) coordinates.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

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

Implementation of the car example

The concepts and techniques discussed so far can help us position the remaining components of the car in the scene. For example, we can use the `<a-cylinder>` primitive to model the car’s tires, using the scale, position, and rotation attributes to achieve the desired design.

Here’s the final car prototype that we can view in a new tab as well:

index.html

```
<html>
  <head>
    <title> Car prototype using A-Frame </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="/udata/MvYQRVanpqG/SKY.jpg" />
      </a-assets>

      <a-sky
        src="#sky"
        rotation="0 -60 0">
      </a-sky>

      <a-plane
        color="gray"
        position="0 0 -3"
        scale="1000 1000 0"
        rotation="-90 0 0">
      </a-plane>

      <!-- Car -->
      <a-entity
```

Final implementation of the car example

We can view the car we’ve built in the above example in our connected headset by clicking the “Run Application” button given below:

Connect your VR headset to get started.

## Conclusion
Through this lesson, we’ve acquired fundamental insights into configuring A-Frame and the core elements of XR objects, including their essential components, such as position, rotation, and scale.