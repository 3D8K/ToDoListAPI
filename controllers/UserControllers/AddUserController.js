const {User} = require("../../models/User");

class AddUserController {
    addUser(req, res) {
        let user = new User();
        user.create({
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
        }).then(user => {
            res.send({
                id: user.id,
                success: true,
            })}).catch(err => {
                res.status(500).send({message: err.message})
            })
        };
}

module.exports.NewUserController = AddUserController;