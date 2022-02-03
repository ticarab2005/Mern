const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "you need a author!!!"],
        minlength: [3, "you need at least 3 characters!"]
    }
}, { timestamps: true })

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;