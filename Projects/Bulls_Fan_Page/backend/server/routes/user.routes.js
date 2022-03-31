const userController = require("../controllers/user.controller");
const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    //admin routes for viewing all users in system and deleting users accounts
    app.get("/api/users", UserController.getAllUsers)
    app.post("/api/users/register", UserController.register)
    app.post("/api/users/login", UserController.login)
    app.get("/api/users/getloggedinuser", userController.getLoggedInUser)
    app.get("/api/users/logout", userController.logout)
}