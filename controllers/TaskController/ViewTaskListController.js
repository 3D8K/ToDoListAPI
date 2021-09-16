const {Task} = require("../../models/Task")

class ViewTaskListController {
    ViewList(req, res) {
        let task = new Task();
        task.findAll({
            where: {'user_ id': req.body.user_id},
            raw : false,
        }).then(tasks => {
            res.send(
                tasks.map(function (task){return task.date.getDay()}),
            );
        })

    }
}

module.exports.ViewTaskListController = ViewTaskListController;