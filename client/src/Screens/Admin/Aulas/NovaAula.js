import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { store } from "../../..";
import Axios from "../../../Utils/Axios";

export default function NovoCurso() {

    const { cursoId } = useParams()
    const navigate = useNavigate()
    const {http} = Axios();
    const nome = useRef();
    const titulo = useRef();
    const conteudo = useRef();
    const video = useRef();
    const {value} = store.getState().Auth;
    const submitForm = () => {

        var url = `aula/${cursoId}`
        var params = {nome:nome.current.value, titulo:titulo.current.value, conteudo:conteudo.current.value, video:video.current.value, cursoId:cursoId}
        var headers = {headers: { "x-access-token" : `${value}`}}
        http.post(url, params, headers).then(() => {
            navigate(`/admin/${cursoId}/aulas`);
            
        })
    }

    return(
        <div>
            <div className="index">
                <div className="Posts">
                    <div className="login">
                        <h3>Nova Aula</h3>
                        <div className="inputs">
                            <form>
                            <p>Aula Número</p>
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
                                <input className="form-control" placeholder="Digite um nome" ref={titulo}/>
                                <p>Resumo do Curso</p>
                                <textarea className="form-control" size="300" placeholder="Digite um Resumo" ref={conteudo}/>
                                <p>video ao Finalizar Curso</p>
                                <input className="form-control" placeholder="Digite uma video" ref={video}/>
                                <p>Titolo ao Finalizar Curso</p>
                                <input className="form-control" placeholder="Digite um Titulo" ref={titulo}/>
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