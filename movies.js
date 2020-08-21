var express = require('express');
var router = express.Router();
var movies = [{
        id: 001,
        name: "The Heat",
        year: 2000,
        rating: 6
    },
    {
        id: 002,
        name: "Titanic",
        year: 1999,
        rating: 9
    },
    {
        id: 003,
        name: "Top Dick & harry",
        year: 2020,
        rating: 6
    },
    {
        id: 004,
        name: "Peace",
        year: 1988,
        rating: 7
    },
    {
        id: 005,
        name: "The Tiger",
        year: 2015,
        rating: 5
    },
    {
        id: 006,
        name: "Kung Fu",
        year: 2018,
        rating: 8
    },
    {
        id: 007,
        name: "The End",
        year: 2012,
        rating: 6
    }
];

router.get('/', function (req, res) {

    res.json(movies);
});

// Post New Data
router.post('/post-movies', function (req, res) {

    var newId = movies[movies.length - 1].id + 1;
    movies.push({
        id: newId,
        name: "Over",
        year: 1888,
        rating: 9
    });
    res.json({
        message: " Movie Added",
        location: "/movies/" + newId
    });
});


console.log(movies);
router.get('/:id([0-9]{3,})', function (req, res) {
    var currMovie = movies.filter(function (movie) {
        if (movie.id == req.params.id) {
            return true;
        }
    });
    if (currMovie.length == 1) {
        res.json(currMovie[0])
    } else {
        //Set status to 404 as item was not found
        res.status(404);
        res.json({
            message: "Not Found"
        });
    }
});




//Routes will go here
module.exports = router;