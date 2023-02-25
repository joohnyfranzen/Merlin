import "./Navigation2.css";
import { Link } from "react-router-dom";

export default function Navigation2() {
  return (
    <div className="option-nav1">
      <Link to="/">PERFIL</Link>
      <Link to="/cursos">EVOLUÇAO</Link>
      <Link to="/meuscursos">CERTIFICADOS</Link>
    </div>
  );
}
