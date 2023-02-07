import Axios from "../../../Utils/Axios";
import { useNavigate, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { store } from "../../..";

export default function MeuCurso() {
  const [aulas, setAula] = useState([]);
  const [cursoData, setCursoData] = useState({});
  const navigate = useNavigate();
  const [respostas, setRespostas] = useState([]);
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
    http.get(`/${cursoId}/prova`, headers).then((response) => {
      setAula(response.data);
    });
  }
  useEffect(() => {
    getCurso();
    getAula();
  }, []);

  useEffect(() => {
    const resp = aulas.map(() => 1);
    setRespostas(resp);
  }, [aulas]);

  function handleRespost(e, index) {
    const respost = respostas;
    respost[index] = e.target.value;
    setRespostas(respost);
  }
  const submitForm = () => {
    const empty = respostas.find((element) => element === 1);
    if (empty) {
      return alert(
        "Existem perguntas sem respostas, porfavor nao se esqueça de preencher todos os campos"
      );
    }
    http
      .post("/prova", {
        respostas: respostas,
        aulas: aulas,
        userId: userId,
        cursoId: cursoId,
      })
      .then((response) => {
        alert(
          `Voce tirou nota ${response.data}, a maior nota será sempre a visivel.`
        );
      })
      .then(() => {
        navigate(`/meuscursos`);
      });
  };

  return (
    <div className="father">
      <div className="recent">
        <h3>Prova de {cursoData.nome}</h3>
        <div className="courses" id="meucurso">
          <div className="meucurso"></div>
        </div>
        {aulas?.map((aula, index) => {
          return (
            <div className="container-c" id="finalizada">
              <h3> {aula.pergunta} </h3>
              <div className="questao">
                <select
                  id="resposta"
                  onChange={(e) => {
                    handleRespost(e, index);
                  }}
                >
                  <option>Selecione uma resposta</option>
                  <option value={aula.resposta1}>{aula.resposta1}</option>
                  <option value={aula.resposta2}>{aula.resposta2}</option>
                  <option value={aula.resposta3}>{aula.resposta3}</option>
                  <option value={aula.resposta4}>{aula.resposta4}</option>
                  <option value={aula.resposta5}>{aula.resposta5}</option>
                </select>
              </div>
            </div>
          );
        })}
        <div className="button">
          <button
            onClick={() => {
              submitForm();
            }}
          >
            Finalizar Prova
          </button>
        </div>
      </div>
    </div>
  );
}
