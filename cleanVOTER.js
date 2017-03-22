var mysql = require('mysql');
var config = require('./config.js').databases_config;

var connection = mysql.createConnection(config);
connection.connect();

var data = {};
connection.query('DELETE FROM VOTER ;', function(err, result) {
    if (err) throw err;
    if(result != null)
    {
        data = result;
        console.log(data);
    }});
connection.end();