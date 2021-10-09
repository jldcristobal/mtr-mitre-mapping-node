const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const Platform = sequelize.define('matrix_platform', {
    // Model attributes are defined here
    platform_name: {
        type: DataTypes.STRING(300),
        allowNull: false,
        primaryKey: true
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Platform