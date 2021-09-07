const {Task} = require("../../models/Task")

class DeleteTaskController {
    DeleteTask(req, res) {
        let task = new Task();
        task.destroy({
            where: {
                id: req.body.id,
                'user_ id': req.body.user_id,
            }
        }).then(task => {
            res.send({
                success: true,
            });
        })

    }
}


module.exports.DeleteTaskController = DeleteTaskController;