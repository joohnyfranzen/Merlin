import {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { store } from "../..";
import Axios from "../../Utils/Axios"

export default function Register() {

    const navigate = useNavigate();
    const {http} = Axios();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [nick, setNick] = useState();
    
    
    const submitForm = () => {

        http.post('/register', {nome:name, email:email, nick:nick, senha:password}).then((res)=>{
            store.dispatch({type: 'SET_TOKEN', value:res.data.token})
            localStorage.setItem('token', res.data.token)
            store.dispatch({type: 'SET_ID', userId: res.data.id})
            localStorage.setItem('userId', res.data.id)
            navigate('/')
        })
    }

    return(
    <div className="father">
        <h1>MERLIN</h1>
        <hr/>
        <h4>Aonde a Magia Acontece</h4>
        <hr/>
        <div className="recent">
            <div>
                <div>
                    <h3>Registro</h3>
                    <div className="inputs">
                        <form>
                            <p>Nome</p>
                            <input type="name" className="form-control" placeholder="Nome" onChange={e=>setName(e.target.value)} id="name"/>
                            <br/>
                            <p>Email</p>
                            <input type="email" className="form-control" placeholder="Email" onChange={e=>setEmail(e.target.value)} id="email"/>
                            <br/>
                            <p>Nick</p>
                            <input type="name" className="form-control" placeholder="Nick" 
                                onChange={e=>setNick(e.target.value)}
                            id="name"/> 
                            <br/>
                            <p>Senha</p>
                            <input type="password" className="form-control" placeholder="Senha" onChange={e=>setPassword(e.target.value)} id="pwd"/>
                            <div className="submit-button">
                                <button type="button" onClick={submitForm}>Registrar</button>
                            </div>
                        </form>
                    </div>
                <br/>
                <div className="index"><p>Já tem conta? <a href="../login/login.html"> Logar </a></p></div>
                </div>
            </div>
        </div>
    </div>
        
    )
}