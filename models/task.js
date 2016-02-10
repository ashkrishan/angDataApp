var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	name: String,
	description: String,
	createdOn: { type: Date, default: Date.now},
	createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
	},
	assignee: String	
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
