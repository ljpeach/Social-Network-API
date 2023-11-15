const router = require('express').Router();
const { getAllThoughts,
    addThought,
    getThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction, } = require('../../controllers/thoughtController');

router.route('/')
    .get(getAllThoughts)
    .post(addThought);
router.route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(removeThought);

router.route('/:thoughtId/reactions')
    .post(addReaction);
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;