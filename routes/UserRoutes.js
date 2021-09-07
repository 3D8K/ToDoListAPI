const express = require("express");
const userRoute = express.Router();
const {NewUserController} = require("../controllers/UserControllers/AddUserController");
const {DeleteUserController} = require("../controllers/UserControllers/DeleteUserController");

var userController = require("../controllers/UserController");
const {GetUserInfoController} = require("../controllers/UserControllers/GetUserInfoController");
userController = new userController.UserController();

var newUserController = new NewUserController;
var deleteUserController = new DeleteUserController;
var getUserInfoController = new GetUserInfoController;

userRoute.post("/", userController.userList);
userRoute.post("/add", newUserController.addUser);
userRoute.post("/get_info", getUserInfoController.getInfo);
userRoute.post("/delete", deleteUserController.DeleteUser);
userRoute.get("/change", userController.changeUser);

module.exports = userRoute;