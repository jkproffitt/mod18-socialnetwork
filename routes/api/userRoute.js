const router = require('express').Router();
const {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	removeFriend,
} = require('../../controllers/userController.js');

//get all users and create user
router.route('/').get(getAllUsers).post(createUser);

//get, update, delete user by id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

//add or remove addFriend
router.route('/:id/friends').put(addFriend).delete(removeFriend);

module.exports = router;
