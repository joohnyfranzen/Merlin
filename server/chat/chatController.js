const { or } = require("sequelize");
const sequelize = require("../db");
const { Chat }  = require("./chat")
require("dotenv-safe").config();

module.exports = class chatController {

  static async store(req, res) {
    const chat = req.body
    
      try {
        
        const createChat = await Chat.create(chat);
        
        return res.status(202).json(createChat);
      } catch (err) {
        return res.json(err)
      }

  }

  static async show(req, res) {
    const  { userId, userToId }  = req.params;
    try {
      const show = Chat.findAll({where: {userTo:userId, userId:userToId}})
      return res.status(200).json(show);
    } catch (err) {
      return res.json(err);
    }
  }

  static async showCurso(req, res) {
    const id = req.params.id;

    try {
      const show = await Chat.query({ where: { cursoId:id } });

      return res.status(202).json(show);
    } catch (err) {
      return res.json(err);
    }
  }

  static async index(req, res) {
    try {

      const index = await Chat.findAll();

      return res.status(202).json(index);
    } catch (err) {
      return res.json(err);
    }
  }

  static async update(req, res) {
    const update = req.body;
    const id = req.params.id;

    try {
      const updatedChat = await Chat.update(update, { where: { id } });

      res.status(206).json(update);
    } catch (err) {
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const deleted = await Chat.destroy({ where: { id } });

      return res.status(202).json({ message: `Chat ${id} deletado` });
    } catch (err) {
      return res.json(err)
    }
  }
};