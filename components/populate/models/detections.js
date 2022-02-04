const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const Detections = sequelize.define('matrix_detections', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  detections: {
    type: DataTypes.STRING(300),
    allowNull: false
  },
  sub_technique_name_id: {
    type: DataTypes.STRING(100)
  },
  technique_name_id: {
    type: DataTypes.STRING(100)
  }
}, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Detections 