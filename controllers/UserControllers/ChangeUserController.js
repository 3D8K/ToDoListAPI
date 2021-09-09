const {User} = require("../../models/User");

class ChangeUserController {
    ChangeUser(req, res) {
        let user = new User();
        user.update({age: req.body.value}, {where: {id: 6}});
    }
}

module.exports.ChangeUserController = ChangeUserController;