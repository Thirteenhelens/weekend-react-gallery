// `GalleryItem.jsx` and pass it the individual gallery item via `props`. 
//     - Update the `GalleryList` to use this component to display an image.
//     - Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
//     - Display the number likes for each item and include a like button.
//     - When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
//     - Update the gallery each time a like button is clicked.


function GalleryItem({ picture, getGalleryList }) {
  return (
    <div>
      <img src={picture.path}></img>
      <p>{picture.description}</p>
    </div>
  );
}

export default GalleryItem;