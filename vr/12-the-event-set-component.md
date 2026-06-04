# The event-set Component
Learn to invoke events and manipulate target entities via the event-set component.

## Using `event-set` to invoke events
In this example, we’ll see a basic implementation of the `event-set` component that will demonstrate its simplicity in performing event-driven interactions. For the following example, we get control of the cursor (by holding the left click) and then drag the mouse to move the cursor away from the sphere to trigger a color change. Similarly, if we hover back onto the sphere, we’ll see a color change.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> event-set-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
  </head>
  <body>
    <a-scene>
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg" />
      </a-assets>
      <a-sky src="#sky"></a-sky>
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

components:raycaster:warn \[raycaster\] For performance, please define raycaster.objects when using raycaster or cursor components to whitelist which entities to intersect with. e.g., raycaster="objects: \[data-raycastable\]".

The event-set component

On **lines 26–27**, we attach two instances of the `event-set` component to the sphere. We can add any arbitrary event name after the two underscores (`__`). The `_event` property is used to define the particular event we want to listen for. We set this to `mouseenter` and `mouseleave` and change the color of the sphere when these events occur.

## Manipulating target entities
We can also use the `event-set` component to manipulate target entities. In this example, we use the sphere as a remote control of the car (a 3D model) that displays a spotlight above it. Drag the cursor onto the sphere and click to cast a spotlight onto the vehicle. To turn off the spotlight, drag the cursor onto the vehicle and click.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> event-set-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <a-asset-item
          id="car"
          src="https://cdn.glitch.me/40132c39-d787-404a-944d-86a83cbc1dbe/free_porsche_911_carrera_4s.glb"></a-asset-item>
        <img
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

Manipulating target entities

On **line 39**, we attach the `event-set__show` component to the sphere. We look for the entity to manipulate using the `target` query selector. Additional key-value pairs, apart from `_event` and `_target`, will be applied upon the event emission. So, when we set `visible: true` key-value pair when the `click` event occurs on the sphere, it is the `visible` property of the `target` that is set to `true`.

Similarly, on **line 28,** we attach the `event-set__close` component to the car; therefore, dragging the cursor onto the car and then clicking it triggers the event handler that sets the light as invisible.

We can also add a delay before setting the property on the target entity using the `_delay` variable. For example, a delay of 1000ms applied on the `event-set__show` component will cause the light to become visible, but only after the passage of one second after clicking on the sphere.

## Conclusion
With this, our lesson on the `event-set` component comes to an end. We saw how the use of this component can simplify event-driven interactions in A-Frame.