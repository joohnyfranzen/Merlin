import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "../../../Utils/Axios";
import { store } from "../../..";

export default function EditarQuestao() {
  const { aulaId, cursoId, questaoId } = useParams();
  const navigate = useNavigate();
  const { http } = Axios();
  const resposta = useRef();

  const { userId } = store.getState().userId;
  const [questao, setQuestao] = useState({});

  function getQuestao() {
    http.get(`/questao/${questaoId}`).then((response) => {
      setQuestao(response.data);
    });
  }
  useEffect(() => {
    getQuestao();
  }, []);

  const submitForm = () => {
    var yourSelect = document.getElementById("resposta");
    var selected = yourSelect.options[yourSelect.selectedIndex].value;
    if (selected == questao.correta) {
      alert("Parabens, voce acertou");
      function submit() {
        var url = `/questao`;
        var params = { userId: userId, QuestaoId: questaoId, aulaId: aulaId };
        http.post(url, params).then(() => {
          navigate(`/aula/${cursoId}/${aulaId}/questoes`);
        });
      }
      submit();
    } else {
      alert("Voce errou! tente novamente!");
    }
  };
  return (
    <div className="father">
      <div className="recent">
        <div className="questoes" id="aula">
          <h4>Questao {questao.nome}</h4>
          <form>
            <h3>{questao.pergunta}</h3>
            <div className="questao">
              <select id="resposta" current={resposta}>
                <option>{questao.resposta1}</option>
                <option>{questao.resposta2}</option>
                <option>{questao.resposta3}</option>
                <option>{questao.resposta4}</option>
                <option>{questao.resposta5}</option>
              </select>
            </div>
            <button
              className="form-button"
              type="button"
              onClick={() => {
                submitForm();
              }}
            >
              Responder Pergunta
            </button>
          </form>
        </div>
        <Link to={`/aula/${cursoId}/${aulaId}`}>Voltar para o conteúdo</Link>
      </div>
    </div>
  );
}
