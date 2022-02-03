const Pirate = require("../models/pirate.model");

module.exports.pirateResponse = (req,res) => {
    res.json({message:"hey hey, everything's running!"})
}

module.exports.findAll = (req, res) => {
    Pirate.find({})
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json({ results: newPirate }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.findOnePirate = (req, res) => {
    Pirate.findOne({ _id: req.params._id })
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.deletePirate = (req,res) =>{
    Pirate.deleteOne({_id:req.params._id})
    .then(results => res.json({ results: results }))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.updateOnePirate = (req,res) => {
    Pirate.updateOne({_id:req.params._id},req.body)
    .then(results => res.json({ results: results }))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}