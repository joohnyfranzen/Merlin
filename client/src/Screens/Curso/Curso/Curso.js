import Axios from "../../../Utils/Axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { React, useEffect, useRef, useState } from "react";
import { store } from "../../..";
import "./Curso.css";

export default function Curso() {
  const [cursoData, setCursoData] = useState({});
  const navigate = useNavigate();
  const { http } = Axios();
  const { cursoId } = useParams();
  const { value } = store.getState().Auth;
  const { userId } = store.getState().userId;
  function getCurso() {
    http
      .get(`/curso/${cursoId}`, {
        headers: {
          "Content-type": "application/json",
          "x-access-token": `${value}`,
        },
      })
      .then((response) => {
        setCursoData(response.data);
      });
  }

  useEffect(() => {
    getCurso();
  }, []);

  const submitForm = () => {
    http
      .post(
        "/usercurso",
        { cursoId: cursoId, userId: userId },
        {
          headers: {
            "Content-type": "application/json",
            "x-access-token": `${value}`,
          },
        }
      )
      .then(() => {
        navigate(`/meuscursos`);
      });
  };

  return (
    <div className="cursos-bg">
      <div className="center-curso">
        <h3>Curso de {cursoData.nome}</h3>
      </div>
      <div className="container">
        <div className="curso">
          <div className="list-curso">
            <div className="item-container-curso">
              <div className="item-img">
                <img src={cursoData.image} alt="Witch Hat" />
              </div>
              <div className="item-curso">
                <h4>Professor {cursoData.professor}</h4>
                <h4>{cursoData.nome}</h4>
                <h4>{cursoData.descricao}</h4>
                <h4>Nivel de Dificuldade {cursoData.tier}</h4>
                <h4>Titulo {cursoData.titulo}</h4>
              </div>
              <div className="button-curso">
                <button
                  type="button"
                  onClick={() => {
                    submitForm();
                  }}
                >
                  Matricular
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
