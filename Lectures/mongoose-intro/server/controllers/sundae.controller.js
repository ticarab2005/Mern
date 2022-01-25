const Sundae = require("../models.sundae.model");

module.exports.testResponse = (req,res) =>{
    res.json({message:"hey it's me!"})
}