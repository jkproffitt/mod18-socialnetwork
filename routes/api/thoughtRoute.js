const router = require('express').Router();
const {
	getAllThoughts,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought,
	addReaction,
	deleteReaction,
} = require('../../controllers/thoughtController.js');

//get all Thoughts and create user
router.route('/').get(getAllThoughts).post(createThought);

//get, update, delete Thought by id
router
	.route('/:id')
	.get(getThoughtById)
	.put(updateThought)
	.delete(deleteThought);

//add or remove add reaction
router.route('/:id/reaction').post(addReaction).delete(deleteReaction);

module.exports = router;
