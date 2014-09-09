var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var failureSchema = new Schema({
	description: { type: String }
});

module.exports = mongoose.model('failures', failureSchema);
