const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');


router.get('/movies', (req, res) => {
    Movie.find()
    .then(movies => res.render("movies", { movies }))
    .catch(err => console.log(err))
});


router.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
    .populate('stars')
    .then( foundMovie => {
        console.log('movie', foundMovie)
        res.render('details', foundMovie)
    })
    .catch(error => console.log(error))
})

module.exports = router;
