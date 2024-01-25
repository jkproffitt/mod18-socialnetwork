const { Thought } = require('../models');

module.exports = {
	getAllThoughts: async (req, res) => {
		console.log('here' + req);
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

	//Need thoughtTEXT for text
	createThought: async (req, res) => {
		try {
			const thought = await Thought.create(req.body);
			res.status(200).json(thought);
		} catch (err) {
			res.status(400).json({ message: 'Unable to create thought' });
		}
	},

	updateThought: async (req, res) => {
		try {
			const thought = await Thought.findOneAndUpdate(
				{ _id: req.params.id },
				{ thoughtText: `${req.body.thoughtText}` },
				{ new: true }
			);
			res.status.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	deleteThought: async (req, res) => {
		try {
			const thought = await Thought.findOneAndDelete({
				_id: req.params.id,
			});
			if (!thought) {
				res.status(400).json({ message: 'no thought exisits' });
			}
			res.status(200).json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async addReaction(req, res) {
		try {
			const reaction = await Thought.findOneAndUpdate(
				{ _id: req.params.id },
				{ $addToSet: { reactions: req.body } },
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

	async deleteReaction(req, res) {
		try {
			const reaction = await Thought.findOneAndUpdate(
				{ _id: req.params.id },
				{ $pull: { reactions: req.body } },
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
