const express = require('express');
const router = express.Router();

// Controller
const somethingsController = require('../controllers/somethings');

// GET /somethings
router.get('/', somethingsController.index);
// GET /somethings/new
router.get('/new', somethingsController.new);
// GET /somethings/id
router.get('/:id', somethingsController.show);
// GET /somethings/id/edit
router.get('/:id/edit', somethingsController.edit);
// POST /somethings
router.post('/', somethingsController.create);
// PUT /somethings/id
router.put('/:id', somethingsController.update);
// DELETE /somethings/id
router.delete('/:id', somethingsController.delete);

module.exports = router;