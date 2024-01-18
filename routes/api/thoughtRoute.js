const router = require('express').Router();
const { getAllThoughts } = require('../../controllers/thoughtController.js');
// TODO: build routes for getAllThoughts,
// TODO: getThoughtById,
// TODO: createThought,
// TODO: updateThought,
// TODO: deleteThought,
// TODO: addReaction,
// TODO: deleteReaction

// //get all Thoughts and create user
router.route('/').get(getAllThoughts);
// .post(createThought);

// //get, update, delete Thought by id
// router
// 	.route('/:id')
// 	.get(getThoughtById)
// 	.put(updateThought)
// 	.delete(deleteThought);

// //add or remove add reaction
// router.route('/:thoughtId/reaction').post(addReaction).delete(deleteReaction);

module.exports = router;
