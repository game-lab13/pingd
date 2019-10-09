const pool = require("../db");
const userController = {};

userController.fetchRanking = (req, res, next) => {
    let queryString = `SELECT id, first_name, username, wins, losses, points FROM "user" ORDER BY points DESC;`;
    pool.query(queryString, (err, result) => {
        if (err) res.status(500).send(err);
        else {
            const rankings = result.rows;
            res.locals['rankings'] = rankings;
            next();
        }
    });
}

module.exports = userController;