var express = require("express");
var app = express();

//default route
app.get("/", function(req, res){
    res.render("home.ejs");
    //res.send("<h1>Hi there!</h1><h2>bla bla bla</h2>");
});

//default route
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
    //res.send("<h1>Hi there!</h1><h2>bla bla bla</h2>");
});

//route parameters
app.get("/animal/:name/:number", function(req, res){
    var animal = req.params.name.toLowerCase();
    var number = Number(req.params.number);

    var sounds = {
        pig: "Oink oink",
        cow: "Moooooo",
        dog: "Wau wau"
    }

    var sound = sounds[animal];

    res.send("The " + animal + " says " + sound);
});

//route parameters
app.get("/users/:userId/books/:bookId", function(req, res){
    res.send("WELCOME TO A SUBLINK");
});

//undefined route - must be at end
app.get("*", function(req, res) {
    res.send("Undefined route");
});

//start server, port, ip...
app.listen(3000, function(){
    console.log("Serving demo project!!!")
});