const mongoose = require("mongoose");

const BullSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:[true,"Must hava a username"],
        minlength:[4, "Username must hava at least 4 characters"]
    },
    comment: {
        type: String,
        required: [true, "Must make a comment"],
        minlength: [5, "Comment must have a least 5 characters!"]
    }
},{timestamps:true})

const Bull = mongoose.model("Bull", BullSchema);

module.exports = Bull;
