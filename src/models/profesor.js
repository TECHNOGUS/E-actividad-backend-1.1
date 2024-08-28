const { DataTypes } = require("sequelize");
const sequelize = require("../config/db_config");

const Profesor = sequelize.define(
  "Profesor",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: "profesores",
    timestamps: false
  }
);

module.exports = Profesor;
