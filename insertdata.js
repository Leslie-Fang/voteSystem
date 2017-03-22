var mysql = require('mysql');
var config = require('./config.js').databases_config;

var connection = mysql.createConnection(config);
connection.connect();
connection.query('INSERT INTO VOTEDATA (user,voteNumber) values (\'leslie\',10) ;', function(err, result) {
    if (err) throw err;
    if(result != null)
    {
        data = result;
        console.log(data);

        // connection.query('CREATE TABLE VOTEDATA (user VARCHAR(10),voteNumber INT) ;',function(err, result){
        //});
    }});

connection.end();