var express = require('express');
var app = express();
app.use(express.json());
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var dbname= 'recipes';
let db;
MongoClient.connect(url,{useUnifiedTopology: true},function(error, client){
    if(error)
    throw error;
    console.log("connected to db");

db = client.db('recipes')
});


app.get('/new', function(req,res){
    res.sendFile(__dirname+'/index.html');
})


app.post('/new', function(req,res){
    var {recipe_title,recipe_description,serves_for,cooking_time} = req.body
    console.log(req.body);
    
    /*db.createcollection('recipes',function(error,result){
      if (error)
      throw error;
      console.log('recipes collection created');   
    })*/

    var collection = db.collection('recipes_description');

    db.collection('recipes_description').insertOne({recipe_title,recipe_description,serves_for,cooking_time},function(error,result){
    if (error){
        throw error;
        res.json({success: false, message:"ERROR ENCOUNTERED"}) 
     }
     else
     {
        res.json({success: true, message: "RECIPE ADDED", result})
     }
    })
})

    
    app.listen (8010, function() {
        console.log('started')
    } )
