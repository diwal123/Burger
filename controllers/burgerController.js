var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {

    res.render("index",{burger: data});
  });
});


router.post("/api/burgers/", function(req, res) {
  
  burger.create(req.body.burger,  function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/", function(req, res) {
 
  burger.update(req.body.id,  function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
   console.log(result.affectedRows+ "Affected");
  });
});

router.delete("/api/burgers/", function(req, res) {
 
  burger.delete(req.body.id,  function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
   console.log(result.affectedRows+ "Affected");
  });
});

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update(
//     {
//       sleepy: req.body.sleepy
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;
