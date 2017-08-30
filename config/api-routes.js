var Member = require("../models/Member");
var Trainer = require("../models/Trainer");

function routes(app) {
    app.post("/api-member", function(req, res){
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

    app.post("/api-trainer", function(req, res){
        console.log("BODYtRAINER: " + req.body);

        var trainer = new Trainer(req.body);
        trainer.save(function(err){
            if(err){
                console.log(err);
            }
            else{
                res.send("test2");
            }
        })
    })

    app.get("/api-trainer/:zip", (req, res) =>{
        var zipcode = req.params.zip;
        console.log(zipcode);
        Trainer.find({
            zip: zipcode
        }).then((response) => {
            console.log(response);
            res.json(response);
        })
    })
}

module.exports = routes;



