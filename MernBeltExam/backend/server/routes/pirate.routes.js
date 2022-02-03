const PirateController = require("../controllers/pirate.controller");

module.exports = app =>{
    app.get("/api/test", PirateController.pirateResponse);
    app.get("/api/pirates/findAll", PirateController.findAll);
    app.post("/api/pirates/create",PirateController.createPirate);
    app.get("/api/pirates/:_id",PirateController.findOnePirate);
    app.delete("/api/pirates/:_id/delete",PirateController.deletePirate);
    app.patch("/api/pirates/:_id/update",PirateController.updateOnePirate);
}