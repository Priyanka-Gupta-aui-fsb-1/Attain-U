var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('<h1>Blog list</h1>');
})

router.get('/categories', function(req, res){
    res.send('<h1>Blog Categories</h1>');
})

router.get('/featured', function(req, res){
    res.send('<h1>Blog featured</h1>');
})

router.get('/authors', function(req, res){
    res.send('<h1>list of authors</h1>')
})

router.get('/article/:article_name', function(req,res){
    //blog content = get blog from db where name of blog = article_name
    res.send('<h1>' +req.params.article_name + '/h1><h4>ontent from db</h4>');
})

module.exports = router;