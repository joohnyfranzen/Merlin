import React from "react";
import Axios from "../../Utils/Axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoggedHome.css";
import Navbar from "../../Components/Navbar/UnloggedNavbar";

export default function Home() {
  const { http } = Axios();
  const [cursos, setCursos] = useState([]);
  function getCursos() {
    http.get("/curso").then((response) => {
      setCursos(response.data);
    });
  }
  useEffect(() => {
    getCursos();
  }, []);

  return (
    <div>
      <section id="home">
        <div id="homepage">
          <div>
            <div className="homepage-container-a">
              <h2>
                O <span id="Futuro">Futuro</span> já chegou!
              </h2>
            </div>
            <div className="homepage-container-a homepage-container-b">
              <h4>E você faz parte dele!</h4>
            </div>
            <div className="courses"></div>
          </div>
        </div>
      </section>
      <section id="sobre">
        <div id="homepage-2">
          <div id="box-about">
            <p>OLA MUNDO, making a 2d game javascript based</p>
          </div>
        </div>
      </section>
      <section id="ofertas">
        <div id="homepage-3"></div>
      </section>
    </div>
  );
}
