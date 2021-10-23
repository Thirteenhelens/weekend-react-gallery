const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');
const { Pool } = require('pg');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// GET Route
router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM gallery
    ORDER BY "id"
    ;`

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error in GET ->', err);
        });

}); // END GET Route

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    const galleryLikes = req.params;

    console.log(req.params);

    let values = [galleryId]

    const queryText = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
    ;`

    pool.query(queryText, values)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error in put ->', err);
        })
}); // END PUT Route

module.exports = router;