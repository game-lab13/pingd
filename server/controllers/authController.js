const pool = require('../db');
const authController = {}

authController.createUser = (req, res, next) => {
    let enableEncryptionQuery = "CREATE EXTENSION IF NOT EXISTS pgcrypto;";
    pool.query(enableEncryptionQuery, (err, result) => {
        if (err) throw new Error(err);
    })

    const { first_name, last_name, password, phone, username } = req.body;
    let userExistsQuery = `SELECT 1 FROM "user" WHERE username=$1;`;
    let userName = [username];
    pool.query(userExistsQuery, userName, (err, result) => {
        if (err) {
            res.status(500).send(err)
        } else {
            if (result.rowCount > 0) {
                res.json("User with matching username already exists. Please log in or enter different username.");
            }
            else {
                let queryString = `INSERT INTO "user"(first_name, last_name, password, phone, username)
                VALUES ($1, $2, crypt($3, gen_salt('bf')), $4, $5)`
                const values = [first_name, last_name, password, phone, username];

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
    let queryString = `SELECT password FROM "user" WHERE username=$1;`;
    const value = [username];

    pool.query(queryString, value, (err, result) => {
        if (err) res.status(500).send(err);
        else {
            if (result.rows.length === 0) {
                res.status(500).json({
                    id: null,
                    message: 'Please verify your login credentials. User not found.'
                })
            } else {
                let expectedPassword = result.rows[0].password;
                let userQuery = `SELECT id, first_name, username, points, wins, losses FROM "user" WHERE username=$1 AND password=crypt($2, $3)`
                const values = [username, password, expectedPassword];
                pool.query(userQuery, values, (err, result) => {
                    if (err) res.status(500).send(err);
                    else {
                        if (result.rows.length === 0) {
                            res.json({
                                id: null,
                                message: 'Please verify your login credentials. User not found.'
                            })
                        } else {
                            res.locals['userInfo'] = result.rows[0];
                            next();
                        }
                    }
                })
            }
        }
    });
}

module.exports = authController;
