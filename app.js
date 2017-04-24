// Modules
var path       = require("path");
var express    = require("express");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");

// Express object and settings
var app = express();

// Set middleware parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: false}));

// Start server
app.listen(3000);
console.log("Server listening on port 3000 ...");
