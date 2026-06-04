# Implementing Physics in A-Frame
Learn to implement physical interactions in an A-Frame scene.

## Introduction to physics in XR
Physics in XR simulates physical laws and interactions in virtual environments using computer algorithms. This includes simulating the behavior of objects, their movements, and their interactions with other objects and the environment. The goal of physics in XR is to create realistic and believable experiences for users, where virtual objects behave in a way that is consistent with the laws of physics.

Physics in XR is crucial for creating immersive and interactive experiences, particularly in gaming and training applications. For example, in a VR game, physics can be used to simulate the movements of a ball when it is thrown, the recoil of a gun when it is fired, or the impact of a collision between two objects. In a training simulation, physics can be used to simulate a vehicle’s movement, a tool’s weight, or a material’s reaction to different stimuli.

To implement physics in XR, developers typically use physics engines or libraries that provide a set of algorithms for simulating physical interactions. These engines can simulate various physical properties, such as mass, velocity, acceleration, and friction, and provide collision detection and response functionality. Some popular physics engines used in XR development include Unity Physics, Havok Physics, Ammojs, Cannonjs, and PhysX.

## Physics in A-Frame
We can use a physics system in A-Frame to provide several components that can be used to simulate physical properties such as gravity and collision. The physics component enables developers to add physics to an entity by setting its mass, velocity, and acceleration. The gravity component adds a gravitational force to the scene, affecting the movement of entities. The collision component detects collisions between entities in the scene and provides collision response functionality.

Currently, there are three engines to simulate physics interactions in A-Frame:

*   [CANNON.js](https://n5ro.github.io/aframe-physics-system/) (which is the easiest to use, but as a native JavaScript solution, it has the least favorable performance)
    
*   [Ammo.js](https://github.com/c-frame/aframe-physics-system/blob/master/AmmoDriver.md) (which is a WASM build of the Bullet physics engine)
    
*   [PhysX](https://github.com/c-frame/physx) (which uses Nvidia PhysX as its driver)
    

> **Note:** There’s no current plan to integrate PhysX into the A-Frame physics system, but it might be a better choice for some projects.

These engines provide a fast and efficient way to simulate physical interactions. These driver engines can simulate rigid bodies and soft bodies, allowing for a wide range of physical interactions to be simulated. We’ll be using the Ammo.js driver in this lesson.

## Basics
To get started with the Ammo.js driver, we include it using the `<script>` tag:

index.html

HTML

```
<script src="https://cdn.jsdelivr.net/gh/MozillaReality/ammo.js@8bbc0ea/builds/ammo.wasm.js"></script>
```

We specify `ammo` as the physics driver in our `<a-scene>` primitive:

index.html

HTML

```
<a-scene physics=" driver: ammo; debug: true;">
  <!-- Your code here -->
</a-scene>
```

We also set the `debug: true` flag to enable wireframe debugging of the physics shapes/bodies.

## Body types
To create a physics body, we need to attach the `ammo-body` and `ammo-shape` components to the entity. The type of an ammo body can be one of the following:

*   `static`: A fixed-positioned object. Neighboring bodies can collide with it, but gravity and collisions don’t affect static bodies. These bodies should typically not be moved after initialization as they can’t impart force to dynamic bodies.
    
*   `kinematic`: Similar to the `static` body type, except that `kinematic` bodies can be moved by updating the position and can impart force on other dynamic bodies when moved. This body type is useful for animated objects.
    
*   `dynamic`: A freely moving object that has mass, and can collide with other bodies. It experiences the impact of the collision and responds to gravity.
    

HTML

```
<html>
  <head>
    <title> Physics-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/MozillaReality/ammo.js@8bbc0ea/builds/ammo.wasm.js"></script>
    <script src="https://educative.io/udata/GQbZ7mwZopo/aframe-physics-system.js"></script>
  </head>

  <body>
    <a-scene physics="driver: ammo; debug:true">
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/kgDED4xXMVm/clear-sunny-sky.jpg" />
      </a-assets>
      <a-sky
        src="#sky"
        rotation="0 -60 0">
```

Output

The falling ball example

> **Note**: In Ammo.js, gravity is turned on by default and acts on all entities with the dynamic ammo-body, with a downward acceleration of 9.8m/s2 9.8 {m}/{s^2} 9.8m/s2.

In the above example, we implement a sphere (dynamic body) colliding with a plane (`static`) body. We also set the `<a-plane>` primitive’s `ammo-shape` component to `box` and the `<a-sphere>` primitive’s to `sphere`.

## Properties of the `ammo-body` component
There are various properties provided by the `ammo-body` component that we can use to customize the physics interaction in our scene. An `ammo-body` component can be added to any entity in a scene to induce physics in it. Only after adding an `ammo-shape` component will our entity begin to collide with surrounding objects.

Restitution determines the bounciness of an object, and it is important to remember that to see the effects of restitution, both objects should have `ammo-body` and `ammo-shape` attached, and should also have the restitution property to enable bounciness.

Let’s see the example below where we add two spherical bodies with different restitution. The yellow sphere bounces more because it has a higher restitution value.

HTML

```
<html>
  <head>
    <title> Physics-lesson </title>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/MozillaReality/ammo.js@8bbc0ea/builds/ammo.wasm.js"></script>
    <script src="https://educative.io/udata/GQbZ7mwZopo/aframe-physics-system.js"></script>
  </head>

  <body>
    <a-scene physics="driver: ammo; debug:true; gravity: -9.8;">
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/kgDED4xXMVm/clear-sunny-sky.jpg" />
      </a-assets>
      <a-sky
        src="#sky"
        rotation="0 -60 0">
```

Output

Restitution example

**Linear damping** is the resistance to movement. The `linearDamping` property typically accepts values within the range of `0.0` to `1.0`, where `0.0` represents no damping, and `1.0` indicates maximum damping. We can experiment with this variable using the `linearDamping` variable attached to the sphere’s `ammo-body` component.

**Angular damping** is the resistance to rotation. So, the `angularDamping` property typically accepts values within the range of `0.0` to `1.0`. A value of `0.0` indicates no angular damping, while `1.0` signifies maximum angular damping. We can experiment with this variable using the `angularDamping` variable attached to the sphere’s `ammo-body` component.

In the example below, we experiment with other values, such as the `linearDamping` and `angularDamping` properties, to illustrate how the movement and rotation of bodies can be manipulated:

HTML

```
<!doctype html>
<html>
  <head>
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/MozillaReality/ammo.js@8bbc0ea/builds/ammo.wasm.js"></script>
    <script src="https://educative.io/udata/GQbZ7mwZopo/aframe-physics-system.js"></script>
  </head>
  <body>
    <a-scene physics="driver: ammo; debug: true; gravity: -9.8;">
      <a-assets>
        <img
          id="sky"
          src="https://www.educative.io/udata/kgDED4xXMVm/clear-sunny-sky.jpg" />
      </a-assets>
      <a-sky
        src="#sky"
        rotation="0 -60 0">
      </a-sky>
```

Output

Linear damping and angular damping example

## Conclusion
As developers, we can use a physics engine (or library) to create realistic and interactive WebXR experiences by applying the laws of physics to virtual objects. Using these engines, we can include physical properties in entities to make our WebXR environment more interactive.