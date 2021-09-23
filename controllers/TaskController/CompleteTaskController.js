const {Task} = require("../../models/Task")

class CompleteTaskController {
    completeTask(req, res) {
        let task = new Task();
        task.update({status: 0}, {where: {id: req.body.id, 'user_ id': req.body.user_id}}).then(task => {
            res.send({
                success: true,
            });
        })
    }
}

module.exports.CompleteTaskController = CompleteTaskController;