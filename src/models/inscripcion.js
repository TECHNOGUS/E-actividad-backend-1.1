const { DataTypes } = require("sequelize");
const sequelize = require("../config/db_config");
const Estudiante = require("./estudiante");
const Curso = require("./curso");

const Inscripcion = sequelize.define(
  "Inscripcion",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    estudianteId: {
      type: DataTypes.INTEGER,
      references: {
        model: Estudiante,
        key: "id"
      }
    },
    cursoId: {
      type: DataTypes.INTEGER,
      references: {
        model: Curso,
        key: "id"
      }
    }
  },
  {
    tableName: "inscripciones",
    timestamps: false
  }
);

Inscripcion.belongsTo(Estudiante, {
  foreignKey: "estudianteId",
  as: "estudiante"
});
Inscripcion.belongsTo(Curso, { foreignKey: "cursoId", as: "curso" });

module.exports = Inscripcion;
