const mongoose = require("mongoose");
const dbname = "_let_me_see_your_manager";

mongoose.connect(`mongodb://127.0.0.1/${dbname}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=>console.log("yo you're connected to the mongo db!"))
    .catch(err=>console.log("beep boop bop db connection was a flop",err))