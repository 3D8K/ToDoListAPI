const express = require("express");
const userRoute = express.Router();
const {NewUserController} = require("../controllers/UserControllers/AddUserController");
const {DeleteUserController} = require("../controllers/UserControllers/DeleteUserController");
const {GetUserInfoController} = require("../controllers/UserControllers/GetUserInfoController");
const {ChangeUserController} = require("../controllers/UserControllers/ChangeUserController");


var newUserController = new NewUserController;
var deleteUserController = new DeleteUserController;
var getUserInfoController = new GetUserInfoController;
var changeUserController = new ChangeUserController;


//userRoute.post("/", userController.userList);
userRoute.post("/add", newUserController.addUser);
userRoute.post("/get_info", getUserInfoController.getInfo);
userRoute.post("/delete", deleteUserController.DeleteUser);
userRoute.post("/change", changeUserController.ChangeUser);

module.exports = userRoute;