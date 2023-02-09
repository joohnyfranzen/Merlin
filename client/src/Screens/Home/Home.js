import React from "react";
import Axios from "../../Utils/Axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../..";

export default function Home() {
  const { http } = Axios();
  const navigate = useNavigate();
  const [cursos, setCursos] = useState([]);
  const { value } = store.getState().Auth;
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
        <h3>Ultimos Cursos Adicionados</h3>
        <div className="courses">
          {cursos?.map((curso) => {
            return (
              <div className="course">
                <div>
                  <Link to={`/curso/${curso.id}`}>
                    <div className="item">
                      <img
                        src={typeof curso.image === "string" ? curso.image : ""}
                        alt="Witch Hat"
                      />
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
