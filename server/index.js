const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./db");

// routes import
const userRoutes = require("./user/userRoutes");
const cursoRoutes = require("./curso/cursoRoutes");
const authRoutes = require("./auth/authRoutes");
const aulaRoutes = require("./aula/aulaRoutes");
const questoesRoutes = require("./questoes/questoesRoutes");
const chatRoutes = require("./chat/chatRoutes");
const provaRoutes = require("./prova/provaRoutes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // using format json

app.use(cors());

app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", cursoRoutes);
app.use("/", aulaRoutes);
app.use("/", questoesRoutes);
app.use("/", chatRoutes);
app.use("/", provaRoutes);

//db.sync( {force: true} )
db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});
