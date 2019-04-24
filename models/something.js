const mongoose = require('mongoose');

const somethingSchema = new mongoose.Schema({
	text: {type: String},
	number: {type: Number},
	date: {type: Date},
	binary: {type: Buffer},
	boolean: {type: Boolean},
	array: {type: []} 
}, {
	timestamps: true
});

module.exports = mongoose.model('Something', somethingSchema);