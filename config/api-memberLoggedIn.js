var Member = require("../models/Member");
var passport = require("passport");



function loggedIn(app){
    app.get("/api-member", function(req, res, next){
        res.render("index", {title: "Express"});
    });

    app.get("/api-member", function(req, res, next){
        res.render("index", { message: req.flash("loginMessage")
    });
    });
}

module.exports = loggedIn;