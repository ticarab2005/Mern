const express = require("express");
const app = express();
const port = 8000; 

// allowing our routes to

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api",(req,res)=>{
    // this is like a return
    // this is an object and a key
    console.log("hello from inside the server")
    res.json({message:"hey it's me", someStuff:[4,8,15,16,23,42]})
});

app.get("/api/repeat/:word", (req,res)=>{
    console.log(req.params.word)
    res.json({repeat:req.params.word})
})

app.post("/api/repeat", (req,res)=>{
    // req.body is an object that have keys
    console.log(req.body);
    // your code should not have to res.json
    res.json({message:"received"});
})
// you can make routes with the same Url but you can have different request routes
app.listen(port,()=>console.log(`running on port ${port} is a new way I like to be!!!`));