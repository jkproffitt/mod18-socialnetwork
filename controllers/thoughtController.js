const { Thought } = require('../models');
// TODO: build routes for getAllThoughts,
// TODO: getThoughtById,
// TODO: createThought,
// TODO: updateThought,
// TODO: deleteThought,
// TODO: addReaction,
// TODO: deleteReaction

const thoughtController = {
	getAllThoughts: async (req, res) => {
		try {
			const thought = await Thought.find();
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	getThoughtById: async (req, res) => {
		try {
			const thought = await Thought.find(req.body);
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	createThought: async (req, res) => {
		try {
			const thought = await Thought.create(req.body);
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	updateThought: async (req, res) => {
		try {
			const thought = await Thought.find(req.body);
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	deleteThought: async (req, res) => {
		try {
			const thought = await Thought.delete();
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};

module.exports = thoughtController;
