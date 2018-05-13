

//Adding the dependencies

var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes/routes');
var bodyParsor = require('body-parser');
//application Object
var app = express();

//Write a connection code
var dburl = "mongodb://localhost:27017/todos";

//var dbOptions={'user':'Rohit','pass':'password'};
// mongoose.connect('dburl',dbOptions);
mongoose.set('debug',true);
mongoose.connect(dburl);
mongoose.connection.on('connected',()=>{
    console.log("Connected to mongoDB");
})
mongoose.connection.on('error',(err)=>{
    console.log(err);
})
//add midlleware

app.use(bodyParsor.json());
app.use('/api',routes);
var PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server Started and Running");
})