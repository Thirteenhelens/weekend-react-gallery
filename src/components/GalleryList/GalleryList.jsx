import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, getGalleryList }) {
  return (
    <div className="albumContainer">
      {galleryList.map((picture) => (
        <GalleryItem
          key={picture.id}
          picture={picture}
          getGalleryList={getGalleryList}
        />
      ))}
    </div>
  );
}

export default GalleryList;
