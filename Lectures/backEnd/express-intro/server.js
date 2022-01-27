//* this is where we import and initialize* 
const express = require("express");
// this is an import assigned to a variable
const app = express();
// what gets imported from the express package can run like a function, and it returns back a variable that you can now use to manipulate, change, and define your server in general
const port = 8000;
// we cannot use 3000 port because react runs on it

// these two codes are allowing our routes to accept json information
app.use(express.json());
// make sure you do this before adding a post route
app.use(express.urlencoded({extended:true}));

// *the middle is where we will put all our routes*
// going to a url in your browser is implicitly just a get request
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
// a routing parameter is just like we do in our react front end.
app.get("/api/repeat/:word", (req,res)=>{
    // if you want to access our routing parameter, then we use request(word is your variable)
    console.log(req.params.word)
    res.json({repeat:req.params.word})
})

// to declare a post route it's going to be similar
// It's going to repeat back whatever comes through as json information rather than url.
// to make a post request in our browser, we're going to need to write code on our front-end to do that
// to build our own servers and test them out, we're going to use this software called postman
app.post("/api/repeat/", (req,res)=>{
    // req.body is the full javascript object of whatever the client is sent over as information. req.body how you take from the post request
    console.log(req.body)
    // make sure you're sending something back that'll let you know it works
    res.json({repeat:req.body});
    // your code should not hit two res.json. You can't include it
    // res.json({repeat:"hey there!"})
    // the console.log will console log the name only, and res.json will send back the entire object as a whole
})

// the bottom will be app.listen
// a server runs forever until you tell it to stop
// app.listen as a function can accept a second perameter, which is a callback function(anonymous function) defining what to do when this route is accessed
app.listen(port, ()=>console.log(`running on port ${port} is a new way I like to be!!!`));

