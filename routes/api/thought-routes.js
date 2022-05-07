
const router = require('express').Router();

const { 
    getThoughts, 
    getThoughtsId, 
    cThoughts, 
    updateThoughts,
    dThoughts,
    addReaction,
    dReaction

} = require('../../controllers/thoughts-controller');


router.route('/').get(getThoughts);


router.route('/:id').get(getThoughtsId).put(updateThoughts).delete(dThoughts); 


router.route('/:userId').post(cThoughts);


router.route('/:thoughtId/reactions').post(addReaction);


router.route('/:thoughtId/reactions/:reactionId').delete(dReaction);


module.exports = router;