const { Aula } = require("../aula/aula");
const { Curso } = require("../curso/curso");
const { Questao } = require("../questoes/questoes");
const { User } = require("../user/user");

const {
  info1,
  info2,
  info3,
  info1Aula1,
  info1Aula2,
  info1Aula3,
  info1Aula4,
  info1Aula5,
  info1Aula6,
  info1Aula7,
  info1Aula8,
  info1Aula9,
  info1Aula10,
  info1Aula11,
  info1Aula12,
  info1Aula13,
  info2Aula1,
  info2Aula2,
  info2Aula3,
  info2Aula4,
  info2Aula5,
  info2Aula6,
  info2Aula7,
  info2Aula8,
  info3Aula1,
  info3Aula2,
  info3Aula3,
  info3Aula4,
  info3Aula5,
  info3Aula6,
  info3Aula7,
  info3Aula8,
  info1Aula1Questao1,
  info1Aula1Questao2,
  info1Aula2Questao1,
  info1Aula2Questao2,
  info1Aula2Questao3,
  info1Aula3Questao1,
  info1Aula3Questao2,
  info1Aula3Questao3,
  info1Aula4Questao1,
  info1Aula4Questao2,
  info1Aula4Questao3,
  info1Aula5Questao1,
  info1Aula5Questao2,
  info1Aula5Questao3,
  info1Aula5Questao4,
  info1Aula5Questao5,
  info1Aula6Questao1,
  info1Aula6Questao2,
  info1Aula6Questao3,
  info1Aula7Questao1,
  info1Aula7Questao2,
  info1Aula7Questao3,
  info1Aula8Questao1,
  info1Aula8Questao2,
  info1Aula8Questao3,
  info1Aula9Questao1,
  info1Aula9Questao2,
  info1Aula9Questao3,
  info1Aula10Questao1,
  info1Aula10Questao2,
  info1Aula10Questao3,
  info1Aula11Questao1,
  info1Aula11Questao2,
  info1Aula11Questao3,
  info1Aula12Questao1,
  info1Aula12Questao2,
  info1Aula12Questao3,
  info1Aula13Questao1,
  info1Aula13Questao2,
  info1Aula13Questao3,
} = require("./informatica");
const {
  word1,
  word2,
  word3,
  word1Aula1,
  word1Aula2,
  word1Aula3,
  word1Aula4,
  word1Aula5,
  word1Aula6,
  word1Aula7,
  word1Aula8,
  word1Aula9,
  word1Aula10,
  word1Aula11,
  word1Aula12,
  word1Aula13,
  word1Aula14,
  word1Aula15,
  word2Aula1,
  word2Aula2,
  word2Aula3,
  word2Aula4,
  word2Aula5,
  word2Aula6,
  word2Aula7,
  word2Aula8,
  word2Aula9,
  word2Aula10,
  word2Aula11,
  word2Aula12,
  word2Aula13,
  word2Aula14,
  word2Aula15,
  word2Aula16,
  word3Aula1,
  word3Aula2,
  word3Aula3,
  word3Aula4,
  word3Aula5,
  word3Aula6,
  word3Aula7,
  word3Aula8,
  word3Aula9,
  word3Aula10,
  word3Aula11,
  word3Aula12,
  word3Aula13,
  word3Aula14,
} = require("./word");
const {
  ppoint1,
  ppoint2,
  ppoint3,
  ppoint1Aula1,
  ppoint1Aula2,
  ppoint1Aula3,
  ppoint1Aula4,
  ppoint1Aula5,
  ppoint1Aula6,
  ppoint2Aula1,
  ppoint2Aula2,
  ppoint2Aula3,
  ppoint2Aula4,
  ppoint2Aula5,
  ppoint2Aula6,
  ppoint2Aula7,
  ppoint2Aula8,
  ppoint3Aula1,
  ppoint3Aula2,
  ppoint3Aula3,
  ppoint3Aula4,
  ppoint3Aula5,
} = require("./powerpoint");
const {
  excel1,
  excel2,
  excel3,
  excel1Aula1,
  excel1Aula2,
  excel1Aula3,
  excel1Aula4,
  excel1Aula5,
  excel1Aula6,
  excel1Aula7,
  excel1Aula8,
  excel1Aula9,
  excel1Aula10,
  excel1Aula11,
  excel1Aula12,
  excel1Aula13,
  excel1Aula14,
  excel1Aula15,
  excel2Aula1,
  excel2Aula2,
  excel2Aula3,
  excel2Aula4,
  excel2Aula5,
  excel2Aula6,
  excel2Aula7,
  excel2Aula8,
  excel2Aula9,
  excel2Aula10,
  excel3Aula1,
  excel3Aula2,
  excel3Aula3,
  excel3Aula4,
  excel3Aula5,
  excel3Aula6,
  excel3Aula7,
  excel3Aula8,
  excel3Aula9,
  excel3Aula10,
} = require("./excel");
const {
  manutençao1,
  manutençao1Aula1,
  manutençao1Aula2,
  manutençao1Aula3,
  manutençao1Aula4,
  manutençao1Aula5,
  manutençao1Aula6,
  manutençao1Aula7,
  manutençao1Aula8,
  manutençao1Aula9,
  manutençao1Aula10,
  manutençao1Aula11,
} = require("./montagemManutençao");
const {
  design1,
  design2,
  design3,
  design1Aula1,
  design1Aula2,
  design1Aula3,
  design1Aula4,
  design1Aula5,
  design1Aula6,
  design1Aula7,
  design1Aula8,
  design1Aula9,
  design1Aula10,
  design2Aula1,
  design2Aula2,
  design2Aula3,
  design2Aula4,
  design2Aula5,
  design2Aula6,
  design2Aula7,
  design2Aula8,
  design2Aula9,
  design2Aula10,
  design3Aula1,
  design3Aula2,
  design3Aula3,
  design3Aula4,
  design3Aula5,
  design3Aula6,
  design3Aula7,
  design3Aula8,
  design3Aula9,
  design3Aula10,
  design3Aula11,
  design3Aula12,
  design3Aula13,
  design3Aula14,
  design3Aula15,
  design3Aula16,
  design3Aula17,
  design3Aula18,
  design3Aula19,
  design3Aula20,
  design3Aula21,
  design3Aula22,
  design3Aula23,
} = require("./design");
const {
  photoshop1,
  photoshop2,
  photoshop3,
  photoshop1Aula1,
  photoshop1Aula2,
  photoshop1Aula3,
  photoshop1Aula4,
  photoshop1Aula5,
  photoshop1Aula6,
  photoshop1Aula7,
  photoshop1Aula8,
  photoshop1Aula9,
  photoshop1Aula10,
  photoshop1Aula11,
  photoshop1Aula12,
  photoshop1Aula13,
  photoshop1Aula14,
  photoshop1Aula15,
  photoshop1Aula16,
  photoshop1Aula17,
  photoshop1Aula18,
  photoshop1Aula19,
  photoshop2Aula1,
  photoshop2Aula2,
  photoshop2Aula3,
  photoshop2Aula4,
  photoshop2Aula5,
  photoshop2Aula6,
  photoshop2Aula7,
  photoshop2Aula8,
  photoshop2Aula9,
  photoshop2Aula10,
  photoshop2Aula11,
  photoshop2Aula12,
  photoshop2Aula13,
  photoshop2Aula14,
  photoshop2Aula15,
  photoshop2Aula16,
  photoshop2Aula17,
  photoshop3Aula1,
  photoshop3Aula2,
  photoshop3Aula3,
  photoshop3Aula4,
  photoshop3Aula5,
  photoshop3Aula6,
  photoshop3Aula7,
  photoshop3Aula8,
  photoshop3Aula9,
  photoshop3Aula10,
  photoshop3Aula11,
  photoshop3Aula12,
  photoshop3Aula13,
} = require("./photoshop");
const {
  ilustrator1,
  ilustrator2,
  ilustrator3,
  ilustrator1Aula1,
  ilustrator1Aula2,
  ilustrator1Aula3,
  ilustrator1Aula4,
  ilustrator1Aula5,
  ilustrator1Aula6,
  ilustrator1Aula7,
  ilustrator1Aula8,
  ilustrator1Aula9,
  ilustrator1Aula10,
  ilustrator1Aula11,
  ilustrator1Aula12,
  ilustrator1Aula13,
  ilustrator1Aula14,
  ilustrator1Aula15,
  ilustrator1Aula16,
  ilustrator1Aula17,
  ilustrator1Aula18,
  ilustrator2Aula1,
  ilustrator2Aula2,
  ilustrator2Aula3,
  ilustrator2Aula4,
  ilustrator2Aula5,
  ilustrator2Aula6,
  ilustrator2Aula7,
  ilustrator2Aula8,
  ilustrator2Aula9,
  ilustrator2Aula10,
  ilustrator2Aula11,
  ilustrator2Aula12,
  ilustrator2Aula13,
  ilustrator2Aula14,
  ilustrator2Aula15,
  ilustrator2Aula16,
  ilustrator2Aula17,
  ilustrator2Aula18,
  ilustrator2Aula19,
  ilustrator3Aula1,
  ilustrator3Aula2,
  ilustrator3Aula3,
  ilustrator3Aula4,
  ilustrator3Aula5,
  ilustrator3Aula6,
  ilustrator3Aula7,
  ilustrator3Aula8,
  ilustrator3Aula9,
  ilustrator3Aula10,
  ilustrator3Aula11,
  ilustrator3Aula12,
  ilustrator3Aula13,
} = require("./ilustrator");
const {
  indesign1,
  indesign2,
  indesign3,
  indesign1Aula1,
  indesign1Aula2,
  indesign1Aula3,
  indesign1Aula4,
  indesign1Aula5,
  indesign1Aula6,
  indesign1Aula7,
  indesign1Aula8,
  indesign1Aula9,
  indesign1Aula10,
  indesign1Aula11,
  indesign1Aula12,
  indesign1Aula13,
  indesign1Aula14,
  indesign2Aula1,
  indesign2Aula2,
  indesign2Aula3,
  indesign2Aula4,
  indesign2Aula5,
  indesign2Aula6,
  indesign2Aula7,
  indesign2Aula8,
  indesign2Aula9,
  indesign2Aula10,
  indesign2Aula11,
  indesign3Aula1,
  indesign3Aula2,
  indesign3Aula3,
  indesign3Aula4,
  indesign3Aula5,
  indesign3Aula6,
  indesign3Aula7,
  indesign3Aula8,
  indesign3Aula9,
  indesign3Aula10,
  indesign3Aula11,
  indesign3Aula12,
  indesign3Aula13,
  indesign3Aula14,
  indesign3Aula15,
} = require("./indesign");
const {
  corel1,
  corel2,
  corel3,
  corel1Aula1,
  corel1Aula2,
  corel1Aula3,
  corel1Aula4,
  corel1Aula5,
  corel1Aula6,
  corel1Aula7,
  corel1Aula8,
  corel1Aula9,
  corel1Aula10,
  corel1Aula11,
  corel1Aula12,
  corel1Aula13,
  corel2Aula1,
  corel2Aula2,
  corel2Aula3,
  corel2Aula4,
  corel2Aula5,
  corel2Aula6,
  corel2Aula7,
  corel2Aula8,
  corel2Aula9,
  corel2Aula10,
  corel2Aula11,
  corel3Aula1,
  corel3Aula2,
  corel3Aula3,
  corel3Aula4,
  corel3Aula5,
  corel3Aula6,
  corel3Aula7,
  corel3Aula8,
  corel3Aula9,
  corel3Aula10,
  corel3Aula11,
  corel3Aula12,
  corel3Aula13,
  corel3Aula14,
} = require("./corel");
const {
  html1,
  html2,
  html3,
  html1Aula1,
  html1Aula2,
  html1Aula3,
  html1Aula4,
  html1Aula5,
  html1Aula6,
  html1Aula7,
  html1Aula8,
  html1Aula9,
  html1Aula10,
  html2Aula1,
  html2Aula2,
  html2Aula3,
  html2Aula4,
  html2Aula5,
  html2Aula6,
  html2Aula7,
  html2Aula8,
  html2Aula9,
  html2Aula10,
  html2Aula11,
} = require("./html");

