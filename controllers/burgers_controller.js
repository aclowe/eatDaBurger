var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("BURGER: ", req.body.burger_name)
  burger.insertOne(
    ['burger_name', 'devoured'],
    [req.body.burger_name, 0],
    function(result) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.post("/api/burgers/:id", function(req, res) {
  console.log("HIT BACK END **************************")
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.redirect("/");
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
