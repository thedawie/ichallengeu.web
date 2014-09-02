var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChallengeSchema = new Schema({
	challengeId : Number,
	name: String,
	dueDate: Date,
	challengeDate: Date,
	
});

module.exports = mongoose.model('Challenge',ChallengeSchema);