# Adding, Managing, and Monitoring Assets
Learn about managing and monitoring 3D assets in a WebXR project. Get an introduction to performance monitoring in A-Frame via the Stats component.
An XR scene comprises several assets, such as audio files, images, textures, and 3D models. To better manage these assets, A-Frame offers an Asset Management System.

## Asset management system
The **asset management system** in A-Frame is a feature that allows developers to easily manage and organize the assets used in their WebXR scenes, such as images, audio files, and 3D models.

The asset management system provides a centralized place for developers to manage their assets, making it easier to organize, reuse, and share assets across multiple scenes. Assets can be easily added to the scene by referencing their URL or ID in the HTML code, and they can be loaded asynchronously, allowing the scene to load faster and reducing the impact on performance. We put the asset resources in the `<a-assets>` child node and these assets as entities in the `<a-scene>` element. Resources include 3D models and materials, audio, images, etc.

A-Frame supports various file formats for different types of assets, including glTF for 3D models, JPEG and PNG for images, and MP3 and OGG for audio. Assets can be stored locally or remotely, such as in a cloud-based storage service or on a remote server.

A-Frame is based on the three.js WebXR framework. three.js is optimized to package and share content over the internet. The 3D models constitute the vast majority of the overall content in a WebXR project. The standard format to transfer 3D models over the internet is glTF, rather than the JPEG format for images.

## Loading a glTF model
In a scene, we can import the model in two ways. One way is to load the model by specifying the **glTF** file pointed to by the source, that is, through the Asset Management System.

Here’s an example of listing the assets we want to use in our scene. These assets are fetched before being rendered, so we don’t have to wait for them to load in the scene. This code creates an `<a-assets>` tag, which stores assets used in the scene. Inside of it, we add an `<a-asset-item>` tag with `id` set to `model` and `src` set to the `path/to/model.gltf` path, which is the location of our 3D model file.

index.html

HTML

```
<a-assets>
  <a-asset-item
    id="model"
    src="path/to/model.gltf"></a-asset-item>
  <img
    id="food"
    src="path/to/image.jpg" />
</a-assets>
```

, we use the `<a-entity>` tag to add the model to the scene. We set the `gltf-model` attribute to the `#model` value, which references the `id` of the `<a-asset-item>` tag that stores our model. This is how we reference the asset in our scene:

index.html

HTML

<a-entity gltf-model="#model"></a-entity>

Another way to load assets is to load them inline, i.e., to load the glTF model by directly specifying the internal path uniform resource locator (URL), as shown below. However, with this strategy, the scene won’t wait for the resource to be loaded before rendering.

index.html

HTML

<a-entity gltf-model="path/to/model.gltf"> </a-entity>

Now, our 3D model is added to the scene and ready to be rendered.

## Adding texture to the model
Adding textures to the model works in a similar way. First, we set the `id` attribute to `texture` inside the `<img>` tag:

index.html

HTML

<a-assets>

  <a-asset-item

    id="model"

    src="path/to/model.gltf"></a-asset-item>

  <img

    id="texture"

    src="path/to/texture.jpg" />

</a-assets>

This code is similar to the previous one, but now we add an `<img>` tag with `id` set to `texture` and `src` set to the `path/to/texture.jpg` path, which is the location of our texture file.

Then, we set the `src` property of the `material` component to `texture` that we loaded earlier:

index.html

HTML

<a-entity

  gltf-model="#model"

  material="src: #texture"></a-entity>

Now, our 3D model is rendered with the texture applied.

## Example
In the following example, we use a glTF road model that can be found at Sketchfab. This is the car scene before we add the asset:

After adding the asset, we observe how it adds life to the virtual scene:

We fetch the model inline in this example, but loading the model in the `<a-assets>` tag is a recommended practice for performance purposes.

## Troubleshooting models
Errors can arise when we try to load 3D models and assets in a scene. Here are some of the ways we can troubleshoot models:

*   Open the browser’s inspector and check for errors in the console log.
    
*   Open the A-Frame Inspector to locate our model in the scene.
    
*   Scale the model so that it becomes visible in the scene.
    
*   Fetch the model directly by loading it inline.
    

For a seamless VR experience, keeping track of the performance is essential. The following section explains more about monitoring the performance of an A-Frame scene.

## Assessing the asset’s performance
To get an idea of how our scene is performing, we can enable the stats component by embedding it with the `<a-scene>` tag like this: `<a-scene stats>`. When we add `stats` to our scene, we should be able to see the following menu:

We can see a real-time display of key performance metrics such as **frame rate, number of draw calls,** and **memory usage**. The `stats` component allows developers to monitor the performance of their A-Frame scenes and identify bottlenecks and other issues that may be impacting performance. The `stats` component makes optimizing and improving A-Frame scene performance easier by displaying this information in real time.

We can observe the following performance metrics:

*   **fps** (frames per second) is the number of frames rendered per second.
    
*   **raf** (request animation frame) is the number of times the `requestAnimationFrame` API is called per second. This function is used to render the scene and update its contents. A high `raf` count can indicate that the scene is being redrawn more frequently than necessary, which can impact performance.
    
*   **Textures** is the number of textures in the scene.
    
*   **Programs** refer to the number of programs used to render the scene. In A-Frame, a program combines a vertex shader and a fragment shader to render a specific type of geometry. Each program is responsible for transforming the geometry’s vertices into the final image displayed on the screen.
    
*   **Geometries** refers to the 3D shapes that make up the objects in a scene.
    
*   **Points** refer to the number of points in a 3D scene, where each point represents a single vertex. In A-Frame, points are used to define the shape and structure of objects, and the number of points in a scene can significantly impact performance.
    
*   **Triangles** in A-Frame `stats` component refers to the number of triangles used to render objects in the scene. In A-Frame, objects are constructed using triangles, consisting of three vertices that define the object’s shape. The more triangles in a scene, the more complex the objects will be, and the more resources will be required to render them.
    
*   **Calls** is the number of draw calls being made in each frame.
    
*   **Load Time** refers to the time it takes to load all the assets and resources necessary to display an A-Frame scene. This includes textures, models, audio files, and other resources. `Load Time` is a critical performance metric in A-Frame because it determines how quickly a scene will be ready for the user to interact with.
    
*   **Entities** are the number of entities in the scene.
    

Output

Scene stats

You’re encouraged to navigate within the scene and experiment with various scenarios while monitoring the graph. Testing on different hardware is important because a powerful PC used for development can handle the scene more efficiently than a smartphone. If the frame rate falls below 60 fps, try eliminating elements from the scene to identify the cause. If a 3D model is found to be causing the performance issue, consider optimizing it. By monitoring these metrics, we can better understand the performance of our A-Frame scenes and identify areas that need optimization.

## Conclusion
By using A-Frame’s simple and declarative API, we easily added 3D models and textures to our scene. After going through the concepts in this chapter, we can better add, manage, and monitor complex assets in our A-Frame projects.