const { Pool } = require('pg');
const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');
// DO NOT MODIFY THIS FILE FOR BASE MODE

// GET Route
router.get('/', (req, res) => {
    //Defining the text that will ask the database for everything from my gallery, ordered by id.
    const queryText = `
    SELECT * FROM gallery
    ORDER BY "id"
    ;`

    //Sending that request to the database
    pool.query(queryText)
        .then((result) => {
            //Sending the resulting information back to where it was called.
            res.send(result.rows);
        })
        .catch((err) => {
            //In case of error, I can see what went wrong and where
            console.log('Error in GET ->', err);
        });

}); // END GET Route

// PUT Route
router.put('/like/:id', (req, res) => {
    //Grabbing the id from the parameters of the request
    const galleryId = [req.params.id];

    //SQL text asking the database to increment the likes of a photo
    const queryText = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
    ;`

    //Sending the command to the database
    pool.query(queryText, galleryId)
        .then((result) => {
            //Sending a code that means the request went through successfully 
            res.sendStatus(201);
        })
        .catch((err) => {
            //In case of error, I can see what went wrong and where
            console.log('Error in put ->', err);
        })
}); // END PUT Route

//Exporting the full router function to allow other files to access it.
module.exports = router;