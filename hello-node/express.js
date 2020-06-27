var express = require ('express');
var app = express();

app.get('/', function (req, res) {
    res.end('Hello World! from Express');
})

app.get('/profile', function (req, res) {
    res.end('This page will have profile details');
})

app.listen(8080)