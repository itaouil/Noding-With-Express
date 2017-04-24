// Modules
var path       = require("path");
var express    = require("express");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");

// Express object and settings
var app = express();

// Set view and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Set middleware parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: false}));
app.use(express.static(path.join(__dirname, "public")));

// Homepage
app.get("/", function(req, res) {
  res.render("index");
});

// About page
app.get("/about", function(req, res) {
  res.render("about");
});

// Start server
app.listen(3000);
console.log("Server listening on port 3000 ...");
