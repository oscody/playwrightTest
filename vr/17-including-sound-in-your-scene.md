# Including Sound in Your Scene
Learn how A-Frame's sound component, with properties like autoplay, loop, and volume, can be used to create immersive audio experiences in XR environments.
*   **Spatial audio**: By providing audio cues that match the user’s location and orientation in the environment, spatial audio can create a more realistic and immersive experience. This can help the user locate and identify objects, navigate the environment, and feel more fully immersed in the virtual world.
*   **Realism**: In many XR applications, the goal is to create a realistic and believable environment. Sound can help achieve this by providing a layer of detail that enhances the user’s sense of immersion.
*   **Interactive feedback**: Sound can communicate important information to the user, such as alerts, instructions, or feedback. This can be crucial for safety and effectiveness in some XR applications, such as industrial training simulations or medical applications.
*   **Emotional impact**: Sound can also create a mood or emotional impact in XR experiences. By using music, ambient noise, or other audio cues, developers can enhance the user’s emotional engagement with the experience.
*   **Accessibility**: By providing audio cues and descriptions at key moments in the VR experience, developers can make A-Frame experiences more accessible to visually impaired users.
Overall, sound is a critical component of XR and can significantly impact the user’s sense of presence, immersion, and overall enjoyment. We’ll learn how to use the sound component in A-Frame to enhance the user’s sense of presence and immersion and create entertaining and informative experiences.

## The `sound` component
In A-Frame, the `sound` component provides the following properties and functionalities:

*   `autoplay`: Can be used to play sound automatically.
    
*   `loop`: If selected, the sound can continue to replay in a loop.
    
*   `maxDistance`: Maximum distance between the audio source and the listener, after which the volume is not impacted, i.e., would not be reduced any further.
    
*   `refDistance`: In distance-based audio attenuation, this property defines the reference distance at which audio attenuation begins. It’s a critical parameter for simulating how sound fades as the listener moves away from the source.
    
*   `rolloffFactor`: It is integral to distance-based attenuation; this property controls the rate at which sound fades as the listener moves away from the source.
    
*   `distanceModel`: `linear`, `inverse`, or `exponential`.
    
*   `on`: An event the entity listens to before playing sound.
    
*   `poolSize`: This attribute specifies the number of simultaneous instances of this sound that can be played together.
    
*   `positional`: Determines whether or not the audio is positional (movable).
    
*   `src`: This attribute contains a link (or URL) to the audio file.
    
*   `volume`: How loud the audio should be.
    

When we attach the `sound` component to an entity in the scene, the entity becomes the source of the sound or audio.

HTML

```
<html>

<head>
  <link rel="stylesheet" href="/styles.css" />
  <script src="/index.js"></script>

  <title> Sound-Lesson </title>
  <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
</head>

<body>
  <a-scene>
    <a-assets>
      <img 
          id="body"
          src="https://www.educative.io/udata/W5ZZrmQXQoX/cartexture.jpg" />
      <img
```

Output

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/W5ZZrmQXQoX/cartexture.jpg](https://www.educative.io/udata/W5ZZrmQXQoX/cartexture.jpg)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MLnrJDw4GvE/city2.jpeg](https://www.educative.io/udata/MLnrJDw4GvE/city2.jpeg)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/4z8DmwxBMQP/positional.wav](https://www.educative.io/udata/4z8DmwxBMQP/positional.wav)

A-Frame Version: 1.4.0 (Date 2022-12-26, Commit #60a324a2)

THREE Version ([https://github.com/supermedium/three.js](https://github.com/supermedium/three.js)):

^0.147.0

WebVR Polyfill Version:

^0.10.12

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/W5ZZrmQXQoX/cartexture.jpg](https://www.educative.io/udata/W5ZZrmQXQoX/cartexture.jpg)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/MLnrJDw4GvE/city2.jpeg](https://www.educative.io/udata/MLnrJDw4GvE/city2.jpeg)

core:a-assets:warn Cross-origin element (e.g., <img>) was requested without \`crossorigin\` set. A-Frame will re-request the asset with \`crossorigin\` attribute set. Please set \`crossorigin\` on the element (e.g., <img crossorigin="anonymous">)

[https://www.educative.io/udata/4z8DmwxBMQP/positional.wav](https://www.educative.io/udata/4z8DmwxBMQP/positional.wav)

Playing a sample sound upon clicking the car

To demonstrate the use of sound, we contextualize the car we built in earlier lessons in a city environment. When you drag the cursor and click the car in the scene below, you will hear the sound attached to the car.

*   In the code above, we attach the `sound` component with the car entity. We set the `on` property to `click` so that the sound plays whenever we click the entity. We can configure the `on` property to any event on which we want to play the sound.
    
*   Moving around in the scene using the WASD keys, we see the `positional` property in action. This property is set to `true` by default. When we move away from the car, we’ll observe that the volume of the sound reduces with distance from the camera.
    
*   We can also change the `refDistance` to any value. This value will determine the distance after which the sound’s volume will reduce.
    

Sometimes, we might want to place the sound at a specific _offset_ with respect to a given entity to make the experience of that sound in the scene more realistic. We can do this by nesting the `sound` component as a child entity with the parent. So, in our example, this would look something like:

```
<a-entity id="car">
  <a-entity sound="src:#positional"></a-entity>
</a-entity>
```

Now, we can position this invisible entity with the `sound` component at the location of our choice, either by setting the position using A-Frame Inspector or by specifying the `position` property in the A-Frame code.

Let’s move on to the pause and resume functionality.

## Pause and resume
We can also pause, resume, and stop the sound using the `playSound()`, `pauseSound()`, and `stopSound()` functions of the `sound` component. We’ll use two icons (pause and play) to control the car’s sound. For the icons, we’ll use the `<a-image>` primitive. We also create two components called `play` and `pause` that control the sound of the car. The following example shows the working: align the cursor with the respective option to test the working. Click the “Run” button to launch the experience.

HTML

```
<html>
  <head>
<link rel="stylesheet" href="/styles.css" />
<script src="/index.js"></script>

    <title> Sound-Lesson </title>
    <meta http-equiv="refresh">
    <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
    <script>
      var animationRunning = false; // Initialize the animation state

      AFRAME.registerComponent('play', {
        init: function () {
          var myEl = document.querySelector('#car');
          this.el.addEventListener('click', function () {
            if (!animationRunning) {
              animationRunning = true; // Set animation state to running
```

Output

Sound and animation upon a click

*   In the `play` component, we first select the `car` entity using the `document.querySelector()` function and store it in `myEl`. We attach an event listener to the entity to which this component is attached to listen for `click` events.
    
*   We attach the `play` component to the `<a-image>` play primitive. So, whenever the `car` entity is clicked, the `play` component plays the sound on the `car` entity.
    
*   A similar functionality is used in the `pause` component and the pause icon.
    
*   We also set the `loop` property to `true` for the `sound` component on the `car` entity.
    

## Conclusion
We’ve comprehensively understood the fundamental functionalities of utilizing sound to elevate the immersive quality of your XR scenes. 
, we’ll learn about adding videos to our virtual scenes.