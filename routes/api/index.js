const router = require('express').Router(); 
const userRoutes = require('./user-routes'); 
const thoughtRoutes = require('./thought-routes');

router.use('/users', userRoutes); // /api/users
router.use('/thoughts', thoughtRoutes); // /api/thoughts

module.exports = router;