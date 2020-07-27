var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/logo', function(req, res) {
  console.log('logo.html')
  res.sendFile(path.join(__dirname, '../public/logo.html'));
})


router.get('/account', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/account.html'));
})

router.get('/aboutus', function(req, res) {
  
  res.sendFile(path.join(__dirname, '../public/aboutus.html'));
})


router.get('/articles', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/articles.html'));
})






router.get('/recipes', function(req, res) {
  console.log("list of recipes")
  res.sendFile(path.join(__dirname, '../public/index.html'));
})





  router.get('/all', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/recipe.html'));
  })

module.exports = router; 