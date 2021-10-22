import React from 'react';
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

useEffect(() => {
  getGalleryList();
}, []);


const getGalleryList = () => {
  axios
    .get("/gallery")
    .then((response) => {
      console.log('Gallery List ->', response.data);
    })
    .catch((err) => {
      console.log("Error getting groceries", err);
    });
};






    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
