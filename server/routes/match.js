const pool = require('../db');
const express = require('express');
const matchController = require('../controllers/matchController');

const router = express.Router();


router.post('/requestMatch', (req, res, next) => {
    const { host_id, guest_id } = req.body;
    let insertMatchQuery = `INSERT INTO "match" (host_id, guest_id) VALUES ($1, $2) RETURNING host_id`;
    const values = [host_id, guest_id];
    pool.query(insertMatchQuery, values, (err, result) => {
        if (err) res.status(500).send(err);
        else {
            let host_id = result.rows[0].host_id;
            let getUserInfoQuery = `SELECT "user".id AS user_id, "match".id AS match_id, first_name, username FROM "user" JOIN "match" ON "user".id = "match".guest_id WHERE guest_id=$1`;
            const value = [guest_id];
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
        else res.status(200).json({ match_id });
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
    // add 10 points to winner's points
    // add 1 point to loser's points
    // add win to winner's wins
    // add loss to loser's loss

    // if user_response = 'confirm', get selected_winner_id
    // if selected_winner_id = host_id, select host_id as winner_id && select guest_id as loser_id
    // if selected_winner_id = guest_id, select guest_id as winner_id && select host_id as loser_id

    let newScoreStatus = user_response === 'confirm' ? 'complete' : 'pending';
    if (user_response === 'confirm') {
        let getUsers = `SELECT host_id, guest_id, selected_winner_id FROM "match" WHERE id=$1`
        let value = [match_id];
        pool.query(getUsers, value, (err, result) => {
            if (err) res.status(500).send(err);
            else {
                let { host_id, guest_id, selected_winner_id } = result.rows[0];
                let winner_id = host_id === selected_winner_id ? host_id : guest_id;
                let loser_id = host_id === selected_winner_id ? guest_id : host_id;
                let updateUserWinnerScores = `UPDATE "user" SET wins=wins+1, points=points+10 WHERE id=$1`;
                let updateUserLoserScores = `UPDATE "user" SET losses=losses+1, points=points+1 WHERE id=$1`;
                const winnerValue = [winner_id];
                const loserValue = [loser_id];
                pool.query(updateUserWinnerScores, winnerValue, (err, result) => {
                    if (err) res.status(500).send(err);
                    // else res.sendStatus(200);
                });
                pool.query(updateUserLoserScores, loserValue, (err, result) => {
                    if (err) res.status(500).send(err);
                    // else res.sendStatus(200);
                });
            }
        });
    }
    let updateScoreStatus = `UPDATE "match" SET score_status=$1 WHERE id=$2`;
    const values = [newScoreStatus, match_id];

    pool.query(updateScoreStatus, values, (err, result) => {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

module.exports = router;