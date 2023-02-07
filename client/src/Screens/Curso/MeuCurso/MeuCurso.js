import Axios from "../../../Utils/Axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { store } from "../../..";

export default function MeuCurso() {
  const [aulas, setAula] = useState([]);
  const [cursoData, setCursoData] = useState({});
  const [finalizado, setFinalizado] = useState([]);
  const navigate = useNavigate();
  const { http } = Axios();
  const { cursoId } = useParams();
  const { value } = store.getState().Auth;
  const { userId } = store.getState().userId;
  var headers = { headers: { "x-access-token": `${value}` } };

  function getCurso() {
    http.get(`/curso/${cursoId}`, headers).then((response) => {
      setCursoData(response.data);
    });
  }
  function getAula() {
    http.get(`/curso/${cursoId}/aula`, headers).then((response) => {
      setAula(response.data);
    });
  }
  function getFinalizado() {
    http.get(`/meucurso/${userId}/${cursoId}`, headers).then((response) => {
      setFinalizado(response.data);
    });
  }
  useEffect(() => {
    getCurso();
    getAula();
    getFinalizado();
  }, []);
  const submitForm = () => {
    alert(
      "A prova pode ser realizada uma vez a cada 2 dias, boa sorte!!!"
    ).then(() => {
      navigate(`/meucurso/${cursoId}/prova`);
    });
  };

  return (
    <div className="father">
      <div className="recent">
        <h3>Curso de {cursoData.nome}</h3>
        <div className="courses" id="meucurso">
          <div className="meucurso">
            <div className="item">
              <img src={cursoData.image} alt="Witch Hat" />
            </div>
            <div className="item">
              <h4>
                <span className="naming">Professor</span> {cursoData.professor}
              </h4>
            </div>
            <div className="item">
              <h4>
                <span className="naming">Curso de</span> {cursoData.nome}
              </h4>
            </div>
            <div className="item">
              <h4>
                <span className="naming">Descriçao</span> {cursoData.descricao}
              </h4>
            </div>
            <div className="item">
              <h4>
                <span className="naming">Nivel de Dificuldade</span>{" "}
                {cursoData.tier}
              </h4>
            </div>
            <div className="item">
              <h4>
                <span className="naming">Titulo</span> {cursoData.titulo}
              </h4>
            </div>
            {aulas.length === finalizado.length ? (
              <div className="button">
                <button
                  onClick={() => {
                    submitForm();
                  }}
                >
                  Relizar prova
                </button>
              </div>
            ) : (
              <>
                <Link to={`/aula/${cursoId}/${aulas[0].id}`}>
                  <h3>Iniciar Curso</h3>
                </Link>
              </>
            )}
          </div>
        </div>
        {finalizado !== [] ? (
          <>
            {aulas?.map((aula, index) => {
              if (!finalizado.length > 0) return;
              const filterFinalizado = finalizado
                .map((finaliz) => finaliz.id)
                .includes(aula.id);
              return filterFinalizado ? (
                <div className="container-c" id="finalizada">
                  <Link to={`/aula/${cursoId}/${aula.id}`}>
                    <h3>Aula Numero {aula.nome} Finalizada</h3>
                  </Link>
                </div>
              ) : (
                <div className="container-c" id="pendente">
                  <Link to={`/aula/${cursoId}/${aula.id}`}>
                    <h3>Aula Numero {aula.nome} Pendente</h3>
                  </Link>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
