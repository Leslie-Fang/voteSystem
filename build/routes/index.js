var express=require("express"),router=express.Router(),user=require("./user.js"),my=require("../databases/mysql_api");router.get("/",function(e,o){o.render("main")}),router.use("/voter",function(e,o,r){e.cookies.voted?(console.log("Already voted!"),console.log(e.cookies.voted),o.redirect("/")):e.cookies.islogin?r():(console.log("Not login!"),console.log(e.cookies.islogin),o.redirect("/"))}),router.get("/voter",function(e,o){o.render("voter")}),router.get("/leave",function(e,o){o.render("leave")}),router.post("/login",function(e,o,r){console.log(e.param("code"));var n=e.param("code");my.validate(e,n,o,function(e){if(console.log(e),console.log("In callback!"),"novoter"==e.state)return o.send(e);r()})},function(e,o){console.log("checkout again!"),console.log(e.param("code"));var r=e.param("code");my.checkoutuniq(e,r,o,function(e){return console.log(e),console.log("In callback!"),o.send(e)})}),router.post("/submitItem",function(e,o){console.log(e.param("selectItem"));var r=e.param("selectItem");my.insertSelectItem(e,r,o,function(e){return console.log(e),console.log("In callback!"),o.send(e)})}),router.post("/queryresult",function(e,o){console.log(e.param("type"));var r=e.param("type");my.queryResult(e,r,o,function(e){return console.log(e),console.log("In callback!"),o.send(e)})}),router.use("/user",user),module.exports=router;