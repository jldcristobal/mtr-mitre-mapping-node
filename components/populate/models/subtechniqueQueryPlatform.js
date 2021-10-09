const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const SubtechniqueQueryPlatform = sequelize.define('matrix_subtechnique_query_platform', {
  subtechnique_id: {
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


  module.exports = SubtechniqueQueryPlatform