const { DataTypes } = require("sequelize");
const { User } = require("../user/user");

const database = require("../db");

const Chat = database.define('chat', {
  userTo: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },

  message: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
});

Chat.belongsTo(User)
User.hasMany(Chat)

module.exports = { Chat };