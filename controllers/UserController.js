const {User} = require("../models/User");

class UserController {
    userList(req, res) {

        res.send("Список пользователей");
    };

    deleteUser(req, res) {
        res.send("Удалить пользователя");
    };

    changeUser(req, res) {
        res.send("Изменить пользователя");
    };
}

module.exports.UserController = UserController;
