const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

app.get("/", function(req, res) {

    let today = new Date();
    let currentDay = today.getDay();
    let day = "";
    
    // 6 stands for Saturday and 0 stands for Sunday
    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend :)";
    } else {
        day = "Weekday :|"
    }

    // Here we render an ejs file called list that exists within the views folder and we pass in the value of the variable kindOfDay with the type of day: weekend or weekday.
    res.render("list", {kindOfDay: day});
});
