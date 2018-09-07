// require NPM's
var express = require("express");
var bodyParser = require("body-parser");

// If available, use Heroku assigned port. Otherwise, use port 3030.
var PORT = process.env.PORT || 3030;

var app = express();

// serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgers_controller");

app.use(routes);

// start server to begin listening to client requests
app.listen(PORT, function() {
  // log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
