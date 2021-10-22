import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    getGalleryList();
  }, []);

  const getGalleryList = () => {
    axios
      .get("/gallery")
      .then((response) => {
        console.log("Gallery List ->", response.data);
        setGalleryList(response.data);
      })
      .catch((err) => {
        console.log("Error getting gallery", err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <main>
        <GalleryList
          galleryList={galleryList}
        />
      </main>
    </div>
  );
}

export default App;
