import Axios from "../../../Utils/Axios";
import { Link, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { store } from "../../..";

export default function Aula() {
  const [aula, setAula] = useState({});
  const { http } = Axios();
  const { cursoId, aulaId } = useParams();
  const { value } = store.getState().Auth;

  function getAula() {
    http.get(`/aula/${aulaId}`).then((response) => {
      setAula(response.data);
    });
  }
  useEffect(() => {
    getAula();
  }, [aulaId]);
  var left = aulaId;
  left--;
  var right = aulaId;
  right++;
  return (
    <div className="father">
      <div className="recent">
        <div className="courses aula" id="aula">
          <h1>Aula {aula.nome}</h1>
          <div>
            <h2>{aula.titulo}</h2>
            <div
              className="conteudo"
              dangerouslySetInnerHTML={{ __html: aula.conteudo }}
            ></div>
            <div className="media">
              <iframe
                width="730"
                height="415"
                src={aula.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="button">
          <button>
            <Link to={`/aula/${cursoId}/${aulaId}/questoes`}>
              Responder Questoes
            </Link>
          </button>
        </div>
        <div className="left">
          {" "}
          <Link to={`/aula/${cursoId}/${left}`}> Voltar </Link>{" "}
        </div>
        <div className="right">
          {" "}
          <Link to={`/aula/${cursoId}/${right}`}> Próximo </Link>{" "}
        </div>
      </div>
    </div>
  );
}
