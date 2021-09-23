const {Task} = require("../../models/Task")

class ChangeTaskController{
    ChangeTask(req,res){
        let task = new Task();
        task.update({info : req.body.info }, {where: {id : req.body.id, 'user_ id': req.body.user_id}}).then(task=>{
            res.send({
                success : true
            })
        });
    }
}

module.exports.ChangeTaskController = ChangeTaskController;