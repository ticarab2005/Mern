const mongoose = require("mongoose");
const dbname = "jokes_on_you";

mongoose.connect(`mongodb://127.0.0.1/${dbname}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=>console.log("heyo, you're connected to mongo db!"))
    .catch(err=>console.log("beep boop bop db connection was a flop",err))