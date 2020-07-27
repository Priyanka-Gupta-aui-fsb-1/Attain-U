
var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert')


mongoClient.connect("mongodb://localhost:27017/marvel",{useUnifiedTopology: true}, (error, client)=>{
  assert.equal(null,error)
   // if (error)
      //throw error;
    console.log("connected to db");

    db = client.db('recipes');

})

router.get('/addrecipes', function(req,res){
  res.sendFile(__dirname+'/recipe.html');
})


router.post('/', function(req,res){
  var data = {recipe_title: req.body.recipe_title, recipe_description: req.body.recipe_description,
      serves_for: req.body.serves_for, cooking_time: req.body.cooking_time} 
  console.log(req.body);
  
  db.createcollection('details',function(error,result){
    if (error)
    throw error;
    console.log('recipes collection created');   
  })
  
  var collection = db.collection('details');

  db.collection('details').insertOne({recipe_title: req.body.recipe_title, recipe_description: req.body.recipe_description,
      serves_for: req.body.serves_for, cooking_time: req.body.cooking_time},function(error,result){
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


router.get('/', function(req, res) {
  db.collection('recipes').find({}).toArray(function(error, result) {
    if (error)
      throw error;
    res.json(result);
  })
})

router.put('/', function(req, res) {
  db.collection('recipes').updateOne(req.body, function(error, result) {
    if (error)
      throw error;
    res.json(result);
  })
})

router.delete('/', function(req, res) {
  db.collection('recipes').deleteOne(req.body, function(error, result) {
    if (error)
      throw error;
    res.json(result);
  })
})

router.get('/all', function(req,res){
  var collection = db.collection("details");
  collection.find({}).toArray(
      function(error,result){
      if(error){console.log(error)}
      else{return res.json(result);}
  })

})


module.exports = router;