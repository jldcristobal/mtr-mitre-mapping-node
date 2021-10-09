const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const Count = sequelize.define('matrix_count', {
  technique_name_id: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  sub_technique_name_id: {
    type: DataTypes.STRING(100)
  },
  tactic_name_id: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Count