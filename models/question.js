const mongoose = require("../db/connection");

const QuestionSchema = new mongoose.Schema({
    question: String,
    answers: {type: [String], required: true}
});



const Question = mongoose.model("question", QuestionSchema);

module.exports = Question;

