const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    // title, score, genre, platform, imgURL, release year, players, numLegs
    title: {
        type: String,
        required: [true, "you need a title!"],
        minLength: [4, "you need at least 4 characters!!"]
    },
    score: {
        type: Number,
        required: [true, "you need a number!"],
        min: 0
    },
    genre: {
        type: String,
        required: [true, "you need a genre"],
        enum: ["adventure", "RPG", "shooter", "tabletop", "mmo", "puzzle", "horror", "platformer", "rougelike", "masochistic", "sandbox", "sports", "indie", "racing", "fighting", "simulation"]
    },
    platform: {
        type: String,
        required: [true, "you need a platform!"],
        minLength: [2, "you need at least 2 characters!!"]
    },
    imgUrl: {
        type: String,
        required: [true, "you need a image!"],
    },
    releaseYear: {
        type: Number,
        required: [true, "you need a release year!"],
        min: [1975, "too early!!"]
    },
    players: {
        type: Number,
        min: [1, "you need at least 1 player!!"]
    },
    numLegs: {
        type: Number,
        min:0
    }
}, { timestamps: true })

const Game = mongoose.model("Game",GameSchema);

module.exports = Game;

