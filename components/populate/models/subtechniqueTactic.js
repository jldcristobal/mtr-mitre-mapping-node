const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const SubtechniqueTactic = sequelize.define('matrix_subtechnique_tactic_name', {
  subtechnique_id: {
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

  module.exports = SubtechniqueTactic