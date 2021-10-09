const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const Tactic = sequelize.define('matrix_tactic', {
    // Model attributes are defined here
    tactic_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true
    },
    tactic_name: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    tactic_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tactic_url: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
  }, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Tactic