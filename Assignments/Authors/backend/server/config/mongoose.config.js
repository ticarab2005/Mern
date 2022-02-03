const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/fave_authors", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("yo you're connected to the mongo db!"))
    .catch(err => console.log("beep boop bop db connection was a flop", err))