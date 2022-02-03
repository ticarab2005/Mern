// our model is going to be how we interact with the information in mongo db
// our model is going to describe what the information in our database is going to look like. 
// What kind of structure it will have, how it will work and now whenever the user or client request something, we can use sunday as an object to our way to talk to the database
// it's going to be the variable we use inside the 
const Test = require("../models/Test.model");

// anything that import that, like the route did, is just this function. 
module.exports.testResponse = (req, res) => {
    res.json({ message: "hey it's me!" })
}

module.exports.findAllTests = (req, res) => {
    // we need to talk to the database and say: give me everything
    Test.find({})
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.createTest = (req, res) => {
    // req.body is whatever json information is sent over from the client
    Test.create(req.body)
        .then(newTest => res.json({ results: newTest }))
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}
// find comes back as an array because it finds anything that matches your query

module.exports.findOneTest = (req, res) => {
    // we need to talk to the database and say: give me everything
    Test.findOne({ _id: req.params._id })
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.deleteTest = (req, res) => {
    // we need to talk to the database and say: give me everything
    Test.deleteOne({ _id: req.params._id })
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.updateOneTest = (req, res) => {
    // update one will take in two parameters. It's going to need a query and it's going to need the data
    // update doesn't validate automatically, so you must put it in your update controller function via object
    Test.updateOne({ _id: req.params._id }, req.body, {runValidators:true})
    .then(results => res.json({ results: results }))
    // whatever the error it might've been, were report back with a status 400 & a json message
    .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}
