const express = require("express");
// app is very important. Everything tha twe do to adjust and change our server in whatever ways, it uses app
const app = express();
const port = 8000;
const cors = require("cors")
app.use(cors())

// give the route your callback
app.get("/api", (req, res)=> {
    res.json({message:"hey it's me, the server!"});
});


// this is importing the mongoose file
require("./server/config/mongoose.config");

// import for supporting post request and json. The client sends over json
app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/game.routes")(app);



app.listen(8000,()=>console.log(`running on port ${port} is stupid`));