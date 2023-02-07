const { DataTypes } = require("sequelize");
const { Curso } = require("../curso/curso");
const { Questao } = require("../questoes/questoes");

const database = require("../db");
const { UserCursos } = require("./UserCursos");
const { UserQuestoes } = require("./UserQuestoes");
const { UserAulas } = require("./UserAulas");
const { Aula } = require("../aula/aula");

const User = database.define('user', {
  nome: {
    type: DataTypes.STRING(20),
    allowNull: false,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  nick: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});



  User.belongsToMany(Curso, {through: UserCursos })
  Curso.belongsToMany(User, {through: UserCursos })

  User.belongsToMany(Questao, {through: UserQuestoes })
  Questao.belongsToMany(User, {through: UserQuestoes })

  User.belongsToMany(Aula, {through: UserAulas })
  Aula.belongsToMany(User, {through: UserAulas })

module.exports = { User };