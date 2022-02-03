// ../ because it's go out of the folder into a different folder
// the route is going to pull in the controller
const TestController = require("../controllers/test.controller");

// if you want to import different files for your project, you use module.exports. We're exporting this file like a function
// It's a function that takes in the app inself, and makes declarations about the routes and the request types on your server 

// ** If you receive and error:Route.put() requires a callback function, but got a [object Undefined] means it's missing something from the controller **
// ** Because that function doesn't exist, it's passing undefined. Our .put message is saying you have to give me a function

module.exports = app =>{
    // sundae controller has TestResponse, this is the function you should run when this route is accessed
    app.get("/api/test", TestController.testResponse);
    // if we wanted different routes, just add it line by line
    app.get("/api/tests/findAll/", TestController.findAllTests);
    // we're creating something, that's what post request is for
    app.post("/api/tests/create/", TestController.createTest);
    // you can have the same route name, as long as it's a different request, but try not to. So you can differentiate your route
    app.get("/api/tests/:_id", TestController.findOneTest);
    app.delete("/api/tests/:_id/delete", TestController.deleteTest);
    // patch is used to changed the data
    app.patch("/api/tests/:_id/update", TestController.updateOneTest);
    // adding to an array. a put route is going to take in some post information(json information) with what you want to add
    // it's going to update one at a time
}