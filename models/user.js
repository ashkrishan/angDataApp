var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	firstName: String,
	lastname: String,
	jobTitle: String		
});

var User = mongoose.model('User', userSchema);

module.exports = User;
