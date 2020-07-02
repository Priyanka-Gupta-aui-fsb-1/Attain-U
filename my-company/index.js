var express = require('express');
var app = express();
var path = require('path');
app.use (express.static('public'))


app.get('/', function(req, res){
    res.end ('Welcome to my page')
})


app.get('/home', function(req, res){
    res.sendFile (path.join(__dirname, 'public/home.html'));
})

app.get('/image', function(req, res){
    res.sendFile (path.join(__dirname, 'public/image.jpg'));
})

app.get('/team', function(req, res){
    res.sendFile (path.join(__dirname, 'public/team.html'));
})

app.get('/contact', function(req, res){
    res.sendFile (path.join(__dirname, 'public/contact.html'));
})

app.post('/', function(req, res){
    console.log(req.body)
    res.send('Thank you!')
})



app.listen(8000, function(){
    console.log('server started on port http://localhost8000')
    
})