const { DataTypes } = require("sequelize");
const { Curso } = require("../curso/curso");

const database = require("../db");

const Aula = database.define('aula', {
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
    required: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  conteudo: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  video: {
    type: DataTypes.STRING,
  },
});

Aula.belongsTo(Curso)
Curso.hasMany(Aula)

module.exports = { Aula };