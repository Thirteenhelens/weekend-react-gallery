// `GalleryList` and pass it the gallery data stored in `App` via `props`.
//     - Iterate (loop over) the list of gallery data
//     - Make GalleryItems
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList }) {
  return (
    <>
      <p>hello!</p>
      {/* {galleryList.map((picture) => (
        <GalleryItem
          id={picture.id}
          title={picture.title}
          description={picture.title}
          path={picture.path}
        />
      ))} */}
    </>
  );
}

export default GalleryList;
