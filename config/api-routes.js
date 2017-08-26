var Member = require("../models/Member");

function routes(app) {
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
}

module.exports = routes;



