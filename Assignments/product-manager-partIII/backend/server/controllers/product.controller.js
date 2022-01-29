const Product = require("../models/product.model");

module.exports.testResponse = (req,res) => {
    res.json({message:"hey hey, everything's running!"})
}

module.exports.findAll = (req, res) => {
    Product.find({})
        .then(results => res.json({ results: results }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({ results: newProduct }))
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params._id })
        // as long as it comes through sucessfully, we have .then. 
        // It's kind of like axios, except we're making an axios call to the database, and return the result with res.json
        .then(results => res.json({ results: results }))
        // whatever the error it might've been, were report back with a status 400 & a json message
        .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.deleteProduct = (req,res) =>{
    Product.deleteOne({_id:req.params._id})
    .then(results => res.json({ results: results }))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}

module.exports.updateOneProduct = (req,res) => {
    Product.updateOne({_id:req.params._id},req.body)
    .then(results => res.json({ results: results }))
    .catch(err => res.status(400).json({ message: "ahh ahhhh ahhhh, you didn't say the magic words!", err }))
}