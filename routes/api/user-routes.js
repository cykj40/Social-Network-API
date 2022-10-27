const router = require('express').Router(); 

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser); // POST /api/users

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById) // GET /api/users/:id
    .put(updateUser) // PUT /api/users/:id
    .delete(deleteUser); // DELETE /api/users/:id

// Set up POST and DELETE at /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend) // POST /api/users/:userId/friends/:friendId
    .delete(deleteFriend); // DELETE /api/users/:userId/friends/:friendId

module.exports = router; 
