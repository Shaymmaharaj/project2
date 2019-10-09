const question = require("../models/question"); //grab todo.js
const seeds = require("./seed.json");

question.deleteMany({})
	.then(() => {
		return question.insertMany(seeds);
	})
	.then(() => {
		console.log("Data inserted");
		process.exit();
	});