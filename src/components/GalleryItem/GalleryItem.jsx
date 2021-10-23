//Importing every needed in this file
import axios from "axios";
import { useState } from "react";

function GalleryItem({ picture, getGalleryList }) {
  //Setting up the flipPicture, and setting it to false to start.
  const [flipPicture, setFlipPicture] = useState(false);

  //Toggling the value of flipPicture whenever the picture div is clicked.
  const clicked = () => {
    console.log(`Clicked`);
    setFlipPicture(!flipPicture);
  };

  //When the button is clicked, This function is called
  const loveImage = (event) => {
    console.log(`I love ->`, picture.id);
    //Giving the id a more reasonable name
    let picToLove = picture.id;

    //Sending the router a framework of what to give to the database
    axios({
      method: "PUT",
      url: `/gallery/like/${picToLove}`,
    })
      .then((response) => {
        console.log("PUT love response ->", response);
        //Re-rendering the DOM by getting all of the (now) updated information.
        getGalleryList();
      })
      .catch((error) => {
        //In case of an error, I know what went wrong and where.
        console.log("PUT love error ->", error);
      });
  };

  //This returns HTML text to be rendered to the DOM.
  return (
    <>
      <div className="imageDiv">
        {/* If the picture has not been clicked, the image will be displayed, but once it is clicked the description is shown */}
        {flipPicture ? (
          <p onClick={clicked} className="image">
            {picture.description}
          </p>
        ) : (
          <img onClick={clicked} className="image" src={picture.path}></img>
        )}

        <div>
          {/* Adding a button that, when clicked, adds to the count of how many likes it has */}
          <button className="button" value={picture.likes} onClick={loveImage}>
            Love it!
          </button>

          {/* Rendering a count for how many people have clicked the love it button, based on if the image has more than no love */}
          {picture.likes ? (
            <p>{picture.likes} Love</p>
          ) : (
            <p>No love for this</p>
          )}
        </div>
      </div>
    </>
  );
}

//Exporting the function for other files to use.
export default GalleryItem;
