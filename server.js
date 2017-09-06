var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var routes = require("./config/api-routes");

// Server configuration
var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("public"));

// MongoDB configuration
mongoose.connect("mongodb://localhost/personal-trainer-app");
mongoose.connect("mongodb://heroku_vwl6sx5c:ee8db3m3o8nbgjnkftgienn1ui@ds121674.mlab.com:21674/heroku_vwl6sx5c");
var db = mongoose.connection;

db.on("error", function(error){
    console.log("Mongoose Error: ", error);
});

db.once("open", function(){
    console.log("Mongoose connection successful.");
})

routes(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})

