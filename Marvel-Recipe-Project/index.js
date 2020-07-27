var express = require ('express');
var session = require ('express-session');
var mongoClient = require('mongodb').MongoClient;
var app = express();
var path = require('path')
var assert = require('assert')
mongoClient.connect("mongodb://localhost:27017/",{useUnifiedTopology: true}, (error, client)=>{
  assert.equal(null,error)
   // if (error)
      //throw error;
    console.log("connected to db");
    db = client.db('marvel');
  

})

app.use(session({
  secret: 'ocean',
  resave: false,
  saveUninitialized: false
}))
app.use
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



const recipesrouter = require('./routes/recipes.js')
const approuter = require('./routes/app.js' )
app.use('/recipes', recipesrouter)
app.use('/', approuter)



app.post('/signup', function(req, res){
// var data = {name: req.body.name, email: req.body.email, password: req.body.password, confirmPassword: req.body.confirmPassword}
  console.log(req.body);

  if (req.body.formsignuppassword != req.body.formsignupconfirm){
    res.json({success: false, message: 'Password do not match'});
  }
  else{
    
    db.collection('user-details').findOne({formsignupEmail: req.body.formsignupEmail},function(error,result){
      if (error)
       throw error;
      if (result)
       res.json({success: false, message: 'Email is already registered.'});
      else{
        delete req.body.formsignupconfirm;


        db.collection('user-details').insertOne(req.body, function(error, result){
          if (error)
            throw error;
          res.json({success: true, message: 'Your account has been created. Please log in'})
      })
      }
    })
  }

})

app.post('/login', function(req,res){
  console.log(req.body);
db.collection('user-details').findOne({Email: req.body.formsignupEmail, Password: req.body.formsignuppassword},function(error,result){
  if (error){
  res.json({success:false, message: 'Invalid credentials'});}
  if (result) {
    req.session.user = req.body.email;
    res.json({success: true, message: 'User logged in.', data: result.firstname})
  }
  else {
    res.json({success: false, message: 'Invalid credentials.'});
  }
    
   
  
})
});

app.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/logo.html');
});

app.get('/private', function(req,res){
  if (req.session.user){
    db.collection('user-details').find({}).toArray(function(error, result){
      if (error)
       throw error;
      else{
        res.json({success: false, message: 'No user data found'});
      }
    })
  }
  else{
    res.redirect('/account.html')
  }
});

// app.post('/new', function(req,res){
//   var data = {recipe_title: req.body.recipe_title, recipe_description: req.body.recipe_description,
//       serves_for: req.body.serves_for, cooking_time: req.body.cooking_time} 
//   console.log(req.body);
//   var collection = db.collection('details');

//   db.collection('details').insertOne({recipe_title: req.body.recipe_title, recipe_description: req.body.recipe_description,
//       serves_for: req.body.serves_for, cooking_time: req.body.cooking_time},function(error,result){
//   if (error){
//       throw error;
//       res.json({success: false, message:"ERROR ENCOUNTERED"}) 
//    }
//    else
//    {
//       res.json({success: true, message: "RECIPE ADDED", result})
//    }
//   })
// })

/*app.get('/', (req, res)=>{
  res.sendFile(__dirname+"/public/logo.html")
 })

const isLoggedIn=(req,res,next)=>{
  if(req.session.login){
     return next()
} else {
  return res.json({status: false, message: "not logged in"})
}
}



app.get('/login', (req, res)=>{
 res.sendFile(__dirname+"/public/account.html")
})
app.post('/login', (req, res)=>{
   let{email,password} = req.body;
   db.collection('user-detail').find({email}).toArray((error,result)=>{
     if(error){
      console.log(error)}
    
     else {
       req.session.login=true;
       req.session.save();
       res.redirect('/public/index.html')
       res.json({success:true, message: 'User logged in.'})
     }
   })
 })
 
app.get('/logout', (req, res)=>{
 req.session.destroy()
})

app.get('/Add recipes', isLoggedIn,(req,res)=>{
  res.sendFile(__dirname+'/public/recipe.html')
})

app.get('/login', (req, res)=>{
  res.sendFile(__dirname+"/public/account.html")
 })

 
app.post('/signup', function(req, res){
 let{name, email, password, confirmPassword}=req.body;
    //console.log(req.body);
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);

    var collection = db.collection('user-details');
    
    
  

        db.collection('user-details').insertOne(req.body, function(error, result){
          if (error)
            throw error;
          res.json({success: true, message: 'Your account has been created. Please log in'})
      })
      })



      app.get('/all', function(req,res){
        var collection = db.collection("user-details");
        collection.find({}).toArray(
            function(error,result){
            if(error){console.log(error)}
            else{return res.json(result);}
        })
    
    })*/





 app.listen(8000, function(){
   return 'server listening on port 8000'; 
 })








