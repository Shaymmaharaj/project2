const mongoose = require("../db/connection");

const QuestionSchema = new mongoose.Schema({
    question: String,
    answer: [String]
});



const Question = mongoose.model("question", QuestionSchema);

module.exports = Question;