# Animating Objects
Learn to create, modify, and apply animations to objects in A-Frame.
In this lesson, we’ll learn how to add animations to A-Frame objects using the built-in animation component. Animations can add interactivity and visual interest to XR experiences and can be used to create a variety of effects, such as movement, rotation, and scaling.
We’ll learn about the application of the animation component by modifying both the components and the components’ properties.

## Adding the `animation` component
The `animation` component is a built-in component in A-Frame that allows us to create and control animations in our VR/AR scene. To add the animation component to an object, we simply need to include the `animation` attribute in the object’s HTML tag like this:

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Animation-lesson </title>
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

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

In this example, we’ve added the `animation` component to a box object and set its animation properties. The `property` attribute specifies the object’s property that we want to animate (in this case, its `position`), and the `to` attribute specifies the final value (x, y, z) of the property the animation will animate toward. In this case, the cube is animated to demonstrate a linear motion on the z-axis. The initial position of the cube was `(0, 1, -5)` , and it moved to `(0, 1, -3)`. The `dur` property defines the duration of the animation, and the `loop` attribute specifies whether the animation should repeat or not.

### Properties of the animation component
Here are the key properties of the animation component:

*   `property`: This property specifies which entity property should be animated. It could be `position`, `rotation`, `scale`, `color`, or any other property.
    
*   `from` and `to` properties: These properties determine the starting and ending values of the animation. For example, if we want to animate the position of an entity from one location to another, we’d specify the starting position and the destination position.
    
*   `easing`: This property determines the rate at which the animation progresses over time. Animations can utilize easing methods like `linear`, `ease-in`, `ease-out`, or custom easing functions, affecting the animation’s pace/speed and visual smoothness.
    
*   `dur`: This property sets the length of time in milliseconds that the animation should take to complete.
    
*   `loop`: This property determines whether the animation should repeat indefinitely or just run once.
    
*   `dir`: This property in animations defines the direction of the animation, such as `normal`, `alternate` and `reverse`. In the `normal` direction, the animation progresses from the `from` value to the `to` value. In the `reverse` direction, it moves from the `to` value back to the `from` value.
    
*   `delay`: This property allows us to specify a delay before the animation starts. If the animation is set to loop continuously, the delay will apply between each animation cycle.
    

Using these properties, we can create complex animations that respond to user input, change dynamically over time, and add life to virtual reality experiences.

## Creating basic animations
Now that we’ve added the animation component to an object, let’s create some basic animation sequences. In this example, we’ll create a sequence of animations that cause a box to move, rotate, and scale over time.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Animation-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-box
        color="red"
        position="0 0 -5"
        animation__1="property: position; to: 0 2 -8; dur: 2000;"
        animation__2="property: rotation; to: 0 360 0; dur: 5000; easing: linear; loop:true;"
        animation__3="property: scale; to: 2 2 2; dur: 3000;"></a-box>
```

Output

In this example, we’ve added three separate animations to the box object, each with its own `animation` attribute. Notice that the `animation` attribute name has double underscores (`__`) and an identifier appended afterward (e.g., `animation__1`). This feature of A-Frame comes in handy when multiple animations are to be assigned to a single entity. The `dur` attribute specifies the duration of each animation in milliseconds, and the `easing` attribute specifies the easing function that controls how the animation progresses over time.

## Example: Orbiting objects
In this example, we demonstrate how we can rotate the objects in our scene in an orbit. To do this, we nest the object we want to rotate under the `animation` entity. For example, the models rotate in a `0.4` meter orbit. Similarly, the model just rotates on its current position because its x-coordinate is set to `0` relative to the `animation` component. You’re encouraged to experiment with other values below:

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Animation-lesson </title>
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

Animating models

Let’s learn to how change the properties of the components.

## Example: Changing the `animation` component’s `property`
So far, we’ve learned how to modify components such as `position`, `rotation`, and `scale`. Now, we’ll learn how to modify the value of a component’s `property` attribute, such as the `intensity` value of the `light` attribute.

We use a spot light in this example to illustrate the concept. We make the spot light a child component of the model and add the `animation` component. The `animation` component’s `property` attribute is set to `light.intensity` because that’s what we’re modifying. We increase the intensity of the light on the model from `1.0` to `20.0` in a span of `5` seconds. We can see the effect in real time below:

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Animation-lesson </title>
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

`easing` can be used when animating light intensity, providing smooth transitions in light changes. Besides light intensity, various properties can be animated, including `position`, `rotation`, `scale`, `color`, `opacity`, etc. Additionally, as seen in the above example, we can change colors along a spectrum by animating the `color` property, creating dynamic visual effects.

## Conclusion
We learned about adding animations to our XR environment via the A-Frame animation component. Now, with these animations, we can make our objects move, rotate, and scale.