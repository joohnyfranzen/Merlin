const { UserAulas } = require("../user/UserAulas");
const { Aula }  = require("./aula")
require("dotenv-safe").config();

module.exports = class aulaController {

  static async associate(req, res) {
    const aula = req.body
    try {
      const finishAula = await UserAulas.create(aula)
      return res.json(finishAula)
    } catch (err) {
      return res.json(err)
    }
  }
  static async store(req, res) {
    const aula = req.body
    const id = req.params.id    

      try {
        
        const createAula = await Aula.create(aula);
        
        return res.status(202).json(createAula);
      } catch (err) {
        return res.json(err)
      }

  }

  static async show(req, res) {
    const  id  = req.params.id;
    try {
      const show = await Aula.findOne({ where: { id:id } });
      return res.status(202).json(show);
    } catch (err) {
      return res.json(err);
    }
  }

  static async showCurso(req, res) {
    const id = req.params.id;

    try {
      const show = await Aula.findAll({ where: { cursoId:id } });

      return res.status(202).json(show);
    } catch (err) {
      return res.json(err);
    }
  }

  static async index(req, res) {
    try {

      const index = await Aula.findAll();

      return res.status(202).json(index);
    } catch (err) {
      return res.json(err);
    }
  }

  static async update(req, res) {
    const update = req.body;
    const id = req.params.id;

    try {
      const updatedAula = await Aula.update(update, { where: { id } });

      res.status(206).json(update);
    } catch (err) {
      return res.json(err);
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const deleted = await Aula.destroy({ where: { id } });

      return res.status(202).json({ message: `Aula ${id} deletado` });
    } catch (err) {
      return res.json(err)
    }
  }
};