const express = require("express");
const router = express.Router();

const verifyJWT = require("../middleware/jwt");
const chatController = require("./chatController");

router.get("/chat", chatController.index);
router.get("/chat/:userId/:userToId", chatController.show);
router.post("/chat", chatController.store);
router.patch("/chat/:id", chatController.update);
router.delete("/chat/:id", verifyJWT, chatController.delete);

module.exports = router;