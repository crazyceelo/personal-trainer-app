import Member from "../models/Member";
import express from "express";

var app = express();

app.post("/api", function(req, res){
    console.log("BODY: " + req.body);

    var member = new Member(req.body);
    member.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            res.send("test");
        }
    })
})

