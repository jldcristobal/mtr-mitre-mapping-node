const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const SubtechniqueDataSource = sequelize.define('matrix_subtechnique_data_source', {
  subtechnique_id: {
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


  module.exports = SubtechniqueDataSource