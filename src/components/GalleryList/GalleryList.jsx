import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, getGalleryList }) {
  return (
    <>
      {galleryList.map((picture) => (
        <GalleryItem key={picture.id} picture={picture} />
      ))}
    </>
  );
}

export default GalleryList;
