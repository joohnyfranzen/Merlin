import Axios from "../../../Utils/Axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { React, useEffect, useRef, useState } from "react";
import { store } from "../../..";

export default function EditarAula() {

    const [aula, setAula] = useState({});
    const navigate = useNavigate()
    const {http} = Axios(); 
    const { cursoId, aulaId } = useParams();
    const {value} = store.getState().Auth;

    function getAula() {
        http.get(`/aula/${aulaId}`).then((response) => {
                setAula(response.data);
            });
    }
    useEffect(() => {
        getAula()
    }, []);
    const nome = useRef();
    const titulo = useRef();
    const conteudo = useRef();
    const video = useRef();
    
    const submitForm = () => {
        
        http.patch(`/aula/${aulaId}`, {nome:nome.current.value, titulo:titulo.current.value, conteudo:conteudo.current.value, titulo:titulo.current.value, video:video.current.value}).then(() => {
            navigate(`/admin/${cursoId}/aulas`);
        })
    }

    return(

            <div>
                <div>
                    <h3>Editar Aula</h3>
                    <div>
                        <form>
                            <p>Aula Número {aula.nome}</p>
                                <select ref={nome} className="form-select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                </select>
                                <p>titulo</p>
                                <input defaultValue={aula.titulo} className="form-control" placeholder="Digite um nome" ref={titulo}/>
                                <p>Resumo do Curso</p>
                                <textarea defaultValue={aula.conteudo} className="form-control" size="300" placeholder="Digite um Resumo" ref={conteudo}/>
                                <p>video ao Finalizar Curso</p>
                                <input className="form-control" defaultValue={aula.video} ref={video}/>
                                <button className="form-button" type="button" onClick={submitForm}> Editar Aula Curso</button>
                        </form>
                    </div>
                </div>
                <Link to={`/admin/${cursoId}/${aulaId}/questoes`}><p>Questoes</p></Link>
            </div>

    )
}