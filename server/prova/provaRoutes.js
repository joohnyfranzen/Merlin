const express = require("express");
const router = express.Router();

const verifyJWT = require("../middleware/jwt");
const provaController = require("./provaController");

router.get("/prova/:id", verifyJWT, provaController.show);
router.post("/prova", verifyJWT, provaController.store);

module.exports = router;
