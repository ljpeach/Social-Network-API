const router = require('express').Router();
const { getAllUsers,
    addUser,
    getUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend } = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(addUser);

router.route('/:userId').get(getUser).put(updateUser).delete(removeUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;