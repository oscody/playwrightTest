# Lighting in VR
Learn about different types of lights and how to use them to illuminate the virtual environment in A-Frame.
Light is an essential part of our lives. Colors are visible to the human eye when light hits the surface of objects around us. It plays a significant role in how we perceive and experience an environment. Having optimal lighting conditions can enhance the overall look and feel of an environment and, therefore, our mood.
In this lesson, we’ll understand lighting and its types and how to use them in different scenes.

## Default lighting
By default, there’s **directional** and **ambient** lighting in the scene with the parameters shown below:

index.html

HTML

```
<!-- Default lighting in A-Frame. -->
<a-entity light="type: ambient; color: #BBB"></a-entity>
<a-entity
  light="type: directional; color: #FFF; intensity: 0.6"
  position="-0.5 1 1"></a-entity>
```

## Adding a light to our scene
To add light to our A-Frame scene, we’ll need to use the `<a-light>` primitive. Here’s an example:

index.html

HTML

```
<a-scene>
  <a-light
    type="point"
    color="#FFF"
    intensity="1"
    position="0 3 -5"></a-light>
</a-scene>
```

In this example, we’re adding a **point** **light** to the scene. The `color` attribute sets the color of the light and the `intensity` attribute sets the strength/brightness of the light.

## Light types
A-Frame supports four types of lights: **ambient**, **directional**, **spot**, and **point**. Here’s an overview of each:

### Ambient light
A good lighting design is all about layers. Different layers are employed to define the overall environment. We need to blend different light sources into the space to create contrast and accentuate colors and textures. **Ambient light** is the base layer of light in any space. The main purpose of ambient lighting is overall illumination of the room. In A-Frame, ambient light is a type of light source that simulates the overall lighting of a scene without creating any visible shadows. It’s also known as “global illumination.”

Ambient light is typically used to create a general level of brightness in a scene, similar to the way natural light illuminates an outdoor environment. It’s often used in conjunction with other types of lights, such as directional lights and point lights, to create a more realistic and dynamic lighting environment. Properties such as `position`, `scale`, and `rotation` don’t have any effect on ambient light. In the following example, we set the `color` property of ambient light to `red`. We can see the changes:

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Lighting-lesson </title>
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
    

components:gltf-model:warn Failed to fetch

Red ambient lighting

> **Note:** It’s possible to add multiple ambient lights to a scene though generally, this isn’t recommended. If we do add another ambient light source (e.g., blue), we'll get a merged result as an output (e.g., purple).

Keep in mind that ambient light can affect the overall mood and atmosphere of a scene, but it might not be suitable for creating detailed or dynamic lighting effects. For more complex lighting scenarios, we might need to use other types of light sources in conjunction with ambient light to achieve the desired result.

### Directional light
**Directional light** is a type of light source that emits light in a specific direction, as if it were coming from a distant source, such as the sun or a streetlamp. Directional light creates shadows in a scene, which can help enhance the sense of depth and realism. In the following example, we can explore the A-Frame directional light. This type of light emits illumination in a specific direction. It’s important to note that the `position` property doesn’t represent the light’s starting point. Instead, it functions as a vector that defines the direction in which the light is emitted.

It’s as if the light were coming from a distant source like the sun, and the `position` vector indicates the direction in which the light rays are traveling. This means that changing the `position` vector will alter the angle at which the light is shining onto the scene, affecting the lighting and shadows in the environment. For example, in the scene below, we’ve set up a directional light source that goes `1` unit along the y-axis (i.e., upward, from the perspective of the camera), `1` unit along the z-axis (i.e., toward the camera) and `-0.5` unit along the x-axis (i.e., toward the left). We can change the `position` vector specified on **line 50** to observe how this changes the way the scene is lit up.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Lighting-lesson </title>
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
    

components:gltf-model:warn Failed to fetch

Directional light

Directional light is useful for creating dramatic lighting effects, such as long shadows, sharp silhouettes, and highlights. It can also be used in conjunction with other types of light sources, such as ambient light and point light, to create a more complex and dynamic lighting environment.

### Point light
In A-Frame, **point light** is a type of light source that emits light in all directions from a single point, similar to a light bulb. Point lights create shadows and reflections in a scene and can be used to simulate different types of light sources, such as lamps, candles, or fireworks. In the following example, a point light instance is placed just in front of the model:

