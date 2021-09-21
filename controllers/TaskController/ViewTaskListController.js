const {Task} = require("../../models/Task")

class ViewTaskListController {
    ViewList(req, res) {
        let task = new Task();
        task.findAll({
            where: {'user_ id': req.body.id},
            raw : false,
        }).then(tasks => {
            res.send(
                { tasks : tasks.map(function (task){return {
                    task_id : task.id,
                    date : task.date.getFullYear()+'-' + (task.date.getMonth()+1) + '-'+task.date.getDate()+' '+task.date.getHours()+':'+task.date.getMinutes(),
                    status : task.status,
                    group : task.group,
                    info : task.info,
                    deadline : task.deadline.getFullYear()+'-' + (task.deadline.getMonth()+1) + '-'+task.deadline.getDate()+' '+task.deadline.getHours()+':'+task.date.getMinutes()
                }})},
            );
        })

    }
}

module.exports.ViewTaskListController = ViewTaskListController;