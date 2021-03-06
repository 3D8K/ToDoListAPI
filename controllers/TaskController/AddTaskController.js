const {Task} = require("../../models/Task")

class AddTaskController {
    addTask(req, res) {
        let task = new Task();
        task.create({
            'user_ id': req.body.user_id,
            deadline: req.body.deadline,
            info: req.body.info,
            group: req.body.groupTask,
            status : true,
        }).then(task => {
            res.send({
                id: task.id,
                success: true,
            })}).catch(err => {
            res.status(500).send({message: err.message})
        })
    };
}

module.exports.AddTaskController = AddTaskController;