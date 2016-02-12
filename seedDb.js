var Project	 = require(__dirname + '/models/project');
var Task	 = require(__dirname + '/models/task');
var User = require(__dirname + '/models/user');


//Project.create({ name: 'Project Phoenix', description: 'Very important'
//	
//})
module.exports = function () {
	User.create({firstName: 'Stevey', 
			 lastname: 'Cole', 
			 jobTitle: 'IT dude'}, function(err, newUser) {
							console.log(newUser);
});
	
	Task.create({name: 'Job 1',
				 description: 'This is test job',
                 createdBy: "56bc93f6447f6240554a6f29",  //temperorily setup user
				 assignee: 'Joe Blog'
					
				}, function (err, newTask){
					console.log(newTask);
	});

}