async function CriarAdm() {
  const admin = {
    nome: "Jonathan Franzen Fagundes",
    email: "joohny_2014@hotmail.com",
    senha: "merlin00",
    nick: "Merlin",
  };

  try {
    const adm = await User.create(admin);
  } catch (err) {
    console.log(err);
  }
}

async function Informática() {
  const cursos = [info1, info2, info3];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }
  const aulas = [
    info1Aula1,
    info1Aula2,
    info1Aula3,
    info1Aula4,
    info1Aula5,
    info1Aula6,
    info1Aula7,
    info1Aula8,
    info1Aula9,
    info1Aula10,
    info1Aula11,
    info1Aula12,
    info1Aula13,
    info2Aula1,
    info2Aula2,
    info2Aula3,
    info2Aula4,
    info2Aula5,
    info2Aula6,
    info2Aula7,
    info2Aula8,
    info3Aula1,
    info3Aula2,
    info3Aula3,
    info3Aula4,
    info3Aula5,
    info3Aula6,
    info3Aula7,
    info3Aula8,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }

  const questoes = [
    info1Aula1Questao1,
    info1Aula1Questao2,
    info1Aula2Questao1,
    info1Aula2Questao2,
    info1Aula2Questao3,
    info1Aula3Questao1,
    info1Aula3Questao2,
    info1Aula3Questao3,
    info1Aula4Questao1,
    info1Aula4Questao2,
    info1Aula4Questao3,
    info1Aula5Questao1,
    info1Aula5Questao2,
    info1Aula5Questao3,
    info1Aula5Questao4,
    info1Aula5Questao5,
    info1Aula6Questao1,
    info1Aula6Questao2,
    info1Aula6Questao3,
    info1Aula7Questao1,
    info1Aula7Questao2,
    info1Aula7Questao3,
    info1Aula8Questao1,
    info1Aula8Questao2,
    info1Aula8Questao3,
    info1Aula9Questao1,
    info1Aula9Questao2,
    info1Aula9Questao3,
    info1Aula10Questao1,
    info1Aula10Questao2,
    info1Aula10Questao3,
    info1Aula11Questao1,
    info1Aula11Questao2,
    info1Aula11Questao3,
    info1Aula12Questao1,
    info1Aula12Questao2,
    info1Aula12Questao3,
    info1Aula13Questao1,
    info1Aula13Questao2,
    info1Aula13Questao3,
  ];
  try {
    async function Questoes(questao) {
      const questoes = await Questao.create(questao);
    }
    questoes.map((questao) => {
      Questoes(questao);
      console.log(questao);
    });
  } catch (err) {
    console.log(err);
  }
}

