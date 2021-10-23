import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  //Setting the galleryList to an empty array that I can add to later
  let [galleryList, setGalleryList] = useState([]);

  //Every time the page loads, I run the getGalleryList function
  useEffect(() => {
    getGalleryList();
  }, []);

  //This sends a call to the router asking it to send a request to the database
  const getGalleryList = () => {
    axios
      //Defining what type of call it is making then defining the url it is making that request under.
      .get("/gallery")
      .then((response) => {
        console.log("Gallery List ->", response.data);
        //When the response is received, every object is added to the galleryList array ofr use later
        setGalleryList(response.data);
      })
      .catch((err) => {
        //In case of error, I know what went wrong and where.
        console.log("Error getting gallery", err);
      });
  };

  //This returns HTML text to be rendered to the DOM.
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <main>
        {/* Here I am calling the galleryList component and giving it the props of galleryList and getGalleryList */}
        <GalleryList
          galleryList={galleryList}
          getGalleryList={getGalleryList}
        />
      </main>
    </div>
  );
}

//Exporting tha App function so that other apps can use it, mainly to send to the HTML.
export default App;