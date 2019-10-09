const express = require('express');
const matchController = require('../controllers/matchController');

const router = express.Router();

router.get('/actionItems', matchController.getPendingInvites, matchController.getPendingScoreConfirmations, (err, result) => {
    // pending further digging
});

// router.get('/pending_invites', (req, res, next) => {

// });

// router.get('/confirm_score', (req, res, next) => {

// });

module.exports = router;