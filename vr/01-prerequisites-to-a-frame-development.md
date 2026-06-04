# Prerequisites to A-Frame Development
Develop an understanding of the widgets used in this course.
Before starting with A-Frame and VR development, let’s familiarize ourselves with the widgets we’ll use throughout the course. A brief introduction to the technology we use will be helpful for us to navigate the material smoothly.

## Sandpack widget
Here’s an example of the Sandpack widget where we can write our HTML code, and it will reflect the changes in real time:

HTML

```
<html>
  <head>
    <link
      rel="stylesheet"
      href="/styles.css" />
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

We’ll use this widget for WebXR examples throughout the lessons in this course. Let’s move on to a single-page application widget demo.

## Single-page application widget
Here’s the single-page application (SPA) widget that allows us to create front-end applications. We use the same code in this widget as in the Sandpack example above. After clicking the “Run” button, click the URL next to the “Your app can be found at:” option. This would open up the scene in a new browser tab. This feature can be useful to us when we want to view the experience in different mediums.

<html>
  <head>
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
      <a-cylinder
        position="1 0.75 -3"
        radius="0.5"
        height="1.5"
        color="#FFC65D"></a-cylinder>
      <a-plane
        position="0 0 -4"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  </body>
</html>

We can also run and test applications on VR devices using the XR widget.

## XR Widget
The XR widget allows us to view the scene in our connected VR headset without any confusing configuration steps. We’ll use the XR widget in conjunction with the SPA widget. The following steps will enable viewing the above scene in the VR headset:

1.  Connect your VR headset to your machine.
    
2.  Click the “Run Application” button.
    
3.  Select the browser mode in the widget below.
    
4.  Connect/pair the device by clicking the “Connect” button.
    
5.  Allow USB debugging in the connected headset.
    
6.  Ensure that the relevant SPA (single-page application) widget that we want to view on the device has been run.
    
7.  Finally, click the “Start Activity” button to load the VR scene in the headset’s browser.
    
8.  Click the “VR” button on the bottom right (in the headset) to enter VR mode and explore the scene in VR.
    

Connect your VR headset to get started.

This lesson introduced us to the essential widgets that we’ll be using throughout this course to make our learning experience more interactive, engaging, and fun. The XR widget lets us launch VR experiences directly from within the browser, therefore enabling us to seamlessly monitor our progress at various stages of VR development throughout this course.