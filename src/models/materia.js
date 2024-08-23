  const { DataTypes } = require('sequelize');
  const sequelize = require('../config/db_config');

  const Materia = sequelize.define('Materia', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'materias',
    timestamps: false,
  });

  module.exports = Materia;
