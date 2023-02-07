const { DataTypes } = require("sequelize");

const database = require("../db");

const Curso = database.define("curso", {
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
    required: true,
  },
  professor: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },

  image: {
    type: DataTypes.STRING,
  },
  conquista: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  tier: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  nota: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    required: true,
  },
});

module.exports = { Curso };
