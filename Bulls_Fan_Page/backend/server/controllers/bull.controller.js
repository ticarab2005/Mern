const Bull = require("../models/bull.model");

module.exports.bullResponse = (req,res) =>{
    res.json({message:"hey hey, everything is running!"})
}

module.exports.findAll = (req,res) =>{
    Bull.find({})
    .then(results => res.json({results}))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.createBull = (req, res) => {
    Bull.create(req.body)
        .then(newBull => res.json({ results: newBull }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.findOneBull = (req, res) => {
    Bull.findOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.deleteBull = (req,res) =>{
    Bull.deleteOne({_id:req.params._id})
    .then(results => res.json({ results: results }))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

