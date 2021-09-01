// connect to database
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Charlie19$',
    database: 'election'
});

module.exports = db;
