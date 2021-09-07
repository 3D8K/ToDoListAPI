const express = require("express");
const userRoute = express.Router();
const {NewUserController} = require("../controllers/AddUserController");

var userController = require("../controllers/UserController");
userController = new userController.UserController();

var newUserController = new NewUserController();

userRoute.get("/", userController.userList);
userRoute.post("/add", newUserController.addUser);
userRoute.get("/delete", userController.deleteUser);
userRoute.get("/change", userController.changeUser);

module.exports = userRoute;