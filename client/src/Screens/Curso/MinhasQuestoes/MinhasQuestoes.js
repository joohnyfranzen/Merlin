import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "../../../Utils/Axios";
import { store } from "../../..";

export default function Questoes() {

    const {cursoId, aulaId} = useParams()
    const {http} = Axios();
    const [questoes, setQuestoes] = useState([]);
    const [respondidas, setRespondidas] = useState([]);
    const navigate = useNavigate()
    const { value } = store.getState().Auth;
    const  {userId} = store.getState().userId;

    function getRespondidas() {
        http.get(`/questoes/${aulaId}/${userId}/respondidas`).then((response) => {
            setRespondidas(response.data);   
        });
    }
    function getQuestoes() {
        http.get(`/questoes/${aulaId}`).then((response) => {
            setQuestoes(response.data);   
        });
    }
    useEffect(() => {
        getRespondidas();
        getQuestoes();
    }, []);
    const submitForm = () => {   
            var url = '/associate/aula'
            var params = {userId: userId, aulaId: aulaId}
            http.post(url, params).then(() => {
                console.log( params )
                navigate(`/meucurso/${cursoId}`)
            })    
    }
    return(
        <div className="father">
             <div className="recent" id="aula">
            <div className="questoes">
                <h3>Questoes</h3>
                {questoes?.map((questao, index) => {
                    return respondidas && respondidas[index] && (respondidas[index].id = questao.id) ? (
                        <div className="container-d" id="respondidas">
                            <Link to={`/aula/${cursoId}/${aulaId}/${questao.id}`}><h4>Questao &nbsp; {questao.nome}&nbsp; respondida</h4></Link>
                        </div>
                    ) : (
                        <div className="container-d" id="pendentes">
                            <Link to={`/aula/${cursoId}/${aulaId}/${questao.id}`}><h4>Questao &nbsp;{questao.nome}&nbsp; pendente</h4></Link>
                        </div>

                    )
                })}
                {(questoes.length == respondidas.length) ? 
                (
                    <div>
                        <button onClick={() => {submitForm()}}>
                            Finalizar Aula
                        </button>
                    </div>
                ) : (null)
            }
        </div>
        </div>
        </div>
    )
}   