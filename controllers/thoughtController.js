const { Thought } = require('../models');

const thoughtController = {
	getAllThoughts: async (req, res) => {
		try {
			const thought = await Thought.find();
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};

module.exports = thoughtController;
