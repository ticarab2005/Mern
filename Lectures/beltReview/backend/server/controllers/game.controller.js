// our model is going to be how we interact with the information in mongo db
// our model is going to describe what the information in our database is going to look like. 
// What kind of structure it will have, how it will work and now whenever the user or client request something, we can use sunday as an object to our way to talk to the database
// it's going to be the variable we use inside the db
const Game = require("../models/game.model");

// anything that import that, like the route did, is just this function. 
module.exports.testResponse = (req, res) => {
    res.json({ message: "hey it's me!" })
}

module.exports.findAllGames = (req, res) => {
    // we need to talk to the database and say: give me everything
    Game.find({}).sort([['score',-1]])
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results}))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.createGame = (req, res) => {
    // it's going to definitively be equal to 0
    req.body.score = 0;
    // req.body is whatever json information is sent over from the client
    Game.create(req.body)
        .then(newGame => res.json({ results: newGame }))
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}
// find comes back as an array because it finds anything that matches your query

module.exports.findOneGame = (req, res) => {
    // we need to talk to the database and say: give me everything
    Game.findOne({ _id: req.params._id })
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.deleteGame = (req, res) => {
    // we need to talk to the database and say: give me everything
    Game.deleteOne({ _id: req.params._id })
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.updateOneGame = (req, res) => {
    // update one will take in two parameters. It's going to need a query and it's going to need the data
    Game.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.upvoteGame = (req, res) => {
    Game.findOneAndUpdate({ _id: req.params._id }, { $inc: { score: 1 } }, { new: true })
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}