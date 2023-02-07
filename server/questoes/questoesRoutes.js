const express = require("express");
const router = express.Router();

const verifyJWT = require("../middleware/jwt");
const questoesController = require("./questoesController");

router.get("/questao", verifyJWT, questoesController.index);
router.post("/questao", verifyJWT, questoesController.associate);
router.get("/questao/:id", verifyJWT, questoesController.show);
router.get("/questoes/:id", verifyJWT, questoesController.showAula);
router.get("/questoes/:aulaId/:userId/respondidas", verifyJWT, questoesController.respondidas);
router.post("/questao/:id", verifyJWT, questoesController.store);
router.patch("/questao/:id", verifyJWT, questoesController.update);
router.delete("/questao/:id", verifyJWT, questoesController.delete);

module.exports = router;