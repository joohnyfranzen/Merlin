import Axios from "../../../Utils/Axios";
import {  Link, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { store } from "../../..";



export default function Aulas() {

    const [aulas, setAula] = useState([]);

    const { http } = Axios(); 
    const { cursoId } = useParams();
    const { value } = store.getState().Auth;
    function getAula() {
        http.get(`/curso/${cursoId}/aula`).then((response) => {
                setAula(response.data);
            });
    }
    useEffect(() => {
        getAula()
    }, []);

    return(
        <div className="recent">
            <div> 
                <h3>Aulas</h3>
                {aulas.map((aula) =>{ return (
                <Link to={`/admin/${cursoId}/${aula.id}`}><p>{aula.nome}</p></Link>
                )})}
            </div>
            <Link to={`/admin/${cursoId}/novaaula`}><p>Nova aula</p></Link>
        </div>
    )
}