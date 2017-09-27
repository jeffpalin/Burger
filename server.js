var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give server access

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Server status

app.listen(port, function() {
    console.log("Listening on PORT " + port);
});