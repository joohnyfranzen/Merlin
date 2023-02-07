import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logout from "../Components/Logout/Logout";
import Navbar from "../Components/Navbar/LoggedNavbar";
import Home from "../Screens/Home/Home";
import Cursos from "../Screens/Curso/Cursos/Cursos";
import Curso from "../Screens/Curso/Curso/Curso";
import MeusCursos from "../Screens/Curso/MeusCursos/MeusCursos";

import Admin from "../Screens/Admin/Admin";
import EditarCurso from "../Screens/Admin/Curso/EditarCurso";
import Aulas from "../Screens/Admin/Aulas/Aulas";
import EditarAula from "../Screens/Admin/Aulas/EditarAula";
import NovaAula from "../Screens/Admin/Aulas/NovaAula";
import NovoCurso from "../Screens/Admin/Curso/NovoCurso";
import Questoes from "../Screens/Admin/Questoes/Questoes";
import NovaQuestao from "../Screens/Admin/Questoes/NovaQuestao";
import EditarQuestao from "../Screens/Admin/Questoes/EditarQuestao";
import MeuCurso from "../Screens/Curso/MeuCurso/MeuCurso";
import Aula from "../Screens/Curso/Aula/Aula";
import Questao from "../Screens/Curso/Questao/Questao";
import MinhasQuestoes from "../Screens/Curso/MinhasQuestoes/MinhasQuestoes";
import Certificado from "../Screens/Certificado/Certificado";
import Feed from "../Screens/Feed/Feed";
import Chat from "../Components/Chat/Chat";
import Merlin from "../Screens/Merlin/Merlin";
import Prova from "../Screens/Curso/Prova/Prova";

export default function Logged() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/curso/:cursoId" element={<Curso />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/meuscursos" element={<MeusCursos />} />
        <Route path="/meucurso/:cursoId" element={<MeuCurso />} />
        <Route path="/meucurso/:cursoId/prova" element={<Prova />} />
        <Route path="/aula/:cursoId/:aulaId" element={<Aula />} />
        <Route
          path="/aula/:cursoId/:aulaId/questoes"
          element={<MinhasQuestoes />}
        />
        <Route path="/aula/:cursoId/:aulaId/:questaoId" element={<Questao />} />
        <Route path="/certificado/:cursoId" element={<Certificado />} />
        <Route path="/merlin" element={<Merlin />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/novocurso" element={<NovoCurso />} />
        <Route path="/admin/:cursoId" element={<EditarCurso />} />
        <Route path="/admin/:cursoId/aulas" element={<Aulas />} />
        <Route path="/admin/:cursoId/:aulaId" element={<EditarAula />} />
        <Route path="/admin/:cursoId/novaaula" element={<NovaAula />} />
        <Route path="/admin/:cursoId/:aulaId/questoes" element={<Questoes />} />
        <Route
          path="/admin/:cursoId/:aulaId/novaquestao"
          element={<NovaQuestao />}
        />
        <Route
          path="/admin/:cursoId/:aulaId/:questaoId"
          element={<EditarQuestao />}
        />
      </Routes>
    </Router>
  );
}
