const {User} = require("../../models/User");

class AuthorizationUserController {
    authorization(req,res){
        let user = new User();
        user.findAll({
            where : {
                name : req.body.name,
                surname : req.body.surname,
            }
        }).then(user => {
            res.send({
                id : user["0"]._previousDataValues[" id"],
                success: true,
            })}).catch(err => {
            res.status(401).send({message: "The user was not found"})
        })
    };
}

module.exports.AuthorizationUserController = AuthorizationUserController;