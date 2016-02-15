//var mongoose = require('mongoose');
//
//var userSchema = new mongoose.Schema({
//	firstName: String,
//	lastname: String,
//	jobTitle: String		
//});
//
//var User = mongoose.model('User', userSchema);
//
//module.exports = User;

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    jobtitle: String,
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);

module.exports = User;