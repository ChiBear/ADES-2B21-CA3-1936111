const mysql = require('mysql2');

const pool = mysql.createPool({
    //Change to your own one    
    connectionLimit: 10,
    host: "us-cdbr-east-04.cleardb.com",
    user: "b6e05cec84f34e",
    password: "ff7b7821",
    database: "heroku_18ab3a72081d060",
    multipleStatements: true,
    timezone: 'utc'
});

module.exports = pool;
