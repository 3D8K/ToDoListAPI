const model = require("./Model")

class Task extends model.Model {
    constructor() {
        let models = super();
        return models.tasks;
    };
}

module.exports.Task = Task;