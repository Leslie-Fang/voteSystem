var mysql = require('mysql');
var config = require('../config.js').databases_config;
//var Promise = require('promise');

exports.validate=function(req, data,res,callback){
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
            //still need to checkout if already vote or not
            callback({state:'hangup'});
        }
    });
    connection.end();
};

//checkout if the user already vote or not
exports.checkoutuniq=function(req, data,res,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    console.log(data);
    connection.query('select * from VOTEDATA where user = ?',data, function(err, result) {
        if (err) throw err;
        if(result.length === 0) {
            //console.log(result);
            res.cookie('user', data, {maxAge: 60*60*1000});
            res.cookie('islogin', 1, {maxAge: 60*60*1000});
            callback({state:'ok'});
        }
        else{
            //console.log(result);
            callback({state:'secondvoter'});
        }
    });
    connection.end();
};

exports.insertSelectItem=function(req, data,res,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    var user = req.cookies.user;
    console.log(user);
    console.log(data);
    var indata = [user,data];
    console.log(indata);
    connection.query('insert into VOTEDATA(user,voteNumber) VALUES (?,?)',[user, data], function(err, result) {
        if (err) {throw err;}
        else{
            console.log(result);
            res.cookie('voted', 1, {maxAge: 60*60*1000});
            callback({insert:'success'});
        }
    });
    connection.end();

};

exports.queryResult=function(req, data,res,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    connection.query('select voteNumber,count(*) as count from VOTEDATA group by voteNumber', function(err, result) {
        if (err) {throw err;}
        else{
           // console.log(result.length);
            console.log(result);
            console.log(result.length);
            console.log(result[0]);
            console.log(result[1]);
            callback(result);
        }
    });
    connection.end();

}


