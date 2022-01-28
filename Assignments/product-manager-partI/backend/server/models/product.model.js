const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title name is required"],
        minlength: [6, "Title name must be at least 6 character long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [100, "Price must be more than $100"]

    },
    description: {
        type: String,
        required: [true, "Title name is required"],
        minlength: [6, "Title name must be at least 6 character long"]
    }
},{timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;