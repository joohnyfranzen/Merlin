import Axios from "../../../Utils/Axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { store } from "../../..";
import "./MeusCursos.css";

export default function Cursos() {
  const { http } = Axios();

  const [cursos, setCursos] = useState([]);
  const [finalizados, setFinalizados] = useState([]);
  const [nota, setNota] = useState([]);

  var userId = store.getState().userId;
  userId = userId.userId;

  function getCursos() {
    http.get(`/meuscursos/${userId}`).then((response) => {
      setCursos(response.data);
    });
  }
  function getFinalizados() {
    http.get(`/finalizados/${userId}`).then((response) => {
      setFinalizados(response.data[0]);
      setNota(response.data[1]);
    });
  }
  useEffect(() => {
    getFinalizados();
    getCursos();
  }, []);
  console.log(finalizados);
  return (
    <div className="cursos-bg">
      <div className="center">
        <h3>Meus Cursos</h3>
      </div>
      <div className="container">
        <div className="meuscursos">
          <div className="list-meuscursos">
            {cursos?.map((curso, index) => {
              return finalizados &&
                finalizados[index] &&
                (finalizados[index].id = curso.id) ? (
                <Link to={`/meucurso/${curso.id}`}>
                  <div className="item-img">
                    {" "}
                    <img src={curso.image} alt="Witch Hat" />
                  </div>
                  <div className="item-professor">
                    <h4>{curso.professor}</h4>
                    <h4>{curso.nome}</h4>
                  </div>
                  <div className="item">
                    <h4>Curso Finalizado com Nota {nota[index].nota}</h4>
                  </div>
                  <Link to={`/certificado/${curso.id}`}>
                    <p>Obter Certificado</p>
                  </Link>
                </Link>
              ) : (
                <div className="item-container">
                  <Link className="link-container" to={`/meucurso/${curso.id}`}>
                    <div className="item-img">
                      <img src={curso.image} alt="Witch Hat" />
                    </div>
                    <div className="item-professor">
                      <h4>{curso.professor}</h4>
                      <h4>{curso.nome}</h4>
                      <h4>Em Progresso</h4>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
