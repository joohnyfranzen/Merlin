import Axios from "../../../Utils/Axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { React, useEffect, useRef, useState } from "react";
import { store } from "../../..";



export default function EditarCurso() {

    const [cursoData, setCursoData] = useState({});
    const [aulaData, setAulaData] = useState({});
    const navigate = useNavigate()
    const {http} = Axios(); 
    const  id  = useParams().cursoId;
    const {value} = store.getState().Auth;


    function getCurso() {
        http.get(`/curso/${id}`, {headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${value}`}}).then((response) => {
                setCursoData(response.data);

            });
    }
    function getAula() {
        http.get(`/curso/${id}/aula`, {headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${value}`}}).then((response) => {
                setAulaData(response.data);
            });
    }   
    useEffect(() => {
        getCurso();
        getAula()
    }, []);

    const nome = useRef();
    const professor = useRef();
    const descricao = useRef();
    const conquista = useRef();
    const titulo = useRef();
    const tier = useRef();
    const submitForm = () => {
        
        http.put(`/curso/${id}`, {nome:nome.current.value, professor:professor.current.value, descricao:descricao.current.value, titulo:titulo.current.value, conquista:conquista.current.value, tier:tier.current.value}).then(() => {
            navigate(`/admin`);
        })
    }

    return(
        <div className="index">
            <div>
                <h3>Image</h3>
                <input type="file" name="file"/>
                <button></button>
            </div>
            <div>
                <div>
                    <form>
                        <h3>Curso de</h3>
                        <input className="form-control" defaultValue={cursoData.nome} ref={nome}></input>
                        <h3>Professor</h3>
                        <input className="form-control" defaultValue={cursoData.professor} ref={professor}></input>
                        <h3>Resumo do curso</h3>
                        <textarea className="form-control" defaultValue={cursoData.descricao} ref={descricao}></textarea>
                        <h3>Descricao</h3>
                        <input className="form-control" defaultValue={cursoData.conquista} ref={conquista} size="300" placeholder="Digite um Resumo"/>
                        <h3>Conquista</h3>
                        <input className="form-control" defaultValue={cursoData.titulo} ref={titulo}></input>
                        <h3>Tier do Curso {cursoData.tier}</h3>
                        <select ref={tier} className="form-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>Max</option>
                        </select>
                        <div className="submit-button">
                            <button className="form-button" type="button" onClick={submitForm} >Editar Curso</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="aulas">
                    <Link to={`/admin/${id}/aulas`}><p className="novo-curso">Aulas</p></Link>
                </div>
            </div>
        </div>
    )
}