const {User} = require("../../models/User");

class  ChangeUserController{
    ChangeUser(req,res){
        let user = new User();
        user.update({
            where: {
                id: req.body.id
            },
            age : req.body.age
        }).then(user => {
            res.send({
                success: true,
            });
        })
    }
}

module.exports.ChangeUserController = ChangeUserController;