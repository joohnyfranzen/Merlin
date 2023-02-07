const { Op } = require("sequelize");
const { UserQuestoes } = require("../user/UserQuestoes");
const { Questao }  = require("./questoes")
require("dotenv-safe").config();

module.exports = class aulaController {

  static async associate(req, res) {
    const userId = req.body.userId
    const questaoId = req.body.QuestaoId
    const aulaId = req.body.aulaId
    try{
      const userQuestao = await UserQuestoes.create({
        userId: userId,
        aulaId: aulaId,
        QuestaoId: questaoId,
      })
      return res.status(202).json(userQuestao)
    } catch (err) {
      return res.json(err);
    }
  }

  static async store(req, res) {
    var questao = req.body
    const questaoId = req.params.id
    var correta = req.body.correta
    if(correta=1){questao.correta= questao.resposta1}
    if(correta=2){questao.correta= questao.resposta2}
    if(correta=3){questao.correta= questao.resposta3}
    if(correta=4){questao.correta= questao.resposta4}
    if(correta=5){questao.correta= questao.resposta5}
      try {
        
        const createQuestao = await Questao.create(questao);
        
        return res.status(202).json(createQuestao);
      } catch (err) {
        return res.json(err)
      }
  }

  static async show(req, res) {
    const  id  = req.params.id;
    try {
      const show = await Questao.findOne({ where: { id:id } });
      return res.status(202).json(show);
    } catch (err) {
      return res.json(err);
    }
  }

  static async showAula(req, res) {
    const id = req.params.id;
    try {
      const show = await Questao.findAll({where: { aulaId: id}});

      return res.status(202).json(show);
    } catch (err) {
      return res.json(err);
    }
  }

  static async respondidas(req, res) {
    const aulaId = req.params.aulaId
    const userId = req.params.userId
    let userQuestaos = await UserQuestoes.findAll({
      where: {
        userId: userId,
        aulaId: aulaId
      }
    }) 
    let questoes = []
    if(userQuestaos){
      userQuestaos = userQuestaos.map((userQuestao)=>{

        return userQuestao.QuestaoId
      })
      questoes = await Questao.findAll({
        where: {
          id: {
          [Op.in]: userQuestaos
          }
        }
      })
    }
    return res.status(202).json(questoes);
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
    var correta = req.body.correta

    if(correta){
      if(correta=1){questao.correta= questao.resposta1}
      if(correta=2){questao.correta= questao.resposta2}
      if(correta=3){questao.correta= questao.resposta3}
      if(correta=4){questao.correta= questao.resposta4}
      if(correta=5){questao.correta= questao.resposta5}
    }
    try {
      const updatedAula = await Aula.update(update, { where: { id } });

      res.status(206).json(update);
    } catch (err) {
      console.log(err);
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