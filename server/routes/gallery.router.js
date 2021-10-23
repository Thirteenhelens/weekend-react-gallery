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
    const queryText = `

    ;`

pool.query(queryText)
.then((result) => {
    res.sendStatus(201);
})
.catch((err) => {
    console.log('Error in put ->', err);
})


}); // END PUT Route

module.exports = router;