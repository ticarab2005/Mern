const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [6, "First name must be at least 6 character long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [6, "Last name must be at least 6 character long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [6, "Email must be at least 6 character long"]
    },
    password: {
        type: Number,
        required: [true, "Password is required"],
        min: [5, "Password must be at least 6 character long"]

    },
    confirmPW: {
        type: String,
        required: [true, "Confirm Password name is required"],
        minlength: [6, "Confirm Password must match password!"]
    }
},{timestamps:true})

const User = mongoose.model("User", UserSchema);

module.exports = User;