import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "../../../Utils/Axios";
import { store } from "../../..";

export default function Questoes() {

    const {cursoId, aulaId} = useParams()
    const {http} = Axios();
    const [questoes, setQuestoes] = useState([]);
    const { value } = store.getState().Auth;
    
    function getQuestoes() {
        http.get(`/questoes/${aulaId}`).then((response) => {
            setQuestoes(response.data);
         
        });
    }

    useEffect(() => {
        getQuestoes();
    }, []);
    return(
 
        <div className="recent">
            <h3>Questoes</h3>
            {questoes?.map((questao) => {
                return(
                    <h4><Link to={`/admin/${cursoId}/${aulaId}/${questao.id}`}>{questao.nome}</Link></h4>
                    )
            })}
            <Link to={`/admin/${cursoId}/${aulaId}/novaquestao`}><p>Nova Questao</p></Link>
        </div>
    )
}   