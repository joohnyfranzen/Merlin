import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../../Utils/Axios";
import "./Admin.css"


export default function AdminNav() {

    const {http} = Axios();
    const [cursos, setCursos] = useState([]);
    function getCursos() {
        http.get('/curso', ).then((response) => {
            setCursos(response.data);
        });
    }

    useEffect(() => {
        getCursos();
    }, []);
    return(
        <div className="recent">
            <h3>Cursos</h3>
            {cursos.map((curso) => {
                return(
                    <h4><Link to={`/admin/${curso.id}`}>{curso.nome}</Link></h4>
                    )
            })}
            <Link to={"/admin/novocurso"}><p>Novo curso</p></Link>
        </div>
    )
}