const { DataTypes } = require("sequelize");
const sequelize = require("../config/db_config");
const Estudiante = require("./estudiante");
const Curso = require("./curso");

const Calificacion = sequelize.define(
  "Calificacion",
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
    },
    calificacion: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false
    }
  },
  {
    tableName: "calificaciones",
    timestamps: false
  }
);

Calificacion.belongsTo(Estudiante, {
  foreignKey: "estudianteId",
  as: "estudiante"
});
Calificacion.belongsTo(Curso, { foreignKey: "cursoId", as: "curso" });

module.exports = Calificacion;
