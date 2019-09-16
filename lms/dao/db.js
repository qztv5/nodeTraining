var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'library.cbaxpbusjdjz.us-east-1.rds.amazonaws.com',
    user     : process.env.DBUN,
    password : process.env.DBPASS,
    database : 'library',
    port     : 3305
});

module.exports = connection;