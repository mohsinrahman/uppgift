var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var multer = require("multer");
var upload = multer();

var app = express();
app.use(express.static("public"));
app.use(function (req, res, next) {
    /*     res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type'); */
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
})
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(upload.array());

//Require the Router we defined in movies.js
var movies = require('./movies');
//Use the Router on the sub route /movies
app.use('/movies', movies);



app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
module.exports = app;