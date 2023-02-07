const express = require("express");
const router = express.Router();

const verifyJWT = require("../middleware/jwt");
const upload = require("../middleware/multer");
const cursoController = require("./cursoController");

router.get("/curso", cursoController.index);
router.post("/usercurso", cursoController.storeId);
router.get("/meucurso/:userId/:cursoId", cursoController.finalizadas);
router.get("/meuscursos/:userId", cursoController.indexCursos);
router.get("/:cursoId/prova", cursoController.questoesProva);
router.get("/finalizados/:userId", cursoController.cursosFinalizados);
router.get("/feeduser", verifyJWT, cursoController.feedUser);
router.get("/curso/:id", cursoController.show);
router.post("/curso", upload.single("image"), cursoController.store);
router.patch("/curso/:id", verifyJWT, cursoController.update);
router.patch("/meucurso", verifyJWT, cursoController.finalizarCurso);
router.delete("/curso/:id", verifyJWT, cursoController.delete);

module.exports = router;
