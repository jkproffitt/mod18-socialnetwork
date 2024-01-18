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
// TODO: build routes for getAllUsers,
// TODO: getUserById,
// TODO: createUser,
// TODO: updateUser,
// TODO: deleteUser,
// TODO: addFriend,
// TODO: removeFriend

//get all users and create user
router.route('/').get(getAllUsers).post(createUser);

//get, update, delete user by id
// router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

//add or remove addFriend
// router.route();

module.exports = router;
