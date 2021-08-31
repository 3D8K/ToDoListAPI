const Sequelize = require("sequelize");
const settings = require("./databaseConnectionSettings");


module.exports.connection = function connection()
{
    return new Sequelize(settings.DATABASE, settings.USER, settings.PASSWORD, {
        dialect: settings.DIALECT,
        host: settings.HOST,
        port: settings.PORT
    });
}




