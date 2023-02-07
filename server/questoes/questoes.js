const { DataTypes } = require("sequelize");
const { Aula } = require("../aula/aula");

const database = require("../db");

const Questao = database.define('Questao', {
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
    required: true,
  },
  pergunta: {
    type: DataTypes.STRING(40),
    allowNull: false,
    required: true,
  },
  resposta1: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  resposta2: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  resposta3: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  resposta4: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  resposta5: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  correta: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Questao.belongsTo(Aula)
Aula.hasMany(Questao)
module.exports = { Questao };