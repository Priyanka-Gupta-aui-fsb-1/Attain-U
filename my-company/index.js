var express = require('express');
var app = express();
var path = require('path');
const { nextTick } = require('process');
const { clearScreenDown } = require('readline');


/*app.use (express.static('public'))



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
})*/ 



app.use('/about', function(req, res, next){
    console.log(req.originalUrl)
    res.redirect('http://google.com')
    next()
})

app.get('/instructor', function(req,res){
    res.send('<h1>Instructor Dashbord </h1>')
})

app.use('/student', require('./routes/student.js'))

app.use('/blog', require('./routes/blog.js')) 

app.listen(8080, function(){
    console.log('server started on port http://localhost8080')
    
})