var express = require("express");
var router = express.Router();

//Importing the model (burger.js) to use its DB functions
var burger = require("../models/burger.js");

//Creating routes and setting up logic
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
		
	burger.insertOne([
		"burger_name" 
	], [
		req.body.burger_name
	], function(data) {
    	res.redirect('/');
	});
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	burger.updateOne({
    	devoured: true
  	}, condition, function(data) {
    	res.status(200).end();
  });
});
module.exports = router;