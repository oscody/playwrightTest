# Textures, Materials, and Shaders
Learn to use textures, materials, and shaders to create visually compelling 3D scenes.
Now that our sample scene has a car with headlights, let’s map a texture onto the car body instead of solid colors. We can modify the texture of an entity using the `material` component.

## The `material` component
`material` in A-Frame is a component that determines the appearance of an object in a 3D scene. It defines how light interacts with an object and determines the object’s color, shininess, transparency, and other visual properties.

Material can be added to an object in A-Frame by adding the `material` component. The material component can then be customized with a variety of properties, such as `color`, `opacity`, `shader`, and `src`.

For example, the following code creates a red, semi-transparent sphere with a shiny surface:

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Material </title>
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

The material component example

Materials are a crucial aspect of creating visually compelling 3D scenes in A-Frame. By using different material properties, objects can be given a metallic, translucent, or matte look, among other possibilities.

## Textures
**Textures** in A-Frame are digital images that can be applied to the surface of 3D objects to add visual detail and realism. Textures can be used to add patterns, colors, or images to the surface of an object. For example, a metal texture pattern can be applied to a cube to create the appearance of a metal box.

In A-Frame, textures can be added to 3D objects by specifying the texture in the `material` component of the object. The texture can be specified using an image URL or path, such as `textures/brick.jpg`. The texture can then be mapped to the object’s surface using UV mapping, which defines how the texture is positioned on the object’s surface.

We can get textures from [Adobe Stock](https://stock.adobe.com/ae/images/metal-pattern/64302652?prev_url=detail), [Textures.com](https://www.textures.com/library.), [Unsplash](https://unsplash.com/), and [Freepik](https://www.freepik.com/). While some of the textures are free to be used commercially, for others, you might have to make a nominal payment.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Textures lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  </head>

  <body>
    <a-scene>
      <a-box
        position="0 0 -7"
        scale="3 3 3"
        src="https://www.educative.io/udata/wMnZ8RGvLwJ/texture1.png"
        repeat="1 1"
        roughness="0.5"
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

Texture example

Following are some of the properties you can use while working with textures:

*   The `repeat` property sets the number of times the texture should repeat on each axis. For example, `repeat: 2 2` means the texture will repeat twice on both the x- and y-axes, resulting in the texture tiling four times in total.
    
*   The `roughness` property of a material describes the smoothness or roughness of a surface. It’s used in texture mapping to add realism to 3D models by controlling how light interacts with the surface of an object. The roughness value (from `0.0` to `1.0`) affects how light reflects off the surface of the material. A `roughness` value of `0.0` corresponds to a perfectly smooth and highly reflective surface. This means incident light will be reflected almost perfectly, resulting in a mirror-like appearance with minimal scattering. On the other hand, a `roughness` value of `1.0` indicates a very rough surface that scatters incident light in various directions. This leads to a more diffused reflection, making the surface appear less shiny and more matte.
    
*   The `normalMap` property in the `material` component is used to specify the normal map texture. **Normal map** is a type of texture that encodes surface normals as RGB values, which can be used to add finer details to 3D models. Normal maps are applied to a material’s surface to make it appear more bumpy and textured or to give it the illusion of depth.
    
*   The `shader` property in the `material` component is used to specify which material to use. It defaults to the `standard` material. `standard` shader material that provides advanced lighting and shading effects. It can be set to the `flat` material or to a registered custom shader material. `flat` shader that is unaffected by the scene’s lighting conditions. **Shaders** are small programs that perform graphical rendering tasks. In A-Frame, shaders are used to define objects’ appearance and implement special effects such as lighting, shading, and texture mapping. We can also create customized shaders in A-Frame. They’re written in GLSL (OpenGL Shading Language), a high-level shading language designed for graphics programming. By using shaders, we can achieve a high level of control over the appearance of objects. We can implement advanced graphical effects that would be difficult or impossible to achieve using traditional methods.
    

## Example
Building on our car example from the previous lessons, we can apply texture to the car’s body parts.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Basic-Scene </title>
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

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/DEoGxxem4m9/CarTexture.png](https://www.educative.io/udata/DEoGxxem4m9/CarTexture.png)

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/DEoGxxem4m9/CarTexture.png](https://www.educative.io/udata/DEoGxxem4m9/CarTexture.png)

Applying texture to the car

As we saw in the example above, we loaded the texture in an `<img>` tag under the `<a-assets>` tag.

## Conclusion
As we delve into the world of textures, materials, and shaders, we gain the power to craft visually stunning 3D scenes, transforming simple objects into captivating works of art. With a solid understanding of materials and textures, our creative possibilities are boundless, and our 3D projects will come to life in new and exciting ways.