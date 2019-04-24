const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db-name', {reconnectInterval: 500, useNewUrlParser: true});
const db = mongoose.connection;

db.on('connected', function() {
	console.log(`Connected to db ${db.name} at ${db.host}:${db.port}`);
});

module.exports = mongoose;