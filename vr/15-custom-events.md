# Custom Events
Learn more about custom events and their properties in this lesson.
Events help us communicate with different entities by sending signals that other pieces of code can pick up and respond to. There can be requirements for which we need to achieve a customized behavior against a specific type of event. To accomplish this, A-frame offers custom events.

## Emitting events
Using the `emit(eventName, eventDetail, bubbles)` function, we can emit from any entity element. For example, we can use the `emit()` function to define a `changescale` named event and pass target scale values to the event listener using the `eventDetail` argument:

```
entityEl.emit('changescale', { x: 2.0, y: 2.0, z: 2.0 }, false);
```

In the code above, the data is passed as a dictionary containing the scale values along the three axes. When we want to access the x value passed into this event, we can access it using the `event.detail.x` property.

When an event is emitted, any listeners that are registered to handle this event will be notified. Additionally, we can control whether the event propagates up through the DOM hierarchy using the `bubbles` argument. If this argument is set to `true`, the event will "bubble up" and be emitted by the parent entities as well. In the above example provided, this argument is set to `false`, meaning the event does not bubble up and is confined to the entity that emitted it.

## Adding an event listener
We can register an event listener using the `addEventListener(eventName, function)` method. When the event is emitted, `function` will be called to handle it. For example, continuing from the previous example with the `changescale` event, we can define a listener as follows:

```
entityEl.addEventListener('changescale', (evt) => {
  console.log('I received the event notification');
  //set the scale of the current entity
  entityEl.setAttribute('scale', {
    x: evt.detail.x,
    y: evt.detail.y,
    z: evt.detail.z,
  });
});
```

When an entity receives the notification that the `changescale` event has been emitted by another entity in the scene, the event-handling function will be called with the `evt` event object. In the event object, we have the event detail, which contains data from the emitting event. In this example, we use the 3D vector data to change the `scale` property of the listening entity using the `setAttribute()` function.

## Removing an event listener
To remove an event listener, we can use the `.removeEventListener(eventName, function)` method. We need to pass the same event name and function with which the listener was registered. For example, continuing from the previous example with the `changescale` event, we can remove a listener as follows:

```
sceneEl.removeEventListener('changescale');
```

It’s a good practice to remove event listeners, as shown in the following example (**lines 52** and **69**), because if the component that listened to the event malfunctions, the event listener would still be there, causing bugs.

## Example
The following example sums up the concepts learned in creating a custom event.

HTML

```
<html>
    <head>
      <title>
          event-set-lesson
      </title>
      <script src="https://aframe.io/releases/1.4.0/aframe.min.js">  
      </script>
      <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>   
    </head>
  
    <body>
        <a-scene >     
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

We have two boxes in the scene. The red box has a `scale-box-controller` component attached to it. This component listens to a `click` event on the box. Upon clicking the red box, the listener attached to the yellow box is notified, and accordingly, the yellow box increases twofold in size. Here, the `init()` function in A-Frame represents the initialization function of a custom component. It’s where we set up initial configurations and register event listeners when the component is first attached to an entity. In contrast, the `remove()` function is used to remove a specific event listener from an entity. It’s the recommended practice when we no longer want an entity to respond to a particular event.

We create another `listener` named component, in which we listen for the `changescale` event. Because both boxes are on the same level of the hierarchy, the listener on the yellow box can’t directly receive that event’s notification. The red box itself can listen to the event, and anything higher in the hierarchy can also listen to it. That’s why we add the event listener to the _scene_, accessing it via the `this.el.sceneEl` property. By attaching the component to the yellow box entity, we can access and modify its scale attributes in the event listener.

## Conclusion
We now have a basic understanding of how to utilize custom events in our XR application to make them more interactive and engaging.