import "./Navigation1.css";
import { Link } from "react-router-dom";

export default function Navigation1() {
  return (
    <div className="option-nav1">
      <Link to="/">INÍCIO</Link>
      <Link to="/cursos">CURSOS</Link>
      <Link to="/meuscursos">MEUS CURSOS</Link>
      <Link to="/feed">FEED</Link>
      <Link to="/logout">LOGOUT</Link>
    </div>
  );
}
