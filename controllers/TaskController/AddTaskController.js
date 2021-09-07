const {Task} = require("../../models/Task")

class AddTaskController {
    addTask(req, res) {
        let task = new Task();
        task.create({
            'user_ id': req.body.user_id,
            deadline: req.body.deadline,
            info: req.body.info,
        }).then(task => {
            res.send({
                id: task.id,
                success: true,
            });
        })

    }
}

module.exports.AddTaskController = AddTaskController;