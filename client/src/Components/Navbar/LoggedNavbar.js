import { Link } from "react-router-dom";
import React, { useRef } from "react";
import "./Navbar.css";
import { BsFillGearFill } from "react-icons/bs";
import Config from "../Config/Config";

export default function Navbar() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = Config(dropDownRef);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);
  return (
    <div>
      <nav>
        <div className="nav-1">
          <ul className="ul-1">
            <Link to="/merlin">
              <img src="hat.jpg" alt="Witch Hat" />
            </Link>
            <li>
              <Link to="/">INÍCIO</Link>
            </li>
            <li>
              <Link to="/cursos">CURSOS</Link>
            </li>
            <li>
              <Link to="/meuscursos">MEUS CURSOS</Link>
            </li>
            <li>
              <Link to="/feed">FEED</Link>
            </li>
          </ul>
          <ul className="ul-2">
            <li>
              <Link to="/logout">SAIR</Link>
            </li>
            <li>
              <button onClick={onClick} className="menu-button">
                <BsFillGearFill className="BsFillGearFill" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="menubox">
        <ul
          ref={dropDownRef}
          id="config"
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <li>
            <Link to="/minhaconta">Conta</Link>
          </li>
          <li>
            <Link to="#">Pagamento</Link>
          </li>
          <li>
            <Link to="#">Certificado</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
