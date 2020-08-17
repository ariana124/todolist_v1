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
    
    switch (currentDay) {
        case 0 :
            day = "Sunday :)";
            break;
        case 1 :
            day = "Monday :/";
            break;
        case 2 :
            day = "Tuesday :|";
            break;
        case 3 :
            day = "Wednesday :|";
            break;
        case 4 :
            day = "Thursday :|";
            break;
        case 5 :
            day = "Friday :)";
            break;
        case 6 :
            day = "Saturday :)";
            break;
        default:
            console.log(`Error: current day is ${currentDay}`);
    }

    // Here we render an ejs file called list that exists within the views folder and we pass in the value of the variable kindOfDay with the type of day: weekend or weekday.
    res.render("list", {kindOfDay: day});
});
