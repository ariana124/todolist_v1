const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

app.get("/", function(req, res) {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    // Here we render an ejs file called list that exists within the views folder and we pass in the value of the variable kindOfDay with the type of day: weekend or weekday.
    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res) {

    let item = req.body.newItem;

    items.push(item);
    
    // This will redirect us to our home route and trigger the app.get where it will then render the list template, passing in kindOfDay and newListItem.
    res.redirect("/");
});
