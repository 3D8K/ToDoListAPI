const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const database = require("./database/Database");
const userRouter = require("./routes/UserRoutes");
const taskRouter = require("./routes/TaskRotes");

app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/task", taskRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.listen(3000);