const { UserCursos } = require("../user/UserCursos");
const { Prova } = require("./prova");

require("dotenv-safe").config();

module.exports = class provaController {
  static async store(req, res) {
    const cursoId = req.body.cursoId;
    const userId = req.body.userId;
    const respostas = req.body.respostas;
    const aulas = req.body.aulas;
    const status = 1;
    let nota = 0;
    const corretas = respostas.map((resposta, index) => {
      if (resposta === aulas[index].correta) {
        nota++;
      }
    });
    const findCurso = await Prova.findOne({
      where: { cursoId: cursoId, userId: userId },
    });
    if (findCurso) {
      if (nota >= findCurso.nota) {
        const newcurso = { nota: nota, cursoId: cursoId, userId: userId };
        const updateNota = await Prova.update(newcurso, {
          where: { cursoId: cursoId, userId: userId },
        });

        return res.json(newcurso.nota);
      }
    }
    if (!findCurso) {
      const newProva = { nota: nota, cursoId: cursoId, userId: userId };
      const newNota = await Prova.create(newProva);

      return res.json(newProva.nota);
    }
    if (nota >= 7) {
      const userCurso = await UserCursos.update(
        { status: status },
        {
          where: {
            userId: userId,
            cursoId: cursoId,
          },
        }
      );
    }

    return res.json(nota);
  }

  static async show(req, res) {
    const id = req.params.id;
    try {
      const show = await Questao.findOne({ where: { id: id } });
      return res.status(202).json(show);
    } catch (err) {
      return res.json(err);
    }
  }
};
