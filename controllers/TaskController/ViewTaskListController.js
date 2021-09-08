const {Task} = require("../../models/Task")

class ViewTaskListController {
    ViewList(req, res) {
        let task = new Task();
        task.findAll({
            where: {'user_ id': req.body.user_id},
            raw: true
        }).then(tasks => {
            res.send(
                tasks.filter(task => task.user_id == req.body.id),
            );
        })

    }
}

module.exports.ViewTaskListController = ViewTaskListController;