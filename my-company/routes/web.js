var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    res.send('<h1>Web Home Page</h1>')
})

router.get('/messages', function(req, res){
  res.send('<h1>Web messages</h1>')
})

router.get('/settings', function(req, res){
    res.send('<h1>Web settings</h1>')
})

module.exports = router;

