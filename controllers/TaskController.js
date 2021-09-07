exports.taskList = function (request, response) {
    response.send("Списокd задач");
};

exports.addTask = function (request, response) {
    response.send("Добавить задачу");
};

exports.deleteTask = function (request, response) {
    response.send("Удалить задачу");
};

exports.changeTask = function (request, response) {
    response.send("Изменить задачу");
};
