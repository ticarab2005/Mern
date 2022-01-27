const mongoose = require("mongoose");

const SundaeSchema = new mongoose.Schema({
    // to pass an object, use {}
    flavor: String,
    numScoops: Number,
    nuts: Boolean,
    toppings:[String],
    customerName: String, 
    name: String
})

// it's telling it to log this like that's a schema
const Sundae = mongoose.model("Sundae", SundaeSchema);

module.exports = Sundae;
// our controller imports models
