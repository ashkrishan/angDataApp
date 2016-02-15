//NPM imports
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var expressSession = require('express-session');

//DB
mongoose.connect('mongodb://localhost/angdataapp');
var Project = require(__dirname + '/models/project');
var Task  = require(__dirname + '/models/task');
var User = require(__dirname + '/models/user');
var seedDb = require(__dirname + '/seedDb');

var app = express();

app.set('view engine', 'ejs');

//Middleware and initialising
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


//User authentication middleware and setup
app.use(session({
    secret: '6g!zu%md&b=yxeef7v=5$(8mwyc*gkb_qhb83zm1slr#!yoli(',  //generated via django key generator
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//seedDb();


//Function to chekc if user is autheticated and add that as middleware for requests and response

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated) {
        res.next();
    } else {
        res.redirect('/login.html')
    }
    
}


app.get('/login', function(req, res) {
    res.send() 
     
});

app.get('/', function(req,res) {
    res.send(__dirname + '/public/index.html');
});



app.get('/users', function(req, res) {
	User.find({}, function(err, foundUsers) {
		if (err) { console.log(err); } else {
			res.json(foundUsers);
		}
	})
});


//GET all tasks
app.get('/tasks', function(req,res) {    
    Task.find({}).populate('createdBy').exec(function(err, foundTasks) {         
         if (err) { console.log(err); } else {  
             res.json(foundTasks);
         }
    });
});


        

//Create
app.post('/tasks', function(req,res) {
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