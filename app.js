const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

app.get("/", function(req, res) {

    let today = new Date();
    let currentDay = today.getDay();
    
    // 6 stands for Saturday and 0 stands for Sunday
    if (currentDay === 6 || currentDay === 0) {
        res.send("<h1>Yee it's the weekend.</h1>");
    } else {
        res.send("<h1>Booo it's not the weekend</h1>");
    }
});
