const pool = require('../db');
const authController = {}

authController.createUser = (req, res, next) => {
    let enableEncryptionQuery = "CREATE EXTENSION IF NOT EXISTS pgcrypto;";
    pool.query(enableEncryptionQuery, (err, result) => {
        if (err) throw new Error(err);
    })

    const { fname, lname, password, phone, username } = req.body;
    let userExistsQuery = `SELECT 1 FROM "user" WHERE fname = $1 AND lname = $2;`;
    let userName = [fname, lname];
    pool.query(userExistsQuery, userName, (err, result) => {
        if (err) {
            res.status(500).send(err)
        } else {
            if (result.rowCount > 0) {
                res.json("User with matching name already exists. Please log in or enter different name.");
            }
            else {
                let queryString = `INSERT INTO "user"(fname, lname, password, phone, username)
                VALUES ($1, $2, crypt($3, gen_salt('bf')), $4, $5)`
                const values = [fname, lname, password, phone, username];

                pool.query(queryString, values, (err, result) => {
                    if (err) {
                        res.status(500).send(err)
                    } else {
                        next();
                    }
                });
            }
        }
    })

}

authController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    console.log('username', username)
    console.log('password', password)
    let queryString = `SELECT password FROM "user" WHERE username=$1;`;
    const value = [username];

    pool.query(queryString, value, (err, result) => {
        if (err) res.status(500).send(err);
        else {
            let expectedPassword = result.rows[0].password;
            let userQuery = `SELECT id, fname, username, points, wins, losses FROM "user" WHERE username=$1 AND password=crypt($2, $3)`
            const values = [username, password, expectedPassword];
            pool.query(userQuery, values, (err, result) => {
                if (err) res.status(500).send(err);
                else {
                    res.locals['userInfo'] = result.rows[0];
                    next();
                }
            })
        }
    });
}

module.exports = authController;