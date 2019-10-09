const { Pool, Client } = require("pg");

require("dotenv").config();

const connectionString = process.env.URL;

const pool = new Pool({
    connectionString: connectionString
});

// let enableEncryptionQuery = "IF NOT EXISTS CREATE EXTENSION pgcrypto;";
// pool.query(enableEncryptionQuery, (err, result) => {
//     if (err) throw new Error(err);
// })

module.exports = pool;
