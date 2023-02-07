const { DataTypes } = require("sequelize");
const database = require("../db");

const UserCursos = database.define('user_cursos', {
    userId: {
        type: DataTypes.STRING(20),
      },
    cursoId: {
        type: DataTypes.STRING(20),
      },
    status: {
        type: DataTypes.STRING(2),
        defaultValue: 0,
      },
})
module.exports = { UserCursos };