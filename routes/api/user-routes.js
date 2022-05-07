// express 
const router = require('express').Router();


const {
    getUsers,
    getUsersById,
    cUsers,
    updateUsers,
    dUsers,
    addFriend,
    dFriend
  } = require('../../controllers/users-controller');


router.route('/').get(getUsers).post(cUsers);


router.route('/:id').get(getUsersById).put(updateUsers).delete(dUsers);


router.route('/:id/friends/:friendId').post(addFriend).delete(dFriend)

// Module export router
module.exports = router; 