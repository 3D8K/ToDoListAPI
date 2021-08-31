const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const database = require("./database/Database");
const userRouter = require("./routes/UserRoutes");
const taskRouter = require("./routes/TaskRotes");

app.use("/users", userRouter);
app.use("/task", taskRouter);

let db = new database.connection();

var models = require('./models_auto/init-models');
models = models.initModels(db);
db.sync();
models.users.findAll().then(user => {console.log(user)})

app.use(function (req, res, next) {
    res.status(404).send("Not Fodund")
});

app.listen(3000);