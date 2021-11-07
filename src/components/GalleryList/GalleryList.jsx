//Importing GalleryItem so I can use it later on
import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList({ galleryList, getGalleryList }) {
//Returning the HTML text that will be put on the DOM
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

//Exporting the function so other files can use it
export default GalleryList;