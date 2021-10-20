const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const Query = sequelize.define('matrix_query', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  query_title: {
    type: DataTypes.STRING(400),
    allowNull: false
  },
  query_description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  query_text: {
    type: DataTypes.TEXT
  },
  query_frequency: {
    type: DataTypes.TEXT,
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

  module.exports = Query 