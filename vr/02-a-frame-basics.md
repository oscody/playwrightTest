# A-Frame Basics
Get an introduction to A-Frame to build web-based virtual reality (VR) experiences.
What’s A-Frame?

## What’s A-Frame?
**A-Frame** is a web framework that allows us to develop XR experiences. It’s an open-source project first conceived within Mozilla that allows developers to create VR experiences using HTML and JavaScript.

A-Frame uses an HTML-like syntax, making it easy for developers familiar with web development to create XR scenes. Here’s n example of an A-Frame scene:

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
      <a-box
        position="-1 0.5 -3"
        rotation="0 45 0"
        color="#4CC3D9"></a-box>
      <a-sphere
        position="0 1.25 -5"
        radius="1.25"
        color="#EF2D5E"></a-sphere>
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

A basic A-Frame example

A-Frame is built on top of **three.js**, which is a JavaScript 3D library that allows developers to create 3D graphics for web applications. It also interacts with the WebXR API to communicate with the browser about mapping the XR content to XR devices. By using three.js, A-Frame can create more complex and detailed 3D models and animations.

three.js allows developers to create 3D graphics for A-Frame, and WebXR allows A-Frame to access the VR and AR capabilities of devices. Together, these technologies allow developers to create more powerful and immersive VR and AR experiences that can be accessed from a web browser.

The following illustration shows the relationship between WebXR, three.js, and A-Frame:

As we can see, A-Frame sits at the highest abstraction level. Below it is three.js, which directly deals with the JavaScript code involved in communicating with WebXR and WebGL. Finally, WebXR and WebGL work together to display content in the browser.

## Devices supported by A-Frame
We’re using A-Frame in this course because of its cross-platform support across numerous devices, optimized performance, and simple development. Here are the numerous devices supported by A-Frame:

*   **Desktop computers**: A-Frame can run on desktop computers with web browsers that support WebGL, such as Chrome, Firefox, etc.
    
*   **Mobile devices**: A-Frame can run on mobile devices with web browsers that support WebGL, such as Google Chrome and Mozilla Firefox. However, some features might not be supported on mobile devices due to hardware limitations.
    
*   **Virtual reality headsets**: A-Frame can run on virtual reality headsets that support WebVR, such as Oculus Rift, Meta Quest, Google Daydream, Vive Focus, Samsung GearVR, HTC Vive, and Windows Mixed Reality headsets.
    
*   **Smartphones and tablets**: A-Frame can run on smartphones and tablets that support WebXR, such as iPhone and Android devices. Users can view the experiences in VR mode by using a VR headset or in AR mode by using the device’s camera.
    
*   **Smart glasses**: A-Frame can run on smart glasses that support WebXR, such as Magic Leap One, Microsoft Hololens 2, and Nreal Light.
    

In summary, A-Frame can run on various devices as long as the device has a web browser that supports WebGL and WebXR.

## Entity-component-system (ECS) architecture
**Entity-component-system (ECS)** is a design pattern commonly used in game development to manage and organize game objects and their components. The ECS framework provides a declarative, extensible, and composable structure to three.js.

We can break down the web development process into the following components:

*   **Structure**: We use HTML to organize the page content and its hierarchy.
    
*   **Presentation**: We use CSS to define content presentation.
    
*   **Interactivity**: We use JavaScript to specify interaction on the web page.
    

Similarly, for A-Frame, there’s an ECS architecture that organizes the web framework into different functions:

*   **Structure**: We use **entities** for the organization of the 3D scene hierarchy.
    
*   **Content** **and Presentation:** We use **components** to define the 3D scene content and presentation.
    
*   **Interactivity**: We use **systems** such as physics and particle systems to specify interaction in the 3D scene.
    

In summary, A-Frame uses an ECS architecture to manage the entities (objects) and their components (properties and behaviors) in a virtual reality scene.

## Conclusion
This lesson provided an introductory dive into A-Frame, equipping us with the knowledge to start building web-based VR experiences using HTML and JavaScript, harnessing the capabilities of this versatile framework.