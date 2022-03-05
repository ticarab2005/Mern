const AuthorController = require("../controllers/author.controller");

module.exports = app =>{
    app.get("/api/author", AuthorController.authorResponse);
    app.get("/api/authors/findAll", AuthorController.findAll);
    app.post("/api/authors/create",AuthorController.createAuthor);
    app.get("/api/authors/:_id",AuthorController.findOneAuthor);
    app.delete("/api/authors/:_id/delete",AuthorController.deleteAuthor);
    app.patch("/api/authors/:_id/update",AuthorController.updateOneAuthor);
}