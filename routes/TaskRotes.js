const express = require("express");
const taskRoute = express.Router();
const {AddTaskController} = require("../controllers/TaskController/AddTaskController");
const {DeleteTaskController} = require("../controllers/TaskController/DeleteTaskController");
const {ViewTaskListController} = require("../controllers/TaskController/ViewTaskListController");

var addTaskController = new AddTaskController;
var deleteTaskController = new DeleteTaskController;
var viewTaskListController = new ViewTaskListController;

taskRoute.post("/", viewTaskListController.ViewList);
taskRoute.post("/add", addTaskController.addTask);
taskRoute.post("/delete", deleteTaskController.DeleteTask);
//taskRoute.get("/change", taskController.changeTask);

module.exports = taskRoute;