const { DataTypes } = require("sequelize");
const sequelize = require("../config/db_config");
const Materia = require("./materia");

const Curso = sequelize.define(
  "Curso",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    materiaId: {
      type: DataTypes.INTEGER,
      references: {
        model: Materia,
        key: "id"
      }
    }
  },
  {
    tableName: "cursos",
    timestamps: false
  }
);

Curso.belongsTo(Materia, { foreignKey: "materiaId", as: "materia" });

module.exports = Curso;
