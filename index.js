const express = require("express");
const parser = require("body-parser");
const app = express();
const methodOverride = require("method-override");



app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "hbs");


const qController = require("./controllers/questions");
app.use("/", qController);

app.listen(3000, () => {
	console.log("running on port 3000!");
});