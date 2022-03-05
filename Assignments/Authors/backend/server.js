const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.get("/api", (req,res)=>{
    res.json({message:"hey itsa me, Mario!"})
})

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/author.routes")(app);

app.listen(8000, () => console.log(`running on port ${port} is blowing my mind`));