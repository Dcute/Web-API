const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/touradvisor');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//Initialize routes
app.use('/user', require('./app/lib/database.js'));

//error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message})
})


//listen for request
app.listen(process.env.port || 8080, function(){
    console.log('now listening for request');
})