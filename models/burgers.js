// import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

// var to hold DB functions
var burger = {
  // function to view all burgers in DB
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // function to add burer to DB
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // function to change value of "devoured" from "false" to "true"
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", {devoured: true}, condition, function(res) {
      cb(res);
    });
  },
};

// export DB functions for the controller
module.exports = burger;
