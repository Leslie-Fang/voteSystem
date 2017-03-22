var mysql = require('mysql');
var config = require('../config.js').databases_config;
//var Promise = require('promise');

exports.validate=function(req, data,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    console.log(data);
    connection.query('select * from VOTER where ID = ?',data, function(err, result) {
        if (err) throw err;
        if(result.length === 0) {
            //console.log(result);
            callback({state:'novoter'});
        }
        else{
            //console.log(result);
            callback({state:'ok'});
        }
    });
    connection.end();
};

//checkout if the user already vote or not
exports.checkoutuniq=function(req, data,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    console.log(data);
    connection.query('select * from VOTEDATA where user = ?',data, function(err, result) {
        if (err) throw err;
        if(result.length === 0) {
            //console.log(result);
            callback({state:'ok'});
        }
        else{
            //console.log(result);
            callback({state:'secondvoter'});
        }
    });
    connection.end();
};

exports.insertSelectItem=function(req, data,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    console.log(data);
    connection.query('insert into VOTEDATA(voteNumber) VALUES (?)',data, function(err, result) {
        if (err) {throw err;}
        else{
            console.log(result);
            callback({insert:'success'});
        }
       // console.log(result);
       /* if(result.length === 0) {
            //console.log(result);
            callback({state:'ok'});
        }
        else{
            //console.log(result);
            callback({state:'secondvoter'});
        }*/
    });
    connection.end();

}


