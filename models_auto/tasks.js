const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
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
    deadline: {
      type: DataTypes.DATE,
      allowNull: false
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
          { name: "id" },
        ]
      },
      {
        name: "fk_tasks_user_idx",
        using: "BTREE",
        fields: [
          { name: "user_ id" },
        ]
      },
    ]
  });
};
