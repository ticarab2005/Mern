const mongoose = require("mongoose");
// row is called a document in mongoose

const TestSchema = new mongoose.Schema({
    artist: {
        type:String,
        required: [true, "you need an artist!"],
        minLength: [3,"you need at least 3 characters!"]
    },
    TestName: {
        type:String,
        required: [true,"you need an Test name"],
        minLength: [3, "you need at least 3 character"]
    },
    releaseYear:{
        type:Number,
        required: [true,"when did it come out?"],
        validate: {
            // use this if you have specific validations
            validator:(input) =>{
                // Input is what the user gave, return true for valid, false for not valid
                return input >= 1980 && input <= 1989
            },
            message:"80s Test only"
        }
    }
},{timestamps:true})
// ⬆ this is how you pass in settings, adjustments, and specifications. This is passing in an object with keys and values that are specified in mongoose and express documentation.
// ⬆ adding in timestamp:true will add timestamps to our data model

// give it a string as the first argument(when you're passing in the literal data so when you calling a function, you're passing an argument)
// when you're actually writing out the code of a function it's a parameter
const Test = mongoose.model("Test", TestSchema);

module.exports = Test;