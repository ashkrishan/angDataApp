var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
	name: String,
	description: String,
	createdBy: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
	},
	createdOn: { type: Date, default: Date.now },
	status: String,
	tasks: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Task'
	}]
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;