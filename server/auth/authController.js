require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../user/user");

module.exports = class authController {
  static async login(req, res) {
    // Function to create one Product on the table
    try {
      const { email, senha } = req.body;
      const user = await User.findOne({ where: { email: email } });

      if (!user) {
        return res.status(404).json({ message: "Usuario nao encontrado" });
      }

      // chech if passwords match
      const passwordMatch = bcrypt.compare(senha, user.senha);

      if (!passwordMatch) {
        return res.status(400).json({ message: "Senha Incorreta" });
      }

      if (passwordMatch) {
        const id = user.id;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 30000, // expires in 5horas
        });

        return res.status(200).json({ auth: true, token: token, id: id });
      }
    } catch (err) {
      return res.json(err);
    }
  }

  static async logout(req, res) {
    res.json({ auth: false, token: null });
  }

  static async register(req, res) {
    // Function to create one Product on the table

    const { nome, email, senha, nick } = req.body;
    // check if user exists
    const chechIfUserExists = await User.findOne({ where: { email: email } });

    if (chechIfUserExists) {
      return res.status(200).json({ message: "Email já em uso, tente outro!" });
    }
    // create a password
    const passwordHash = bcrypt.hashSync(senha, 10);
    const user = {
      nome,
      email,
      nick,
      senha: passwordHash,
    };
    try {
      const createdUser = await User.create(user);
      const userId = await User.findOne({ where: { email } });
      const id = userId.id;
      if (createdUser) {
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 30000, // expires in 5horas
        });
        const userId = await User.findOne({ where: { email } });

        return res.json({ auth: true, token: token, id: id });
      }
    } catch (err) {
      return res.json(err);
    }
  }
};
