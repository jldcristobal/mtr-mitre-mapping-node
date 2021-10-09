const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const TechniqueTactic = sequelize.define('matrix_technique_tactic_name', {
  technique_id: {
    type: DataTypes.STRING(100),
    allowNull: false
},
  tactic_id: {
    type: DataTypes.STRING(300),
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = TechniqueTactic