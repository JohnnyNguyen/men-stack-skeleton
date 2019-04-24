// Model
const Something = require('../models/something'); 

function index(req, res) {
	Something.find({}, function(err, somethings) {
		res.render('somethings/index', {somethings});
	});
}

function new_(req, res) {
	res.render('somethings/new');
}

function create(req, res) {
	for (let key in req.body) {
		if (req.body[key] === '') delete req.body[key];
	}
	const something = new Something(req.body);
	something.save(function(err) {
		if (err) {

		}
		else {
			res.redirect(`/somethings/${something._id}`);
		}
	});
}

function show(req, res) {
	Something.findById(req.params.id, function(err, something) {
		res.render('somethings/show', {something});
	});
}

function edit(req, res) {

}

function update(req, res) {

}

function delete_(req, res) {
	Something.deleteOne(req.params.id);
	res.redirect('/somethings');
}

module.exports = {
	index, 
	new: new_,
	create,
	show, 
	edit,
	update,
	delete: delete_
};