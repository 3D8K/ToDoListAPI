const express = require("express");
const taskController = require("../controllers/TaskController");
const taskRoute = express.Router();

taskRoute.get("/", taskController.taskList);
taskRoute.get("/add", taskController.addTask);
taskRoute.get("/delete", taskController.deleteTask);
taskRoute.get("/change", taskController.changeTask);

module.exports = taskRoute;