HTML

```
<html>
  <head>
    <link
      rel="stylesheet"
      href="/styles.css" />
    <script src="/index.js"></script>

    <title> Lighting-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <a-asset-item
          id="sample"
          src="https://cdn.glitch.global/7078a71b-383a-4515-abb9-5800d43c6930/compressed.glb?v=1692186289432"></a-asset-item>
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

core:a-assets:warn Asset loading timed out in

1.  3000
    

ms

Point light

As we can see, the light spreads in all directions inside the yellow container above. The following parameters can be tweaked to alter the illumination level of the point light:

*   `distance` defines the distance threshold. The point light has a certain threshold beyond which its intensity becomes zero. If `distance` is set to zero, the point light will maintain its intensity regardless of the distance from the light.
    
*   `decay` determines how the intensity of the light diminishes over distance from the source. The intensity of the light varies inversely with `decay`: the higher the decay value, the lower the intensity at a given distance from the light source.
    

Point lights can be used to create a variety of lighting effects, such as soft shadows, highlights, and reflections. They are often used in combination with other types of light sources, such as directional light and ambient light, to create a more realistic and dynamic lighting environment.

### Spot light
**Spot light** acts like spotlights or flashlights, emitting light in a specific direction with a focused beam. Unlike point lights that radiate light evenly, spot lights focus light through an adjustable cone angle. This cone angle, along with the falloff settings, which control how the light intensity diminishes as it moves away from the center of the beam, defines the shape and intensity of the emitted light beam.

The example below uses the same model inside a yellow room to demonstrate the properties of spot light:

HTML

```
<html>
  <head>
    <link
      rel="stylesheet"
      href="/styles.css" />
    <script src="/index.js"></script>

    <title> Lighting-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-assets>
        <a-asset-item
          id="sample"
          src="https://cdn.glitch.global/7078a71b-383a-4515-abb9-5800d43c6930/compressed.glb?v=1692186289432"></a-asset-item>
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

core:a-assets:warn Asset loading timed out in

1.  3000
    

ms

Spot light

We can try changing the value of `type` in the light attribute from `spot` to `point` on **line 73** to clearly see the difference between them.

### Difference between the spot and point lights
The main differences between spot and point lights are discussed below:

*   **Emission:** A point light emits light uniformly in all directions from a single point, while a spot light emits light in a specific direction within a cone angle.
    
*   **Shadows:** A spot light can cast shadows within its cone angle, creating more defined shadows than a point light.
    
*   **Focus:** A spot light has a more focused and directed beam, useful for highlighting specific objects or areas, whereas point light emits light in all directions.
    
*   **Intensity Control:** A spot light offers precise control over the intensity and spread of light, making them suitable for creating dramatic effects. Point light is often used for general illumination.
    

## Shadow casting
To enable **shadow casting**, we need to set the `castShadow` attribute to `true` on the light and set the `shadow` attribute to `receive:true` on the objects that should receive shadows. Here’s an example:

index.html

HTML

```
<a-scene>
  <a-light
    type="directional"
    color="#FFF"
    intensity="1"
    position="0 3 -5"
    castShadow="true"></a-light>
  <a-box
    position="0 1 -5"
    width="2"
    height="2"
    depth="2"
    material="color: #333"
```

In this example, we’ve added a directional light that casts shadows and a box that receives shadows. The `castShadow` attribute is set to `true` on the light, and the `shadow` attribute to `receive:true` on the box.

To illustrate the concept continuing our example, we add two models. We enable receiving shadow on the left model and disable it on the right model. We can see the effect below:

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Lighting-lesson </title>
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

core:a-assets:warn Asset loading timed out in

1.  3000
    

ms

Shadow example

> **Note:** Lights are computationally expensive, so we should be careful about the number of lights we use in our scenes. It’s also advised that whenever we do a major lighting revamp of a scene, we should double-check FPS. We should try to ensure that it stays above 72 Hz for a high-end VR experience.

## Conclusion
Proper lighting can improve the overall look and feel of the environment. It’s critical for creating compelling and immersive virtual reality experiences. We can adjust different light types to create realistic and dynamic scenes that engage the viewer’s senses and emotions.