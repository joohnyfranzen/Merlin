const { User }  = require("./user")

require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

module.exports = class productController {

  static async show(req, res) {
    const id = req.params.id;

    try {
      const show = await User.findOne({ where: { id } });

      res.status(202).json(show);
    } catch (err) {
      console.log(err);
    }
  }

  static async index(req, res) {
    try {

      const index = await User.findAll();

      res.status(200).json(index);
    } catch (err) {
      console.log(err);
    }
  }

  static async update(req, res) {
    const update = req.body;
    const id = req.params.id;

    try {
      const updatedUser = await User.update(update, { where: { id } });

      res.status(206).json(update);
    } catch (err) {
      console.log(err);
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const deleted = await User.destroy({ where: { id } });

      return res.status(202).json({ message: `${deleted} Usuário deletado` });
    } catch (err) {
      return res.status(404).json(err);
    }
  }
};