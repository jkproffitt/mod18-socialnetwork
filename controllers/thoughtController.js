const { Thought } = require('../models');

module.exports = {
	getAllThoughts: async (req, res) => {
		try {
			const thought = await Thought.find();
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async getThoughtById({ params }, res) {
		const thought = await Thought.findOne({ _id: params.id });
		if (!thought) {
			return res
				.status(400)
				.json({ message: 'No thought found by that id' });
		}

		res.status(200).json(thought);
	},

	// async createThought({ body }, res) {
	// 	const thought = await Thought.create(body);

	// 	if (!thought) {
	// 		return res
	// 			.status(400)
	// 			.json({ message: 'Unable to create thought' });
	// 	}
	// 	res.status(200).json(body);
	// },

	createThought: async (req, res) => {
		try {
			const thought = await Thought.create(req.body);
			res.status(200).json(thought);
		} catch (err) {
			res.status(400).json({ message: 'Unable to create thought' });
		}
	},

	// async updateThought(req, res) {
	// 	const thought = await Thought.findOneAndUpdate(
	// 		{ _id: req.body.id },
	// 		{ $thoughtText: `${req.body.thoughtText}` },
	// 		{ new: true }
	// 	);
	// },

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
			const thought = await Thought.findOneAndDelete({
				_id: req.params.id,
			});
			res.json(thought);

			if (!thought) {
			}
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// TODO: addReaction,

	async addReaction({ params }, res) {
		try {
			const reaction = await Thought.findOneAndUpdate(
				{ _id: req.params.reactionId },
				{ $addToSet: { responses: req.body } },
				{ runValidators: true, new: true }
			);

			if (!reaction) {
				return res
					.status(404)
					.json({ message: 'No Reaction with this id!' });
			}

			res.json(reaction);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// TODO: deleteReaction 18 - CRUD subdoc ln 115

	async deleteReaction({ params }, res) {
		try {
			const reaction = await Thought.findOneAndUpdate(
				{ _id: req.params.reactionId },
				{ $addToSet: { responses: req.body } },
				{ runValidators: true, new: true }
			);

			if (!reaction) {
				return res
					.status(404)
					.json({ message: 'No Reaction with this id!' });
			}

			res.json(reaction);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
