const ProductController = require("../controllers/product.controller");

module.exports = app =>{
    app.get("/api/test", ProductController.testResponse);
    app.get("/api/products/findAll", ProductController.findAll);
    app.post("/api/products/create",ProductController.createProduct);
    app.get("/api/products/:_id",ProductController.findOneProduct);
    app.delete("/api/products/:_id/delete",ProductController.deleteProduct);
    app.patch("/api/products/:_id/update",ProductController.updateOneProduct);
}