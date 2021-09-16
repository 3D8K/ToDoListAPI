const express = require("express");
const taskRoute = express.Router();
const {AddTaskController} = require("../controllers/TaskController/AddTaskController");
const {DeleteTaskController} = require("../controllers/TaskController/DeleteTaskController");
const {ViewTaskListController} = require("../controllers/TaskController/ViewTaskListController");
const {CompleteTaskController} = require("../controllers/TaskController/CompleteTaskController");
const {ChangeTaskController} = require("../controllers/TaskController/ChangeTaskController");

var addTaskController = new AddTaskController;
var deleteTaskController = new DeleteTaskController;
var viewTaskListController = new ViewTaskListController;
var completeTaskController = new CompleteTaskController;
var changeTaskController = new ChangeTaskController;

taskRoute.post("/", viewTaskListController.ViewList);
taskRoute.post("/add", addTaskController.addTask);
taskRoute.post("/delete", deleteTaskController.DeleteTask);
taskRoute.post("/complete", completeTaskController.completeTask);
taskRoute.post("/change", changeTaskController.ChangeTask);


module.exports = taskRoute;