var Project	 = require(__dirname + '/models/project');
var Task	 = require(__dirname + '/models/task');
var User = require(__dirname + '/models/user');


//Project.create({ name: 'Project Phoenix', description: 'Very important'
//	
//})
module.exports = function () {
	User.create({firstName: 'Ash', 
			 lastname: 'Kris', 
			 jobTitle: 'Project Manager'}, function(err, newUser) {
							console.log(newUser);
});

}