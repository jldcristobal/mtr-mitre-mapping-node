const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const TechniqueQueryPlatform = sequelize.define('matrix_technique_query_platform', {
  technique_id: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  qplatform_id: {
    type: DataTypes.STRING(300),
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: false
  });


  module.exports = TechniqueQueryPlatform