import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { store } from "../../..";
import Axios from "../../../Utils/Axios";

export default function NovoCurso() {

    const navigate = useNavigate()
    const {http} = Axios();
    const nome = useRef();
    const professor = useRef();
    const descricao = useRef();
    const conquista = useRef();
    const titulo = useRef();
    const tier = useRef();
    const {value} = store.getState().Auth;

    const submitForm = () => {
        var url = '/curso'
        var params = {nome:nome.current.value, professor:professor.current.value, descricao:descricao.current.value, conquista:conquista.current.value, titulo:titulo.current.value, tier:tier.current.value }
        
        http.post(url, params).then(() => {
            navigate(`/admin`);
        })
    }

    return(
        <div>
            <div className="index">
                <div className="Posts">
                    <div className="login">
                        <h3>Novo Curso</h3>
                        <div className="inputs">
                            <form>
                                <p>Nome do Curso</p>
                                <input className="form-control" placeholder="Digite um nome" ref={nome}/>
                                <p>Professor</p>
                                <input className="form-control" placeholder="Digite um nome" ref={professor}/>
                                <p>Resumo do Curso</p>
                                <textarea className="form-control" size="300" placeholder="Digite um Resumo" ref={descricao}/>
                                <p>Conquista ao Finalizar Curso</p>
                                <input className="form-control" placeholder="Digite uma conquista" ref={conquista}/>
                                <p>Titolo ao Finalizar Curso</p>
                                <input className="form-control" placeholder="Digite um Titulo" ref={titulo}/>
                                <p>Tier do Curso</p>
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
                                    <button className="form-button" type="button" onClick={submitForm} >Criar Curso</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}