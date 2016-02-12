//NPM imports
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//DB
mongoose.connect('mongodb://localhost/angdataapp');
var Project = require(__dirname + '/models/project');
var Task  = require(__dirname + '/models/task');
var User = require(__dirname + '/models/user');
var seedDb = require(__dirname + '/seedDb');

var app = express();

//Middleware and initialising
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


//seedDb();

app.get('/', function(req,res) {
    res.send(__dirname + '/public/index.html');
});

//GET all tasks
app.get('/gettasks', function(req,res) {    
    Task.find({}).populate('createdBy').exec(function(err, foundTasks) {         
         if (err) { console.log(err); } else {  
             res.json(foundTasks);
         }
    });
});
        

//Create
app.post('/addtask', function(req,res) {
    console.log(req.body);
    Task.create(req.body, function(err, newTaskAdded) {
        if (err) { console.log(err); } else {
            res.json(newTaskAdded);
        }
    });
})


app.listen('8001', function() {
	console.log('Server started');
});