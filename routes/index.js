const express = require('express');
const router = express.Router();

// GET /
router.get('/', function(req, res) {
	res.render('index');
});

module.exports = router;