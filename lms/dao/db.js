var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '70.183.1.146',
    user     : process.env.DBUN,
    password : process.env.DBPASS,
    database : 'library'
});

module.exports = connection;