const {User} = require("../../models/User");

class GetUserInfoController {
    getInfo(req, res) {
        let user = new User();
        user.findAll({
            where: {
                name: req.body.name,
                surname: req.body.surname,
            },
            raw: true
        }).then(users => {
            res.send({
                User_info: users.filter(user => user.name == req.body.name),
            });
        })

    }
}


module.exports.GetUserInfoController = GetUserInfoController;