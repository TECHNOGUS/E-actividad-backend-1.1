const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config');
const Materia = require('./materia');

const Estudiante = sequelize.define('Estudiante', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carreraId: {
    type: DataTypes.INTEGER,
    references: {
      model: Materia,
      key: 'id',
    },
  },
}, {
  tableName: 'estudiantes',
  timestamps: false,
});

Estudiante.belongsTo(Materia, { foreignKey: 'carreraId', as: 'carrera' });

module.exports = Estudiante;
