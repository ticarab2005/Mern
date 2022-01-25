const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/ice_ice_cream_baby", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("yo you're connected to the mong db!"))
    .catch(err=>console.log("beep boop bop, db connection was a flop",err))