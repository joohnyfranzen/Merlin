const { DataTypes } = require("sequelize");
const { Curso } = require("../curso/curso");
const { User } = require("../user/user");

const database = require("../db");

const Prova = database.define("Prova", {
  nota: {
    type: DataTypes.STRING(20),
    allowNull: false,
    required: true,
  },
  userId: {
    type: DataTypes.STRING(20),
    allowNull: false,
    required: true,
  },
  cursoId: {
    type: DataTypes.STRING(20),
    allowNull: false,
    required: true,
  },
});

Prova.belongsTo(Curso);
Curso.hasOne(Prova);

Prova.belongsTo(User);
User.hasOne(Prova);
module.exports = { Prova };
