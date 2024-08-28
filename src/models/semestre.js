// models/semestre.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db_config");

const Semestre = sequelize.define(
  "Semestre",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    tableName: "semestres",
    timestamps: false
  }
);

module.exports = Semestre;
