const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [4, "Name must be at least 6 character long"]
    },

    imgUrl: {
        type: String,
        required: [true, "image Url is required"],
        minlength: [6, "image Url must be at least 6 character long"]
    },

    treasureChest: {
        type: Number,
        required: [true, "Treasure chest is required"],
        min: [2, "You gotta have treasure to be a pirate 🏴‍☠️"]
    },

    crewPosition: {
        type: String,
        required: [true, "you need a crew position"],
        enum: ["Captain","First Mate", "Quarter Master", "Boatswain", "Powder Monkey", "Gunner", "Sailing Master", "Cooks", "Surgeon","Captain"]
    },

    pirateCatchPhrase: {
        type: String,
        required: [true, "Must have a pirate catch phrase"],
        minlength: [6, "How can you be a pirate without a catch phrase? 🤦‍♀️"]
    },
    pegLeg:{
        type:Boolean,
        required:[false]
    },
    eyePatch:{
        type:Boolean,
        required:[false]
    },
    hookHand:{
        type:Boolean,
        required:[false]
    }

}, { timestamps: true })

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;