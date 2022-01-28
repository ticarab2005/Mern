// ../ because it's go out of the folder into a different folder
// the route is going to pull in the controller
const SundaeController = require("../controllers/sundae.controller");
const Sundae = require("../models/sundae.model")

// if you want to import different files for your project, you use module.exports. We're exporting this file like a function
// It's a function that takes in the app inself, and makes declarations about the routes and the request types on your server 

module.exports = app =>{
    // sundae controller has testResponse, this is the function you should run when this route is accessed
    app.get("/api/test", SundaeController.testResponse);
    // if we wanted different routes, just add it line by line
    app.get("/api/sundaes/findAll/", SundaeController.findAllSundaes);
    // we're creating something, that's what post request is for
    app.post("/api/sundaes/create/", SundaeController.createSundae);
    // you can have the same route name, as long as it's a different request, but try not to. So you can differentiate your route
    app.get("/api/sundaes/:_id", SundaeController.findOneSundae);
    app.delete("/api/sundaes/:_id/delete", SundaeController.deleteSundae);
    // patch is used to changed the data
    app.patch("/api/sundaes/:_id/update", SundaeController.updateOneSundae);
    // adding to an array. a put route is going to take in some post information(json information) with what you want to add
    // it's going to update one at a time
    app.put("/api/sundaes/:_id/addTopping/", SundaeController.addTopping);

}