const pool = require("../db");
const userController = {};

userController.fetchRanking = (req, res, next) => {
    let queryString = `SELECT fname, username, wins, losses, points FROM "user" ORDER BY points DESC;`;
    pool.query(queryString, (err, result) => {
        if (err) res.status(500).send(err);
        else {
            const currentUserInfo = res.locals.userInfo;
            const rankings = result.rows;
            console.log('about to send data back', { currentUserInfo, rankings })
            res.json({ currentUserInfo, rankings });
        }
    });
}

module.exports = userController;