import { Link } from "react-router-dom";
import React from "react";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-1">
                <ul className="ul-1">
                    <Link to="/merlin"><img src="hat.jpg" alt="Witch Hat"/></Link>
                    <li><Link to="/">INÍCIO</Link></li>
                    <li><Link to="/cursos">CURSOS</Link></li>
                    <li><Link to="/meuscursos">MEUS CURSOS</Link></li>
                    <li><Link to="/feed">FEED</Link></li>
                </ul>
                <ul className="ul-2">
                    <li><Link to="/admin">ADM</Link></li>
                    <li><Link to="/logout">LOGOUT</Link></li>
                </ul>
            </div>
        </nav>
    )
}