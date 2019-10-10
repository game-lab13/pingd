const pool = require('../db');
const express = require('express');
const matchController = require('../controllers/matchController');

const router = express.Router();


router.post('/requestMatch', (req, res, next) => {
    // first_name
    // match_id
    // user_id
    // username
    const { host_id, guest_id } = req.body;
    let insertMatchQuery = `INSERT INTO "match" (host_id, guest_id) VALUES ($1, $2) RETURNING host_id`;
    const values = [host_id, guest_id];

    pool.query(insertMatchQuery, values, (err, result) => {
        if (err) res.status(500).send(err);
        else {
            let host_id = result.rows[0].host_id;
            console.log('host id ', host_id);
            let getUserInfoQuery = `SELECT "user".id AS user_id, "match".id AS match_id, first_name, username FROM "user" JOIN "match" ON "user".id = "match".guest_id WHERE host_id=$1`;
            const value = [host_id];

            pool.query(getUserInfoQuery, value, (err, result) => {
                if (err) res.status(500).send(err);
                else {
                    res.status(200).json({ ...result.rows[0] })
                }
            });
        }
    })
});

router.patch('/inviteResponse', (req, res, next) => {
    const { match_id, user_response } = req.body;
    let newInviteStatus = user_response === 'accept' ? 'accepted' : 'denied';
    let newScoreStatus = user_response === 'accept' ? 'pending' : 'not_applicable';
    let updateInviteStatus = `UPDATE "match" SET invite_status=$1, score_status=$2 WHERE id=$3`;
    const values = [newInviteStatus, newScoreStatus, match_id];

    pool.query(updateInviteStatus, values, (err, result) => {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    })
});

router.patch('/recordScore', (req, res, next) => {
    const { match_id, selected_winner_id } = req.body;
    let updateScoreStatus = `UPDATE "match" SET selected_winner_id=$1, score_status='hostConfirmed' WHERE id=$2`;
    const values = [selected_winner_id, match_id];

    pool.query(updateScoreStatus, values, (err, result) => {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    })
});

router.patch('/confirmScore', (req, res, next) => {
    const { match_id, user_response } = req.body;
    // if user_response = 'confirm', set score_status = 'complete'
    // else score_status = 'pending'
    let newScoreStatus = user_response === 'confirm' ? 'complete' : 'pending';
    let updateScoreStatus = `UPDATE "match" SET score_status=$1 WHERE id=$2`;
    const values = [newScoreStatus, match_id];

    pool.query(updateScoreStatus, values, (err, result) => {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

module.exports = router;