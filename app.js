const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Reading Progress", "Udemy Course", "Art Concepts"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

app.get("/", function(req, res) {

    let day = date.getDate();

    // Here we render an ejs file called list that exists within the views folder and we pass in the value of the variable kindOfDay with the type of day: weekend or weekday.
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {

    console.log(req.body);

    let item = req.body.newItem;

    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
    // res.redirect("/") redirects us to our home route and trigger the app.get where it will then render the list template, passing in listTitle and newListItem.
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {

    let item = req.body.newItem;

    workItems.push(item);

    res.redirect("/");
});

app.get("/about", function(req, res) {
    res.render("about");
});
