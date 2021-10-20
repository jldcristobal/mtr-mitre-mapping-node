const sequelize = require('../../../helpers/mysql-db-helper');
const { DataTypes } = require('sequelize');

const Subtechnique = sequelize.define('matrix_subtechnique', {
    // Model attributes are defined here
    sub_technique_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true
    },
    sub_technique_name: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    sub_technique_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sub_technique_detection: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sub_technique_url: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    created: {
        type: DataTypes.DATE
    },
    modified: {
        type: DataTypes.DATE
    },
    query: {
        type: DataTypes.TEXT
    },
    frequency: {
        type: DataTypes.STRING(100)
    },
    technique_name_id: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    has_count: {
        type: DataTypes.BOOLEAN,
    },
    has_query: {
        type: DataTypes.BOOLEAN,
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });

  module.exports = Subtechnique