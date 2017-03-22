var mysql = require('mysql');
var config = require('./config.js').databases_config;

var values = [
];
for(var i =0;i<600;i++)
{
    var id =[];
    id.push(Math.random().toString(36).substr(2,5));
    console.log(id);
    values.push(id);
}
console.log(values);

var sql = "INSERT INTO VOTER (ID) VALUES ?";
var connection = mysql.createConnection(config);
connection.connect();
connection.query(sql,[values],function(err, result) {
    if (err) throw err;
    if(result != null)
    {
        data = result;
        console.log(data);
    }});

connection.end();