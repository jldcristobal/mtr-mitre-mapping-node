const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const TechniqueDataSource = sequelize.define('matrix_technique_data_source', {
  technique_id: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  datasource_id: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false
  });


  module.exports = TechniqueDataSource