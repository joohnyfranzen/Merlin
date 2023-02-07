import Axios from "../../../Utils/Axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="father">
      <div className="recent">
        <h3>Todos Cursos</h3>
        <div className="courses">
          {cursos?.map((curso) => {
            return (
              <div className="course">
                <div>
                  <Link to={`/curso/${curso.id}`}>
                    <div className="item">
                      <img src={curso.image} alt="Witch Hat" />
                    </div>
                    <div className="item">
                      <h4>{curso.professor}</h4>
                    </div>
                    <div className="item">
                      <h4>{curso.nome}</h4>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
