import React from "react";
import Axios from "../../Utils/Axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

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
                O <span id="Futuro">Futuro</span> já está chegando!
              </h2>
            </div>
            <div className="homepage-container-a homepage-container-b">
              <h4>Por quanto tempo pretende ficar esperando?</h4>
            </div>
            <div className="courses"></div>
          </div>
        </div>
      </section>
      <section id="sobre">
        <div id="background-continued"></div>
      </section>
      <section id="ofertas">HELLO WORLD 2</section>
    </div>
  );
}
