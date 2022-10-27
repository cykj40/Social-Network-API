const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought) // GET /api/thoughts
    .post(createThought); // POST /api/thoughts

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById) // GET /api/thoughts/:id
    .put(updateThought) // PUT /api/thoughts/:id
    .delete(deleteThought); // DELETE /api/thoughts/:id

// Set up POST and DELETE at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction) // POST /api/thoughts/:thoughtId/reactions

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); // DELETE /api/thoughts/:thoughtId/reactions/:reactionId

module.exports = router;