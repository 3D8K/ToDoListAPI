exports.userList = function (request, response) {
    response.send("Список пользователей");
};

exports.addUser = function (request, response) {
    response.send("Добавить пользователя");
};

exports.deleteUser = function (request, response) {
    response.send("Удалить пользователя");
};

exports.changeUser = function (request, response) {
    response.send("Изменить пользователя");
};
