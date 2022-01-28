// our model is going to be how we interact with the information in mongo db
// our model is going to describe what the information in our database is going to look like. 
// What kind of structure it will have, how it will work and now whenever the user or client request something, we can use sunday as an object to our way to talk to the database
// it's going to be the variable we use inside the db
const Sundae = require("../models/sundae.model");

// anything that import that, like the route did, is just this function. 
module.exports.testResponse = (req, res) => {
    res.json({ message: "hey it's me!" })
}

module.exports.findAllSundaes = (req, res) => {
    // we need to talk to the database and say: give me everything
    Sundae.find({})
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.createSundae = (req, res) => {
    // req.body is whatever json information is sent over from the client
    Sundae.create(req.body)
        .then(newSundae => res.json({ results: newSundae }))
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}
// find comes back as an array because it finds anything that matches your query

module.exports.findOneSundae = (req, res) => {
    // we need to talk to the database and say: give me everything
    Sundae.findOne({ _id: req.params._id })
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.deleteSundae = (req, res) => {
    // we need to talk to the database and say: give me everything
    Sundae.deleteOne({ _id: req.params._id })
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.updateOneSundae = (req, res) => {
    // update one will take in two parameters. It's going to need a query and it's going to need the data
    Sundae.updateOne({ _id: req.params._id }, req.body)
    .then(results => res.json({ results: results }))
    // whatever the error it might've been, were report back with a status 400 & a json message
    .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.addTopping = (req,res) => {
    // tell them what to find, time to give it a query
    Sundae.updateOne({_id:req.params._id},
    // tell it to push something into an array. To do that, you need to give it a full object of instructions
    {$push:{toppings:req.body.topping}})
    .then(results => res.json({ results: results }))
    // whatever the error it might've been, were report back with a status 400 & a json message
    .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}