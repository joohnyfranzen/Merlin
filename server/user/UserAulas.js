const { DataTypes } = require("sequelize");
const database = require("../db");

const UserAulas = database.define('user_aulas', {
    userId: {
        type: DataTypes.INTEGER(20),
      },
})
module.exports = { UserAulas };