// this is where we import and initialize 
const express = require("express");
// this is an import assigned to a variable
const app = express();
// what gets imported from the express package can run like a function, and it returns back a variable that you can now use to manipulate, change, and define your server in general
const port = 8000;
// we cannot use 3000 port because react runs on it

// the middle is where we will put all our routes
// get routes are when it's url was accessed and is expecting to receive some type of respond. 
// get routes accepts 2 parameters: a string that defines what's the route, and an anonymous function defining what to do when this route is access
// the two parameters are request and respond. Request always comes first
app.get("/api", (req,res)=>{
    // when you refresh, you're contacting the server
    console.log("hello from inside the server!");
    // res.json is like a return. Here's where we send information back to the client. It just needs an object
    // anything that works as a javascript object will work here
    // make sure that you're passing an object
    res.json({message:"hey it's me!", someStuff:[4,8,15,16,23,45]});

})

// app.get("/api/repeat/")

// the bottom will be app.listen
// a server runs forever until you tell it to stop
// app.listen as a function can accept a second perameter, which is a callback function(anonymous function) defining what to do when this route is accessed
app.listen(port, ()=>console.log(`running on port ${port} is a new way I like to be!!!`));

