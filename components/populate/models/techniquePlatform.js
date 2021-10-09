const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const TechniquePlatform = sequelize.define('matrix_technique_platform', {
  technique_id: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  platform_id: {
    type: DataTypes.STRING(300),
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false
  });


  module.exports = TechniquePlatform