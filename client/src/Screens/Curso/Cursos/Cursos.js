import Axios from "../../../Utils/Axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cursos.css";

export default function Cursos() {
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
    <div className="cursos-bg">
      <div className="center">
        <h3>Todos Cursos</h3>
      </div>
      <div className="container">
        <div className="cursos">
          <div className="list-cursos">
            <div className="curso-container">
              {cursos?.map((curso) => {
                return (
                  <div>
                    <Link to={`/curso/${curso.id}`}>
                      <div className="item-container">
                        <div className="item-img">
                          <img src={curso.image} alt="Witch Hat" />
                        </div>
                        <div className="item-professor">
                          <h4>{curso.professor}</h4>
                          <h4>{curso.nome}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
