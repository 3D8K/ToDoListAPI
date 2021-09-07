const express = require("express");
const taskController = require("../controllers/TaskController");
const {AddTaskController} = require("../controllers/TaskController/AddTaskController");
const {DeleteTaskController} = require("../controllers/TaskController/DeleteTaskController");
const taskRoute = express.Router();

var addTaskController = new AddTaskController;
var deleteTaskController = new DeleteTaskController;

taskRoute.get("/", taskController.taskList);
taskRoute.post("/add", addTaskController.addTask);
taskRoute.post("/delete", deleteTaskController.DeleteTask);
taskRoute.get("/change", taskController.changeTask);

module.exports = taskRoute;