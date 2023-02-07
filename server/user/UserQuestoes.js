const { DataTypes } = require("sequelize");
const database = require("../db");

const UserQuestoes = database.define('user_questoes', {
    userId: {
        type: DataTypes.INTEGER(20),
      },
    aulaId: {
      type: DataTypes.INTEGER(20),
    },
})
module.exports = { UserQuestoes };