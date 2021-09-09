const Sequelize = require('sequelize');
const {Database} = require("../database/Database");
const DataTypes = require("sequelize").DataTypes;

class Model {
    constructor() {
        let sequelize = Database.getInstance();
        sequelize.sync();

        var tasks = this.initTask(sequelize, DataTypes);
        var users = this.initUser(sequelize, DataTypes);

        tasks.belongsTo(users, { as: "user_ ", foreignKey: "user_ id"});
        users.hasMany(tasks, { as: "tasks", foreignKey: "user_ id"});

        return {
            tasks,
            users,
        };
    }

    initTask(sequelize, DataTypes) {
        return sequelize.define('tasks', {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            'user_ id': {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: ' id'
                }
            },
            group: {
                type: DataTypes.STRING(45),
                allowNull: true,
                defaultValue: ''
            },
            info: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
            },
            deadline: {
                type: DataTypes.DATE,
                allowNull: false
            },
            status: {
                type: DataTypes.TINYINT.UNSIGNED,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'tasks',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        {name: "id"},
                    ]
                },
                {
                    name: "fk_tasks_user_idx",
                    using: "BTREE",
                    fields: [
                        {name: "user_ id"},
                    ]
                },
            ]
        });
    };

    initUser(sequelize, DataTypes) {
        return sequelize.define('users', {
            ' id': {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            surname: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'users',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        {name: " id"},
                    ]
                },
            ]
        });
    };
}

module.exports.Model = Model;