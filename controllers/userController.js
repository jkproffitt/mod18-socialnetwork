const { User } = require('../models');

module.exports = {
	async getAllUsers({ params }, res) {
		const allUsers = await User.find({});

		if (!allUsers) {
			return res.status(400).json({ message: 'No Users Found' });
		}
		res.status(200).json({ allUsers });
	},

	async getUserById({ params }, res) {
		const user = await User.findOne({ _id: params.id });
		if (!user) {
			return res
				.status(400)
				.json({ message: 'No user found by that id' });
		}

		res.status(200).json(user);
	},

	// async createUser({ body }, res) {
	// 	const user = await User.create(body);
	// 	if (!user) {
	// 		return res.status(400).json({});
	// 	}
	// 	res.status(200).json(body);
	// },

	createUser: async (req, res) => {
		try {
			const user = await User.create(req.body);
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	async updateUser(req, res) {
		try {
			const user = await User.findOneAndUpdate(
				{ _id: req.body.id },
				{ new: true }
			);

			if (!user) {
				return res.status(400).json({ message: 'No user exists' });
			}
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// async updateUser(req, res) {
	// 	const user = await User.findOneAndUpdate(
	// 		{ _id: req.body.id },
	// 		{ new: true }
	// 	);

	// 	if (!user) {
	// 		return res.status(400).json({ message: 'No user exists' });
	// 	}
	// 	res.status(200).json(user);
	// },

	deleteUser: async (req, res) => {
		try {
			const user = await User.create(req.body);
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// TODO: addFriend,

	async addFriend(req, res) {
		try {
			const user = await User.findOneAndUpdate(
				{ _id: req.body.id },
				{ new: true }
			);

			if (!user) {
				return res.status(400).json({ message: 'No friend exists' });
			}
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// TODO: removeFriend

	async removeFriend(req, res) {
		try {
			const friend = User.findById(req.body.id);
			const user = await User.findOneAndUpdate(
				{ _id: req.body.id },
				{ $pull: { friends: friend } },
				{ new: true }
			);

			if (!user) {
				return res.status(400).json({ message: 'No friend exists' });
			}
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
