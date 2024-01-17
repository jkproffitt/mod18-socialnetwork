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
};

module.exports = userController;