async function Word() {
  const cursos = [word1, word2, word3];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    word1Aula1,
    word1Aula2,
    word1Aula3,
    word1Aula4,
    word1Aula5,
    word1Aula6,
    word1Aula7,
    word1Aula8,
    word1Aula9,
    word1Aula10,
    word1Aula11,
    word1Aula12,
    word1Aula13,
    word1Aula14,
    word1Aula15,
    word2Aula1,
    word2Aula2,
    word2Aula3,
    word2Aula4,
    word2Aula5,
    word2Aula6,
    word2Aula7,
    word2Aula8,
    word2Aula9,
    word2Aula10,
    word2Aula11,
    word2Aula12,
    word2Aula13,
    word2Aula14,
    word2Aula15,
    word2Aula16,
    word3Aula1,
    word3Aula2,
    word3Aula3,
    word3Aula4,
    word3Aula5,
    word3Aula6,
    word3Aula7,
    word3Aula8,
    word3Aula9,
    word3Aula10,
    word3Aula11,
    word3Aula12,
    word3Aula13,
    word3Aula14,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

async function PowerPoint() {
  const cursos = [ppoint1, ppoint2, ppoint3];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    ppoint1Aula1,
    ppoint1Aula2,
    ppoint1Aula3,
    ppoint1Aula4,
    ppoint1Aula5,
    ppoint1Aula6,
    ppoint2Aula1,
    ppoint2Aula2,
    ppoint2Aula3,
    ppoint2Aula4,
    ppoint2Aula5,
    ppoint2Aula6,
    ppoint2Aula7,
    ppoint2Aula8,
    ppoint3Aula1,
    ppoint3Aula2,
    ppoint3Aula3,
    ppoint3Aula4,
    ppoint3Aula5,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

async function Excel() {
  const cursos = [excel1, excel2, excel3];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    excel1Aula1,
    excel1Aula2,
    excel1Aula3,
    excel1Aula4,
    excel1Aula5,
    excel1Aula6,
    excel1Aula7,
    excel1Aula8,
    excel1Aula9,
    excel1Aula10,
    excel1Aula11,
    excel1Aula12,
    excel1Aula13,
    excel1Aula14,
    excel1Aula15,
    excel2Aula1,
    excel2Aula2,
    excel2Aula3,
    excel2Aula4,
    excel2Aula5,
    excel2Aula6,
    excel2Aula7,
    excel2Aula8,
    excel2Aula9,
    excel2Aula10,
    excel3Aula1,
    excel3Aula2,
    excel3Aula3,
    excel3Aula4,
    excel3Aula5,
    excel3Aula6,
    excel3Aula7,
    excel3Aula8,
    excel3Aula9,
    excel3Aula10,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

async function Manutençao() {
  const cursos = [manutençao1];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    manutençao1Aula1,
    manutençao1Aula2,
    manutençao1Aula3,
    manutençao1Aula4,
    manutençao1Aula5,
    manutençao1Aula6,
    manutençao1Aula7,
    manutençao1Aula8,
    manutençao1Aula9,
    manutençao1Aula10,
    manutençao1Aula11,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

async function Design() {
  const cursos = [design1, design2, design3];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    design1Aula1,
    design1Aula2,
    design1Aula3,
    design1Aula4,
    design1Aula5,
    design1Aula6,
    design1Aula7,
    design1Aula8,
    design1Aula9,
    design1Aula10,
    design2Aula1,
    design2Aula2,
    design2Aula3,
    design2Aula4,
    design2Aula5,
    design2Aula6,
    design2Aula7,
    design2Aula8,
    design2Aula9,
    design2Aula10,
    design3Aula1,
    design3Aula2,
    design3Aula3,
    design3Aula4,
    design3Aula5,
    design3Aula6,
    design3Aula7,
    design3Aula8,
    design3Aula9,
    design3Aula10,
    design3Aula11,
    design3Aula12,
    design3Aula13,
    design3Aula14,
    design3Aula15,
    design3Aula16,
    design3Aula17,
    design3Aula18,
    design3Aula19,
    design3Aula20,
    design3Aula21,
    design3Aula22,
    design3Aula23,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

async function Photoshop() {
  const cursos = [photoshop1, photoshop2, photoshop3];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    photoshop1Aula1,
    photoshop1Aula2,
    photoshop1Aula3,
    photoshop1Aula4,
    photoshop1Aula5,
    photoshop1Aula6,
    photoshop1Aula7,
    photoshop1Aula8,
    photoshop1Aula9,
    photoshop1Aula10,
    photoshop1Aula11,
    photoshop1Aula12,
    photoshop1Aula13,
    photoshop1Aula14,
    photoshop1Aula15,
    photoshop1Aula16,
    photoshop1Aula17,
    photoshop1Aula18,
    photoshop1Aula19,
    photoshop2Aula1,
    photoshop2Aula2,
    photoshop2Aula3,
    photoshop2Aula4,
    photoshop2Aula5,
    photoshop2Aula6,
    photoshop2Aula7,
    photoshop2Aula8,
    photoshop2Aula9,
    photoshop2Aula10,
    photoshop2Aula11,
    photoshop2Aula12,
    photoshop2Aula13,
    photoshop2Aula14,
    photoshop2Aula15,
    photoshop2Aula16,
    photoshop2Aula17,
    photoshop3Aula1,
    photoshop3Aula2,
    photoshop3Aula3,
    photoshop3Aula4,
    photoshop3Aula5,
    photoshop3Aula6,
    photoshop3Aula7,
    photoshop3Aula8,
    photoshop3Aula9,
    photoshop3Aula10,
    photoshop3Aula11,
    photoshop3Aula12,
    photoshop3Aula13,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

async function Ilustrator() {
  const cursos = [ilustrator1, ilustrator2, ilustrator3];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    ilustrator1Aula1,
    ilustrator1Aula2,
    ilustrator1Aula3,
    ilustrator1Aula4,
    ilustrator1Aula5,
    ilustrator1Aula6,
    ilustrator1Aula7,
    ilustrator1Aula8,
    ilustrator1Aula9,
    ilustrator1Aula10,
    ilustrator1Aula11,
    ilustrator1Aula12,
    ilustrator1Aula13,
    ilustrator1Aula14,
    ilustrator1Aula15,
    ilustrator1Aula16,
    ilustrator1Aula17,
    ilustrator1Aula18,
    ilustrator2Aula1,
    ilustrator2Aula2,
    ilustrator2Aula3,
    ilustrator2Aula4,
    ilustrator2Aula5,
    ilustrator2Aula6,
    ilustrator2Aula7,
    ilustrator2Aula8,
    ilustrator2Aula9,
    ilustrator2Aula10,
    ilustrator2Aula11,
    ilustrator2Aula12,
    ilustrator2Aula13,
    ilustrator2Aula14,
    ilustrator2Aula15,
    ilustrator2Aula16,
    ilustrator2Aula17,
    ilustrator2Aula18,
    ilustrator2Aula19,
    ilustrator3Aula1,
    ilustrator3Aula2,
    ilustrator3Aula3,
    ilustrator3Aula4,
    ilustrator3Aula5,
    ilustrator3Aula6,
    ilustrator3Aula7,
    ilustrator3Aula8,
    ilustrator3Aula9,
    ilustrator3Aula10,
    ilustrator3Aula11,
    ilustrator3Aula12,
    ilustrator3Aula13,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

async function Indesign() {
  const cursos = [indesign1, indesign2, indesign3];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    indesign1Aula1,
    indesign1Aula2,
    indesign1Aula3,
    indesign1Aula4,
    indesign1Aula5,
    indesign1Aula6,
    indesign1Aula7,
    indesign1Aula8,
    indesign1Aula9,
    indesign1Aula10,
    indesign1Aula11,
    indesign1Aula12,
    indesign1Aula13,
    indesign1Aula14,
    indesign2Aula1,
    indesign2Aula2,
    indesign2Aula3,
    indesign2Aula4,
    indesign2Aula5,
    indesign2Aula6,
    indesign2Aula7,
    indesign2Aula8,
    indesign2Aula9,
    indesign2Aula10,
    indesign2Aula11,
    indesign3Aula1,
    indesign3Aula2,
    indesign3Aula3,
    indesign3Aula4,
    indesign3Aula5,
    indesign3Aula6,
    indesign3Aula7,
    indesign3Aula8,
    indesign3Aula9,
    indesign3Aula10,
    indesign3Aula11,
    indesign3Aula12,
    indesign3Aula13,
    indesign3Aula14,
    indesign3Aula15,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      if (!aula.conteudo) {
      }
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

async function Corel() {
  const cursos = [corel1, corel2, corel3];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    corel1Aula1,
    corel1Aula2,
    corel1Aula3,
    corel1Aula4,
    corel1Aula5,
    corel1Aula6,
    corel1Aula7,
    corel1Aula8,
    corel1Aula9,
    corel1Aula10,
    corel1Aula11,
    corel1Aula12,
    corel1Aula13,
    corel2Aula1,
    corel2Aula2,
    corel2Aula3,
    corel2Aula4,
    corel2Aula5,
    corel2Aula6,
    corel2Aula7,
    corel2Aula8,
    corel2Aula9,
    corel2Aula10,
    corel2Aula11,
    corel3Aula1,
    corel3Aula2,
    corel3Aula3,
    corel3Aula4,
    corel3Aula5,
    corel3Aula6,
    corel3Aula7,
    corel3Aula8,
    corel3Aula9,
    corel3Aula10,
    corel3Aula11,
    corel3Aula12,
    corel3Aula13,
    corel3Aula14,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

async function Html() {
  const cursos = [html1, html2];
  try {
    async function Cursos(curso) {
      const cursos = await Curso.create(curso);
    }
    cursos.map((curso) => {
      Cursos(curso);
    });
  } catch (err) {
    console.log(err);
  }

  const aulas = [
    html1Aula1,
    html1Aula2,
    html1Aula3,
    html1Aula4,
    html1Aula5,
    html1Aula6,
    html1Aula7,
    html1Aula8,
    html1Aula9,
    html1Aula10,
    html2Aula1,
    html2Aula2,
    html2Aula3,
    html2Aula4,
    html2Aula5,
    html2Aula6,
    html2Aula7,
    html2Aula8,
    html2Aula9,
    html2Aula10,
    html2Aula11,
  ];
  try {
    aulas.map((aula) => {
      Aulas(aula);
    });
    async function Aulas(aula) {
      const aulas = await Aula.create(aula);
    }
  } catch (err) {
    console.log(err);
  }
}

CriarAdm()
  .then(Informática())
  .then(Word())
  .then(PowerPoint())
  .then(Excel())
  .then(Manutençao())
  .then(Design())
  .then(Photoshop())
  .then(Ilustrator())
  .then(Indesign())
  .then(Corel())
  .then(Html());
