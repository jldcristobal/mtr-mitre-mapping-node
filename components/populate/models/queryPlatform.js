const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const QueryPlatform = sequelize.define('matrix_query_platform', {
  query_id: {
    type: DataTypes.STRING(400),
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


  module.exports = QueryPlatform