const model = require("./Model");

class User extends model.Model {
    constructor() {
        let models = super();
        return models.users;
    };
}

module.exports.User = User;