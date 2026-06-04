# Visual Inspector in A-Frame
Develop an understanding of the main features of the visual inspector provided by A-Frame.
A valuable feature provided by A-Frame is the in-browser **visual inspector**. This tool provides a graphical user interface that allows us to inspect the hierarchy of entities and their components in a scene and modify the components and their attributes in real time. We can immediately see the effect of changing values without having to switch back and forth between the code editor and the browser. The visual inspector eases the development process by providing easy-to-use functionality such as adding entities, transforming entities, and copy-pasting them in the HTML code. The developers of A-Frame have provided a user experience similar to the DevTools inspector available in all modern browsers that web developers are already familiar with.
> **Note:** The visual inspector is available in most modern web browsers, including Google Chrome and Mozilla Firefox.

## Main components
We’ll explore the visual inspector by building on the car prototype example. As we’ve experienced earlier, it’s difficult to analyze the position, rotation, and scale of entities using just the code. A graphical interface is an essential support. It allows us to observe the changes to our entities in a 3D space in real time and it enables an intuitive process of incremental refinement of our 3D models.

So, here’s the baseline code of the car prototype:

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Basic Scene using A-Frame </title>
  </head>

  <body>
    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg" />
      </a-assets>
```

Output

A-Frame:warn Put the A-Frame <script> tag in the <head> of the HTML \*before\* the scene to ensure everything for A-Frame is properly registered before they are used from HTML.

A-Frame Version: 1.3.0 (Date 2022-02-04, Commit #cc3516ce)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.137.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

A-Frame:warn Put the A-Frame <script> tag in the <head> of the HTML \*before\* the scene to ensure everything for A-Frame is properly registered before they are used from HTML.

A-Frame Version: 1.3.0 (Date 2022-02-04, Commit #cc3516ce)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.137.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

Now, let’s see how we can use the visual inspector tool to add headlights to our car example. After clicking the “Run” button, click the URL next to the “Your app can be found at:” option to open the scene in a new browser tab.

<html>
  <head>
    <title> Basic Scene using A-Frame </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="/udata/kgDED4xXMVm/clear-sunny-sky.jpg" />
      </a-assets>

      <a-plane
        color="gray"
        position="0 0 -3"
        scale="1000 1000 0"
        rotation="-90 0 0">
      </a-plane>
      <a-sky
        src="#sky"
        rotation="0 -60 0">
      </a-sky>
      <!-- Car -->
      <a-entity
        id="car"
        position="0 1 -2">
        <a-box
          id="body-1"
          color="#FFFAAA"
          position="0 0 -2"
          height="0.05"
          width="1.5"
          depth="0.75">
        </a-box>

        <a-box
          id="body-2"
          color="#FFFAAA"
          position="0 -0.75 -2"
          height="0.05"
          width="1.5"
          depth="0.75">
        </a-box>

        <a-box
          id="body-3"
          color="#FFFAAA"
          position="0 -0.4 -1.65"
          rotation="90 0 0"
          height="0.05"
          width="1.5"
          depth="0.75">
        </a-box>

        <a-box
          id="body-4"
          color="#FFFAAA"
          position="0 -0.4 -2.35"
          rotation="90 0 0"
          height="0.05"
          width="1.5"
          depth="0.75">
        </a-box>

        <a-box
          id="windshield"
          color="#FFFAAA"
          position="1 -0.25 -2"
          rotation="0 0 140"
          height="0.05"
          width="0.75"
          depth="0.75">
        </a-box>

        <a-box
          id="bonnet"
          color="#FFFAAA"
          position="1.25 -0.6275 -2"
          scale="1 0.3 0.74211">
        </a-box>

        <a-box
          id="back"
          color="#FFFAAA"
          position="-0.7275 -0.375 -2"
          rotation="0 0 90"
          height="0.05"
          width="0.8"
          depth="0.75">
        </a-box>

        <!-- Directional Light -->
        <a-entity
          light="color: #ffffff"
          position="-0.30451 3.222 3.95996"></a-entity>

        <a-cylinder
          id="wheel1"
          color="#444444"
          rotation="90 0 0"
          scale="0.15 0.15 0.15"
          position="1.251 -0.8765 -1.7219">
        </a-cylinder>
        <a-cylinder
          id="wheel2"
          color="#444444"
          rotation="90 0 0"
          scale="0.15 0.15 0.15"
          position="-0.448 -0.87162 -1.71224"></a-cylinder>
        <a-cylinder
          id="wheel3"
          color="#444444"
          rotation="90 0 0"
          scale="0.15 0.15 0.15"
          position="-0.448 -0.87162 -2.2753"></a-cylinder>
        <a-cylinder
          id="wheel4"
          color="#444444"
          rotation="90 0 0"
          scale="0.15 0.15 0.15"
          position="1.242 -0.8698 -2.2624"></a-cylinder>
      </a-entity>
    </a-scene>
  </body>
</html>

Car example

When we’ve loaded the scene in the new tab, we need to perform the following steps:

Open the inspector by pressing “Ctrl + Alt + I” on a Windows or Linux machine, or, “control + option + I” on a Mac. Pressing “H” displays the shortcuts for the functions in the inspector. You should be able to see the following:

Let’s explore each window of the editor.

### Scene graph
The **scene graph** in the A-Frame Inspector is a visual representation of the hierarchy of objects and components. Each **node** represents an object in the scene, such as a camera, light, or mesh, and the parent-child relationships between the nodes indicate the relationships between the objects in the scene. **Components**, which are modular bits of logic and behavior that can be added to objects, are also displayed in the scene graph as nodes.

The scene graph allows developers to easily understand and manipulate the structure of their scene, making it easier to identify and fix issues, add new objects or components, and make changes to the scene in real time.

### Viewport
The **viewport** in the A-Frame Inspector is a visual representation of the current view of the scene in the user’s headset or web browser. It displays a live preview of the scene, allowing developers to see exactly how the scene will look and behave as the user experiences it. The viewport also displays the headset’s camera and any controllers or other input devices the user might have. It’s an essential tool for VR developers because it allows them to see the scene from the user’s perspective, make real-time adjustments to the scene, and test how the scene behaves in different VR hardware.

We can rotate, pan, or zoom the viewport to change the view of the scene:

*   To **rotate,** hold down the left mouse button (or one finger down on a trackpad) and drag.
    
*   To **pan,** hold down the right mouse button (or two fingers down on a trackpad) and drag.
    
*   To **zoom,** scroll up and down (or perform a two-finger scroll on a trackpad).
    

From the viewport, we can also select entities and transform them:

*   To **select,** click an entity, and double-click to focus the camera on it.
    
*   To **transform,** select a helper tool from the upper-right corner of the Viewport and drag the red/blue/green guides surrounding an entity to transform it.
    

The following video demonstrates how to relocate an entity within the scene using the move helper tool.

Output

We can rotate objects in various directions (x, y, and z) as needed, achieved by utilizing the rotation tool located in the upper right corner.

Output

To decrease the size of an entity, we can utilize the scale tool in the upper right corner. This tool enables us to easily adjust the size of entities within the scene. We can see the values changing across axes in the panel on the right, called the Components Panel (we will explain this in the subsequent section).

Output

Develop your understanding further regarding the Component Panel in the following section.

### Components panel
The **components panel** allows us to inspect and edit the properties of components in their A-Frame scene. The components panel lists all the components attached to the selected object, along with their properties and values. Here are some of the different components that we can attach to the entity:

In the components panel, developers can inspect and edit the properties of components, such as changing the position, rotation, and scale of objects, changing the color of materials, or adding animations and interactivity. The changes made in the components panel are reflected in real time in the viewport, allowing developers to see the results of their changes as they work.

## Conclusion
A-Frame Visual Inspector is surely a worthy addition to the WebXR development toolbox. It speeds development by providing a user-friendly interface for real-time entity inspection and attribute modification. It streamlines the development process, akin to the familiar DevTools inspector in modern web browsers.