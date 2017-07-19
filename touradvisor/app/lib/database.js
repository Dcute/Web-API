const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get a list of user from the database
router.get('/user', function(req,res,next){
     User.find({}).then(function(user){
         res.send(user);
     })
});


//add a new user into the database
router.post('/user', function(req,res,next){
     User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});


//update a user in the database
router.put('/user/:id', function(req,res,next){
    User.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        User.findOne({_id:req.params.id}).then(function(user){
            res.send(user);
          })
     });
});


//delete a user in the database
router.delete('/user/:id', function(req,res,next){
    User.findByIdAndRemove({_id:req.params.id}).then(function(user){
        res.send(user);
    });
});


module.exports = router;