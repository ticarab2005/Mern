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
    Product.find()
    .then((randProduct) => {
        let count = randProduct.length
        return res.json({
            results: randProduct[Math.floor(Math.random() * count)],
        })
    })
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