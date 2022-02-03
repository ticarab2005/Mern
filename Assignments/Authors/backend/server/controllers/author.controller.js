const Author = require("../models/author.model");

module.exports.testResponse = (req, res) => {
    res.json({ message: "hey it's me!" })
}

module.exports.findAllAuthors = (req, res) => {
    Author.find({}).sort([['score',-1]])
        .then(results => res.json({ results: results}))
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({ results: newAuthor }))
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}

module.exports.updateOneAuthor = (req, res) => {
    Author.updateOne({ _id: req.params._id }, req.body, { runValidators: true })
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "that didn't quite work", err }))
}