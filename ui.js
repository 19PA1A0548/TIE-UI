var express=require("express");

var app=express();

app.use(express.static("capstonestatic"));

app.set("view engine","ejs")

app.get("/",function(req,res){
    res.sendFile(__dirname+"/ui.html")
})

app.get("/salaryissue",function(req,res){
    
    var mongojs=require("mongojs");
    var cs="mongodb+srv://mahesh:mahesh@cluster0.qe4fh.mongodb.net/Tie?retryWrites=true&w=majority"
    var db=mongojs(cs,["salaryissue"])
    var d = {};
    db.salaryissue.find(d,function(err,docs){
        if(docs.length==0){
            res.send("please check your username and password");
        }
        else{
            res.render("salaryissue",{data:docs});
        }
    })

})
app.get("/harassmentissue",function(req,res){
    
    var mongojs=require("mongojs");
    var cs="mongodb+srv://mahesh:mahesh@cluster0.qe4fh.mongodb.net/Tie?retryWrites=true&w=majority"
    var db=mongojs(cs,["harassment"])
    var d = {};
    db.harassment.find(d,function(err,docs){
        if(docs.length==0){
            res.send("please check your username and password");
        }
        else{
            res.render("harassment",{data:docs});
        }
    })

})

app.get("/resignationissue",function(req,res){
    
    var mongojs=require("mongojs");
    var cs="mongodb+srv://mahesh:mahesh@cluster0.qe4fh.mongodb.net/Tie?retryWrites=true&w=majority"
    var db=mongojs(cs,["resignation"])
    var d = {};
    db.resignation.find(d,function(err,docs){
        if(docs.length==0){
            res.send("please check your username and password");
        }
        else{
            res.render("resignation",{data:docs});
        }
    })

})

app.listen(3000)