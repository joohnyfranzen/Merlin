import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <div className="navbar-unlogged">
        <ul className="ul-10">
          <li>
            <Link to="/">INÍCIO</Link>
          </li>
          <li>
            <Link to="/cursos">CURSOS</Link>
          </li>
          <div>
            <Link to="/merlin" id="imagem-nav">
              <img src="./hat.jpg" alt="Witch Hat" />
            </Link>
          </div>
          <li>
            <Link to="/feed">FEED</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
