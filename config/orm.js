var connection = require("../config/connection.js");

var orm = {

  all: function(tableInput, cb){
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(newBurger, cb){
    var queryString = "Insert into burgers (burger) values (?);";
    connection.query(queryString, [newBurger],  function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: function(id, cb){
    var queryString= "update burgers set devoured = 1 where id = ?;";
    connection.query(queryString, [id],  function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  },

  delete: function(id, cb){
    var queryString= "delete from burgers where id = ?;";
    connection.query(queryString, [id],  function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

  }


}


module.exports = orm;