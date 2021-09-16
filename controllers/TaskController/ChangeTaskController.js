const {Task} = require("../../models/Task")

class ChangeTaskController{
    ChangeTask(req,res){
        let task = new Task();
        task.update({info : req.body.info, deadline : req.body.deadline, group : req.body.group}, {where: {id : req.body.task_id, 'user_ id': req.body.user_id}});
    }
}

module.exports.ChangeTaskController = ChangeTaskController;