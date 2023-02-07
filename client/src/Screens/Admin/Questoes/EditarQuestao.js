import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../../Utils/Axios";
import { store } from "../../..";

export default function EditarQuestao() {

    const { aulaId, cursoId, questaoId } = useParams()
    const navigate = useNavigate()
    const {http} = Axios();
    const pergunta = useRef();
    const resposta1 = useRef();
    const resposta2 = useRef();
    const resposta3 = useRef();
    const resposta4 = useRef();
    const resposta5 = useRef();
    const nome = useRef();
    const correta = useRef();

    const {value} = store.getState().Auth;
    const [questao, setQuestao] = useState({});

    function getQuestao() {
        http.get(`/questao/${questaoId}`).then((response) => {
                setQuestao(response.data);
            });
    }
    useEffect(() => {
        getQuestao()
    }, []);

    const submitForm = () => {
        var url = `questao/${questaoId}`
        var params = {nome:nome.current.value, pergunta:pergunta.current.value, resposta1:resposta1.current.value, resposta2:resposta2.current.value, resposta3:resposta3.current.value, resposta4:resposta4.current.value, resposta5:resposta5.current.value, correta:correta.current.value, aulaId: aulaId, status: 0}
        http.patch(url, params).then(() => {
            navigate(`/admin/${cursoId}/${aulaId}/questoes`);   
        })
    }
    return(
        <div>
            <h3>Nova Questao</h3>
            <form>
                <p>Número da Questao </p>
                <input defaultValue={questao.nome} className="form-control" placeholder="Digite uma pergunta" ref={nome}/>
                <p>Pergunta</p>
                <input defaultValue={questao.pergunta} className="form-control" placeholder="Digite uma pergunta" ref={pergunta}/>
                <p>Resposta 1</p>
                <input defaultValue={questao.resposta1} className="form-control" placeholder="Digite uma resposta" ref={resposta1}/>
                <p>Resposta 2</p>
                <input defaultValue={questao.resposta2} className="form-control" placeholder="Digite uma resposta" ref={resposta2}/>
                <p>Resposta 3</p>
                <input defaultValue={questao.resposta3} className="form-control" placeholder="Digite uma resposta" ref={resposta3}/>
                <p>Resposta 4 </p>
                <input defaultValue={questao.resposta4} className="form-control" placeholder="Digite uma resposta" ref={resposta4}/>
                <p>Resposta 5</p>
                <input defaultValue={questao.resposta5} className="form-control" placeholder="Digite uma resposta" ref={resposta5}/>
                <button className="form-button" type="button" onClick={submitForm}>Criar Pergunta</button>
                <p>Qual a correta?</p>
                <select defaultValue={questao.correta} ref={correta}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </form>
        </div>
    )
}