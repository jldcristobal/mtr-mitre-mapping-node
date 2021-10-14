const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const QueryPlatform = sequelize.define('matrix_qplatform', {
  platform_name: {
    type: DataTypes.STRING(300),
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false
  });


  module.exports = QueryPlatform