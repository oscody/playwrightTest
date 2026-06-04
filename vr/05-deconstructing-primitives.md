# Deconstructing Primitives
Learn about the ECS architecture in A-Frame and explore the internals of A-Frame primitives.
In this lesson, we’ll explore the fundamental building blocks of ECS, including entities, components, and systems, to better understand this powerful architectural pattern that underpins many interactive software systems.

## Entity-component-system
Let’s revisit the components of ECS:

*   **Entities**: Containers whose behavior and appearance are defined by components.
    
*   **Components**: Logical modules attached to entities, defining their behavior and appearance.
    
*   **Systems**: Global scope managers and services for classes of components.
    

Let’s now learn about the application of the ECS architecture by deconstructing some A-Frame primitives.

Let’s say we have two different entities:

*   Player
    
*   Enemy
    

These entities share some components, such as rendering, position, and health.

While “Player” has all three components, “Enemy” has an additional spawning component to help spawn the enemy at different locations. The rendering, health, and spawning systems are independently responsible for tackling their related jobs. We further notice that both rendering and spawning systems involve positioning. This perspective offers a broader understanding of how entities, components, and systems interact within A-Frame development.

## Primitives are entities
In the last few lessons, we learned to use primitives such as `<a-box>` and `<a-sphere>` for creating 3D shapes. These primitives are an abstraction layer above entities, and they help us get started with A-Frame development. **Primitives** can be considered similar to prefabs in Unity. They provide a precomposed bundle of components with set default values and have a semantic name, such as the `<a-box>` primitive, which maps or proxies HTML attributes to component data. This allows for a shorthand method of creating complex and common entities while maintaining a familiar HTML interface for beginners to A-Frame.

Let’s understand this with an example.

We have a box in the scene using the `<a-box>` primitive. We can create this box by using an entity and giving it geometry and material components.

*   First, we create an empty `<a-entity>` primitive and give it the `position` component. The `position` component in A-Frame defines the exact location of an entity within the 3D virtual environment; we can specify the position along the x-, y-, and z-axes. We observe that nothing happens until this step.
    
*   To give the entity some shape, we add the `geometry` component. The `primitive` property determines the type of its geometry. We set the `primitive` property to `box`.
    
*   Reloading the scene, we see the box given a random color on every reload.
    
*   Now, we change the `height` and `color` properties for the box by directly adding the `height` and `color` properties in the primitive. However, it’s essential to understand how these properties map to the entity’s components. In the below example, we focus on the `height` property, which is a component of the entity’s `geometry` property. Similarly, the `color` property we specify in the primitive corresponds to the underlying `material.color` property, creating a direct link between the primitive’s property and the entity’s material’s `color` property.
    

In the example below, we’ve set up two cuboids with identical height and color properties, once using the `<a-box>` primitive and once using an `<a-entity>` entity.

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

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg](https://www.educative.io/udata/MvYQRVanpqG/SKY.jpg)

Entity vs. primitive example

This example demonstrates how components act as data containers for entities, modifying their appearance and behavior.

## Conclusion
Primitives are entities with a semantic name and a preset bundle of components with default values. A-Frame’s functionality can be extended by creating external components executed during the render loop and used to create custom elements and behaviors according to the scene’s current state.