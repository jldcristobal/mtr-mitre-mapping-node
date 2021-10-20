const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes, BIGINT } = require('sequelize');

const QueryPlatform = sequelize.define('matrix_query_query_platform', {
  query_id: {
    type: DataTypes.BIGINT,
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