# JavaScript, Events, and DOM APIs
Learn to use JavaScript functions to locate, traverse, and manipulate DOM elements.
So far, we’ve covered the basics of how A-Frame interacts with JavaScript and DOM APIs to produce VR experiences. In this lesson, we’ll learn more about manipulating the scene through JavaScript and how to dynamically add new objects after the A-Frame scene has been initialized.
Components modularize code, make logic and behavior visible from HTML, and ensure that code is executed at the correct time. We’ve been adding our components in the `<script>` tag at the head of the HTML file. In this lesson, we’ll create a separate JavaScript file to make our components more modular.
> **Note:** Don’t try to put A-Frame-related JavaScript in a raw `<script>` tag after `<a-scene>` as we would with traditional 2D scripting because doing so would result in an incorrect order of code execution.

## Getting entities by querying and traversing
The DOM serves as a scene graph, and one of its remarkable features is that it offers various tools for traversing, querying, finding, and selecting elements through functions such as the `.querySelector()` and `.querySelectorAll()` methods.

### The `querySelector()` method
If we want to grab an element from the scene graph, we use this function. We can give the entity’s ID as the argument to this function. For example, we can get the scene element by:

```
var sceneEl = document.querySelector('a-scene');
```

The `querySector()` method retrieves the first element that matches the query criteria provided, which may include entity IDs, classes, and more advanced selector expressions.

### The `querySelectorAll()` method
If we want a reference to a group of elements that share specific attributes, we use the `.querySelectorAll()` function to get an array of elements. For example, we can use this code to get all the entities in the scene that feature the `collidable` class and loop over them:

```
var sceneEl = document.querySelector('a-scene');
var collidableEntities = sceneEl.querySelectorAll('.collidable');
//looping over entities
for (var i = 0; i < collidableEntities.length; i++) {
  console.log(collidableEntities[i]);
}
```

> **Note:** Avoid repetitively using such functions because they compromise the performance by requiring more time to loop over the DOM to retrieve entities, therefore affecting the experience.

### Querying entities with a specific component
We can query for elements containing a component with an attribute selector (e.g., `[<ATTRIBUTE_NAME>]`). For example, here’s how we can grab the first entity that has a camera:

```
console.log(sceneEl.querySelector('[camera]'));
```

### Retrieving component data using the `getAttribute()` method
To retrieve a component’s data, we can use the `getAttribute()` function. In this example, we retrieve the `box` component’s `color` property:

```
var el = document.querySelector('a-box');
el.getAttribute('geometry', 'color');
```

When we use the `el.getAttribute('position')` or `el.getAttribute('scale')` methods, we’ll receive the `Vector3` position and scale properties of the `Object3D` constructor from three.js. Remember that modifying these properties will alter the original entity data. This is because A-Frame permits us to modify position, rotation, scale, and visibility at the three.js level. In order for `.getAttribute` to return accurate data, A-Frame retrieves the actual `Object3D` objects.

However, this doesn’t apply to the `.getAttribute(‘rotation’)` method, which A-Frame measures in degrees instead of radians. In this case, a regular JavaScript object with x/y/z properties is returned. If we need to work with radians at a lower level, we can obtain the Object3D Euler through `el.object3D.rotation`.

## Modifying the A-Frame scene graph
With JavaScript and DOM APIs, we can add or remove entities from our A-Frame scene as we would add or remove tags in a simple HTML web page.

### Creating an entity with the `createElement()` method
We can create an entity or primitive using the `document.createElement()` function.

```
var el = document.createElement('a-entity');
```

This will create an empty entity, but it won’t be attached to the scene.

### Modifying an entity using the `setAttribute()` method
We know that a blank entity doesn’t do anything unless we specify some kind of component for it. We can do this using the `setAttribute(componentName, data)` function. For example, we can add a `geometry` component by providing the component’s name and the associated data:

```
el.setAttribute('geometry', {
  primitive: 'box',
  height: '3',
});
```

We can also update an entity’s component using the `setAttribute()` function. For example, we can update the `position` component data.

```
el.setAttribute('position', {
  x: '1',
  y: '2',
  z: '3',
});
```

### Attaching an entity to a scene using the `appendChild()` method
To attach the entity to the scene, we can use the `.appendChild()` function. First, we get a reference to the scene element using the query selector, then create an entity, and finally attach the entity to the scene.

```
var sceneEl = document.querySelector('a-scene');
var el = document.createElement('a-entity');
sceneEl.appendChild(el);
```

However, we need to remember that the `.appendChild()` call isn’t asynchronous. As a result, we can execute operations on the entity immediately after it has been appended to the scene. For instance, if we wish to attach a component to the empty entity, we can do so without issues. There’s no need to rely solely on the `loaded` event to carry out these actions. The following code demonstrates this.

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

### Remove an entity with the `removeChild()` method
To remove an entity from the DOM and, therefore, from the scene, we call `.removeChild(entity)` from the parent element. If we have a reference to the entity to remove, we have to ask its parent (accessed via the `parentNode` property) to remove the entity. In this example, we remove the box when it’s clicked. In the event handler, we can either get the `scene` element (using `this.el.sceneEl`) to get to the parent node, or we can use `box.parentNode` for that purpose. Both methods are presented in the code shown below, with the `box.parentNode` method on **line 5** commented out. You can uncomment **line 5** and comment out **lines 6–7** to verify its operation.

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

## Conclusion
We explored manipulating A-Frame scenes using JavaScript. Components were highlighted for modularizing code and controlling behavior via HTML. We stressed the importance of avoiding raw `<script>` tags after `<a-scene>` to maintain code execution order.