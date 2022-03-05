const Author = require("../models/author.model");

module.exports.authorResponse = (req,res) => {
    res.json({message:"hey hey, everything's running!"})
}

module.exports.findAll = (req, res) => {
    Author.find({}).sort([['type',-1]])
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({ results: newAuthor }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.deleteAuthor = (req,res) =>{
    Author.deleteOne({_id:req.params._id})
    .then(results => res.json({ results: results }))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.updateOneAuthor = (req,res) => {
    Author.updateOne({_id:req.params._id},req.body,{runValidators:true})
    .then(updateOneAuthor => res.json({ results: updateOneAuthor }))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}
