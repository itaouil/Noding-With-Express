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

// About page
app.get("/contact", function(req, res) {
  res.render("contact");
});

// Contact post request
app.get("contact/send", function(req, res) {

  var transporter = nodemailer.createTranport({
    "service": "gmail",
    "auth": {
      "user": "<your-mail>",
      "pass": "<your-pass>"
    };
  });

  var mailOptions = {
    "from": "",
    "to": "",
    "subject": "use your fantasy",
    "text": "make use of post and req body parser",
    "html": "like text but with html tags"
  };

  // Send mail
  transporter.sendMail(mailOptions, function(error, info) {

    if (error) {
      console.log(error);
      res.redirect("/");
    }

    else {
      console.log("Email sent", info);
      res.redirect("/");
    }

  });

});

// Start server
app.listen(3000);
console.log("Server listening on port 3000 ...");
