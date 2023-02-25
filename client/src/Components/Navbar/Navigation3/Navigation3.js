import "./Navigation3.css";
import { Link } from "react-router-dom";

export default function Navigation3() {
  return (
    <div className="option-nav1">
      <Link to="/">CONTA</Link>
      <Link to="/cursos">PAGAMENTO</Link>
      <Link to="/meuscursos">AJUDA</Link>
    </div>
  );
}
