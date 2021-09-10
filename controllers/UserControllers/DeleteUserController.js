const {User} = require("../../models/User");

class DeleteUserController {
    DeleteUser(req, res) {
        let user = new User();
        user.destroy({where: {' id': req.body.id}})
        .then(user => {
            res.send({
                success: true,
            });
        })

    }
}


module.exports.DeleteUserController = DeleteUserController;