import axios from "axios";
import { useState } from "react";

function GalleryItem({ picture, getGalleryList }) {
  const [flipPicture, setFlipPicture] = useState(false);

  const clicked = () => {
    console.log(`Clicked`);
    setFlipPicture(!flipPicture);
  };

  const loveImage = () => {
    console.log(`I love ->`, picture.id);
    let picToLove = picture.id;
    axios({
      method: "PUT",
      url: `/gallery/like/${picToLove}`,
    })
      .then((response) => {
        console.log("PUT love response ->", response);
        getGalleryList();
      })
      .catch((error) => {
        console.log("PUT love error ->", error);
      });
  };

  return (
    <>
      <div className="imageDiv">
        {flipPicture ? (
          <p onClick={clicked} className="image">
            {picture.description}
          </p>
        ) : (
          <img onClick={clicked} className="image" src={picture.path}></img>
        )}

        <div>
          <button onClick={loveImage}>Lovely!</button>

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

export default GalleryItem;
