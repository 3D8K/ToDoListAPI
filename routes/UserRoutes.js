const express = require("express");
const UserController = require("../controllers/UserController");
const userRoute = express.Router();

userRoute.get("/", UserController.userList);
userRoute.get("/add", UserController.addUser);
userRoute.get("/delete", UserController.deleteUser);
userRoute.get("/change", UserController.changeUser);

module.exports = userRoute;