const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');

const userController = require("./userController");

router.get("/user", userController.index);
router.get("/user/:id", userController.show); 
router.patch("/user/:id", verifyJWT, userController.update);
router.delete("/user/:id", verifyJWT, userController.delete);

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'Nenhum Token Informado.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Falha ao Autenticar Token.' });
      
      req.userId = decoded.id;
      next();
    });
}

module.exports = router;