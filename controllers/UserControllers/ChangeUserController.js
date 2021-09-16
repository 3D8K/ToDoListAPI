const {User} = require("../../models/User");

class ChangeUserController {

    ChangeUser(req, res) {
        let user = new User();
        user.update({ age : req.body.value, name : req.body.name, surname : req.body.surname}, {where: {' id': req.body.id}});
    }
}

module.exports.ChangeUserController = ChangeUserController;