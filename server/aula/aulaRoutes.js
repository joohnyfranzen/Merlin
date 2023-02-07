const express = require("express");
const router = express.Router();

const verifyJWT = require("../middleware/jwt");
const aulaController = require("./aulaController");

router.get("/aula", verifyJWT, aulaController.index);
router.get("/curso/:id/aula", verifyJWT, aulaController.showCurso);
router.get("/aula/:id", verifyJWT, aulaController.show);
router.post("/aula/:id", verifyJWT, aulaController.store);
router.post("/associate/aula", verifyJWT, aulaController.associate);
router.patch("/aula/:id", verifyJWT, aulaController.update);
router.delete("/aula/:id", verifyJWT, aulaController.delete);

module.exports = router;