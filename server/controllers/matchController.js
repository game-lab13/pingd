const pool = require('../db');

const matchController = {};

matchController.fetchInvitesReceived = (req, res, next) => {
    const guest_id = res.locals.userInfo['id'];
    const inviteQuery = `SELECT first_name, username, "user".id AS user_id, "match".id AS match_id FROM "user" INNER JOIN "match" ON "user".id="match".host_id WHERE invite_status='pending' AND guest_id=$1;`;
    const userIdValue = [guest_id];

    pool.query(inviteQuery, userIdValue, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.locals['invitesReceived'] = result.rows;
            next()
        }
    });
}

matchController.fetchInvitesSent = (req, res, next) => {
    const host_id = res.locals.userInfo['id'];
    const inviteQuery = `SELECT first_name, username, "user".id AS user_id, "match".id AS match_id FROM "user" INNER JOIN "match" ON "user".id="match".guest_id WHERE invite_status='pending' AND host_id=$1;`;
    const userIdValue = [host_id];

    pool.query(inviteQuery, userIdValue, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.locals['invitesSent'] = result.rows;
            next();
        }
    });
}

matchController.fetchScoresToRecord = (req, res, next) => {
    const host_id = res.locals.userInfo['id'];
    const inviteQuery = `SELECT first_name, username, "user".id AS user_id, "match".id AS match_id FROM "user" INNER JOIN "match" ON "user".id="match".guest_id WHERE score_status='pending' AND host_id=$1;`;
    const userIdValue = [host_id];

    pool.query(inviteQuery, userIdValue, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.locals['scoresToRecord'] = result.rows;
            next()
        }
    });

}

matchController.fetchScoresToConfirm = (req, res, next) => {
    const guest_id = res.locals.userInfo['id'];
    const inviteQuery = `SELECT first_name, username, "user".id AS user_id, "match".id AS match_id, selected_winner_id FROM "user" INNER JOIN "match" ON "user".id="match".host_id WHERE score_status='hostConfirmed' AND guest_id=$1;`;
    const userIdValue = [guest_id];

    pool.query(inviteQuery, userIdValue, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.locals['scoresToConfirm'] = result.rows;
            res.status(200).json(res.locals)
        }
    });

}

module.exports = matchController;