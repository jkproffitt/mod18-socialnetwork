const { User } = require('../models');
// TODO: build routes for getAllUsers,
// TODO: getUserById,
// TODO: createUser,
// TODO: updateUser,
// TODO: deleteUser,
// TODO: addFriend,
// TODO: removeFriend

const userController = {
	getAllUsers: async (req, res) => {
		try {
			const users = await User.find();
			res.json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	createUser: async (req, res) => {
		try {
			const user = await User.create(req.body);
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	updateUser: async (req, res) => {
		try {
			const user = await User.find(req.body);
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	deleteUser: async (req, res) => {
		try {
			const user = await User.create(req.body);
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};

module.exports = userController;
