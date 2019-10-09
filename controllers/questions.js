const express = require("express");
const router = express.Router();

const Question = require("../models/question");




router.post("/", (req, res) => {
	console.log(req.body);
	Question.create(req.body).then(question => {
		res.redirect("/");
	}).catch(error => {
		res.render("new", {errorMessage: error.message});
	});
});

router.delete("/:id", (req, res) => {
	Question.findOneAndDelete({ _id: req.params.id }).then(() => {
		res.redirect("/");
	});
});

router.put("/:id", (req, res) => {
	req.body.ingredients = req.body.ingredients.filter(word => {return word.length > 0});
	Question.findOneAndUpdate({_id: req.params.id}, req.body).then(() => {
		res.redirect(`/${req.params.id}`);
	})
})

router.get("/new", (req, res) => {
	res.render("new");
});

router.get("/", (req, res) => {
	Question.find({}).then(questions => {
		res.render("index", { questions });
	});
});

router.get("/edit/:id", (req, res) => {
	Question.findOne({ _id: req.params.id }).then(questions => {
		res.render("edit", questions);
	});
});

router.get("/:id", (req, res) => {
	Question.findOne({ _id: req.params.id }).then(questions => {
		res.render("show", questions);
	});
});

module.exports = router;