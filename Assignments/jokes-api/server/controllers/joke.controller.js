const Joke = require("../models/joke.model");

module.exports.testResponse = (req, res) => {
    res.json({ message: "hey itsa me, Mario!" })
}

module.exports.findAllJokes = (req, res) => {
    Joke.find({})
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ results: newJoke }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.findRandJoke = (req, res) => {
    Joke.find()
    .then((randJoke) => {
        let count = randJoke.length
        return res.json({
            results: randJoke[Math.floor(Math.random() * count)],
        })
    })
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.deleteJoke = (req,res) =>{
    Joke.deleteOne({_id:req.params._id})
    .then(results => res.json({ results: results }))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.updateOneJoke = (req,res) => {
    Joke.updateOne({_id:req.params._id},req.body)
    .then(results => res.json({ results: results }))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}