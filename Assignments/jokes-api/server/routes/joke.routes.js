const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/joke.model");

module.exports = app =>{
    app.get("/api/test", JokeController.testResponse);
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes/create/",JokeController.createJoke);
    app.get("/api/jokes/random", JokeController.findRandJoke);
    app.delete("/api/jokes/:_id/delete",JokeController.deleteJoke)
    app.patch("/api/jokes/:_id/update", JokeController.updateOneJoke);
}

