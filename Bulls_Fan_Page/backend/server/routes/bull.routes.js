const BullController = require("../controllers/bull.controller");

module.exports = app =>{
    app.get("/api/test", BullController.bullResponse)
    app.get("/api/bulls/findAll", BullController.findAll);
    app.post("/api/bulls/create",BullController.createBull);
    app.get("/api/bulls/:_id",BullController.findOneBull);
    app.delete("/api/bulls/:_id/delete",BullController.deleteBull);
}