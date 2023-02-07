import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../..";
import Axios from "../../Utils/Axios";


export default function Login() {
    
    
    const navigate = useNavigate()
    const {http} = Axios();

    const email = useRef(null)
    const password = useRef(null)

    const submitForm = () => {
        
        http.post('/login', {email:email.current.value, senha:password.current.value}).then((res)=>{
            store.dispatch({type: 'SET_TOKEN', value: res.data.token})
            localStorage.setItem('token', res.data.token)
            store.dispatch({type: 'SET_ID', userId: res.data.id})
            localStorage.setItem('userId', res.data.id)
            navigate('/')
        })
        
    }
    return(
        <div className="father login">
                <div>
        <h1>MERLIN</h1>
        <hr/>
        <h4>Aonde a Magia Acontece</h4>
        <hr/>
        <div className="recent">
            <div>
                <div>
                    <h3>Login</h3>
                    <div className="inputs">
                        <form>
                            <p>Email</p>
                            <input type="email" className="form-control" placeholder="Enter email" ref={email} id="email"/>
                            <br/>
                            <p>Senha</p>
                            <input type="password" className="form-control" placeholder="Enter password" ref={password} id="pwd"/>
                        <div className="submit-button">
                            <button type="button" onClick={submitForm}>LOGAR</button>
                        </div>
                        </form>
                    </div>
                    <br/>
                    <div className="index"><p>Ainda nao tem conta? <Link to="../registro"> Registrar </Link></p></div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}