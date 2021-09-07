const Sequelize = require("sequelize");
const settings = require("./databaseConnectionSettings");


class Database {
    static instance;

    constructor() {
        return new Sequelize(settings.DATABASE, settings.USER, settings.PASSWORD, {
            dialect: settings.DIALECT,
            host: settings.HOST,
            port: settings.PORT
        });
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

module.exports.Database =  Database;



