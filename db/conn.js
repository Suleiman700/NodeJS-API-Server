const mysql = require('mysql2');
const { ENV } = require('../src/CONFIG/ENV-CONF');

// Create a connection to the database
const conn = mysql.createConnection({
    host: ENV.DB.HOST,
    user: ENV.DB.USER,
    password: ENV.DB.PASS,
    database: ENV.DB.NAME
});

// Connect to the database
conn.connect(function(error) {
    if (error) {
        console.error('Error connecting: ' + error.stack);
        return;
    }
    console.log('Connected to the database as id ' + conn.threadId);
});

module.exports = conn