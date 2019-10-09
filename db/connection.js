const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/question", { useNewUrlParser: true }, () => {
	console.log("connected");
});

mongoose.Promise = Promise;

module.exports = mongoose;