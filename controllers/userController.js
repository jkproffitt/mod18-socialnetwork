const { User } = require('../models');

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
