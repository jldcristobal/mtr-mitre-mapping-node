const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const DataSource = sequelize.define('matrix_datasource', {
    // Model attributes are defined here
    data_source: {
        type: DataTypes.STRING(200),
        allowNull: false,
        primaryKey: true
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = DataSource