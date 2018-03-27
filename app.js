var express = require("express");
var app = express();

// Serve static files
app.use(express.static('./'))

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);