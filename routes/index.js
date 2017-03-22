var express = require('express');
var router = express.Router();
var user = require('./user.js');
var my=require('../databases/mysql_api');

router.get('/',function(req,res){
	res.render('main');
});

router.get('/amain',function(req,res){
    res.render('amain');
});

router.get('/voter',function(req,res){
    res.render('voter');
});

router.get('/leave',function(req,res){
    res.render('leave');
});


router.post('/login', function(req, res, next) {
    console.log(req.param('code'));
    var data = req.param('code');
    my.validate(req,data,function(queryData){
        console.log(queryData);
        console.log('In callback!');
        //didn't find the user return novoter
        if(queryData.state == 'novoter')
        {
            return res.send(queryData);
        }
        else{
            //find the user ,then goto next to check if he has voter or not
            next();
        }
       // return res.send(queryData);
    });
},function(req, res){
    console.log('checkout again!');
    console.log(req.param('code'));
    var data = req.param('code');
    my.checkoutuniq(req,data,function(queryData){
        console.log(queryData);
        console.log('In callback!');
        //didn't find the user return novoter
        return res.send(queryData);
    });
});


router.post('/submitItem', function(req, res) {
    console.log(req.param('selectItem'));
    var data = req.param('selectItem');
    my.insertSelectItem(req,data,function(queryData){
        console.log(queryData);
        console.log('In callback!');
        return res.send(queryData);
    });
});



router.use('/user',user);

module.exports = router;