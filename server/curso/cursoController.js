const { Curso } = require("./curso");
require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
const upload = require("../middleware/multer");
const { UserCursos } = require("../user/UserCursos");
const { User } = require("../user/user");
const { Prova } = require("../prova/prova");

const { Op } = require("sequelize");
const { UserAulas } = require("../user/UserAulas");
const { Aula } = require("../aula/aula");
const { Questao } = require("../questoes/questoes");
const database = require("../db");

module.exports = class productController {
  static async indexCursos(req, res) {
    const userId = req.params.userId;
    let userCursos = await UserCursos.findAll({
      where: {
        userId: userId,
      },
    });
    let cursos = [];
    if (userCursos) {
      userCursos = userCursos.map((userCurso) => {
        return userCurso.cursoId;
      });
      cursos = await Curso.findAll({
        where: {
          id: {
            [Op.in]: userCursos,
          },
        },
      });
    }
    return res.status(202).json(cursos);
  }

  static async show(req, res) {
    const id = req.params.id;

    try {
      const show = await Curso.findOne({ where: { id } });

      return res.status(202).json(show);
    } catch (err) {
      return res.json(err);
    }
  }

  static async storeId(req, res) {
    const userId = req.body.userId;
    const cursoId = req.body.cursoId;

    try {
      const userCurso = await UserCursos.create({
        userId: userId,
        cursoId: cursoId,
      });

      return res.status(202).json(userCurso);
    } catch (err) {
      return res.json(err);
    }
  }

  static async questoesProva(req, res) {
    const cursoId = req.params.cursoId;
    let aulasCurso = await Aula.findAll({
      where: {
        cursoId,
      },
    });
    let questoes = [];

    if (aulasCurso) {
      aulasCurso = aulasCurso.map((aulaCurso) => {
        return aulaCurso.id;
      });
      questoes = await Questao.findAll({
        where: {
          id: {
            [Op.in]: aulasCurso,
          },
        },
        order: database.random(),
        limit: "10",
      });
    }

    return res.status(202).json(questoes);
  }

  static async cursosFinalizados(req, res) {
    const userId = req.params.userId;
    let userCursos = await UserCursos.findAll({
      where: {
        userId: userId,
        status: 1,
      },
    });
    let cursos = [];
    if (userCursos) {
      userCursos = userCursos.map((userCurso) => {
        return userCurso.cursoId;
      });
      cursos = await Curso.findAll({
        where: {
          id: {
            [Op.in]: userCursos,
          },
        },
      });
    }
    const nota = await Prova.findAll({
      where: {
        userId: userId,
      },
    });
    return res.status(202).json([cursos, nota]);
  }

  static async feedUser(req, res) {
    let userCursos = await UserCursos.findAll({
      where: {
        status: 1,
      },
    });
    return res.status(202).json(userCursos);
  }
  static async finalizarCurso(req, res) {
    const userId = req.body.userId;
    const cursoId = req.body.cursoId;
    const status = req.body.status;

    const curso = [cursoId, userId, status];
    try {
      const userCurso = await UserCursos.update(
        { status: status },
        {
          where: {
            userId: userId,
            cursoId: cursoId,
          },
        }
      );
      console.log(userCurso);
      return res.status(202).json(userCurso);
    } catch (err) {
      return res.json(err);
    }
  }
  static async store(req, res) {
    const curso = req.body;

    const image = req.image;
    curso.image = image;
    const nome = curso.nome;
    const checkCurso = await Curso.findOne({ where: { nome } });
    if (checkCurso == null) {
      try {
        const createCurso = await Curso.create(curso);

        return res.status(202).json(createCurso);
      } catch (err) {
        return res.json(err);
      }
    }
    return res.json("O nome do curso já está em uso");
  }

  static async finalizadas(req, res) {
    const cursoId = req.params.cursoId;
    const userId = req.params.userId;
    let userAulas = await UserAulas.findAll({
      where: {
        userId: userId,
      },
    });
    let aulas = [];
    if (userAulas) {
      userAulas = userAulas.map((userAula) => {
        return userAula.aulaId;
      });
      aulas = await Aula.findAll({
        where: {
          cursoId: cursoId,
          id: {
            [Op.in]: userAulas,
          },
        },
      });
    }
    return res.status(200).json(aulas);
  }

  static async index(req, res) {
    try {
      const index = await Curso.findAll();

      return res.status(202).json(index);
    } catch (err) {
      return res.json(err);
    }
  }

  static async update(req, res) {
    const update = req.body;
    const id = req.params.id;
    update;
    try {
      const updatedCurso = await Curso.update(update, { where: { id } });

      res.status(206).json(update);
    } catch (err) {
      return res.json(err);
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const deleted = await Curso.destroy({ where: { id } });

      return res.status(202).json({ message: `Curso ${id} deletado` });
    } catch (err) {
      return res.json(err);
    }
  }
};
