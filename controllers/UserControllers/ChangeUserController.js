const {User} = require("../../models/User");

class ChangeUserController {

    ChangeUser(req, res) {
        let user = new User();
        user.update({ collumn : req.body.value}, {where: {' id': req.body.id}});
    }
}

module.exports.ChangeUserController = ChangeUserController;