const {User} = require("../../models/User");

class DeleteUserController {
    DeleteUser(req, res) {
        let user = new User();
        user.destroy({
            where: {
                name: req.body.name,
                surname: req.body.surname,
            }
        }).then(user => {
            res.send({
                success: true,
            });
        })

    }
}


module.exports.DeleteUserController = DeleteUserController;