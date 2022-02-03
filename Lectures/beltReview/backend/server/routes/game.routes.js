// ../ because it's go out of the folder into a different folder
// the route is going to pull in the controller
const GameController = require("../controllers/game.controller");

// if you want to import different files for your project, you use module.exports. We're exporting this file like a function
// It's a function that takes in the app inself, and makes declarations about the routes and the request types on your server 

module.exports = app =>{
    // game controller has testResponse, this is the function you should run when this route is accessed
    app.get("/api/test", GameController.testResponse);
    // if we wanted different routes, just add it line by line
    app.get("/api/games/findAll/", GameController.findAllGames);
    // we're creating something, that's what post request is for
    app.post("/api/games/create/", GameController.createGame);
    // you can have the same route name, as long as it's a different request, but try not to. So you can differentiate your route
    app.get("/api/games/:_id", GameController.findOneGame);
    app.delete("/api/games/:_id/delete", GameController.deleteGame);
    // patch is used to changed the data
    app.patch("/api/games/:_id/update", GameController.updateOneGame);
    // adding to an array. a put route is going to take in some post information(json information) with what you want to add
    // it's going to update one at a time

    app.patch("/api/games/:_id/upvote", GameController.upvoteGame)
    // put is putting new info somewhere, patch is adjusting info. It's only different as a concept
}