const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const Technique = sequelize.define('matrix_technique', {
    // Model attributes are defined here
    technique_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true
    },
    technique_name: {
        type: DataTypes.STRING(400),
        allowNull: false
    },
    technique_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    technique_detection: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    technique_url: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    query_description: {
        type: DataTypes.TEXT,
    },
    query_frequency: {
        type: DataTypes.TEXT,
    },
    query_text: {
        type: DataTypes.TEXT,
    },
    query_title: {
        type: DataTypes.STRING(400),
    },
    has_count: {
        type: DataTypes.BOOLEAN,
    },
    created: {
        type: DataTypes.DATE
    },
    modified: {
        type: DataTypes.DATE
    },
  }, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Technique