var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var reportSchema = new Schema({
	type: {
		type: Schema.ObjectId,
		ref: 'failures',
		index: true
	},
	serviceNumber: { type: Number },
	email: { 
		type: String,
		lowercase: true,
		trim: true
	},
	twitter: { 
		type: String,
		lowercase: true,
		trim: true
	},
	observations: { type: String }
});

module.exports = mongoose.model('reports', reportSchema);
