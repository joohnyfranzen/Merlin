import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../..";
import Loading from "../../Components/Loading/Loading";
import Axios from "../../Utils/Axios";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const { http } = Axios();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [nick, setNick] = useState();
  const [loading, setLoading] = useState(false);
  const submitForm = () => {
    setLoading(true);
    http
      .post("/register", {
        nome: name,
        email: email,
        nick: nick,
        senha: password,
      })
      .then((res) => {
        store.dispatch({ type: "SET_TOKEN", value: res.data.token });
        localStorage.setItem("token", res.data.token);
        store.dispatch({ type: "SET_ID", userId: res.data.id });
        localStorage.setItem("userId", res.data.id);
        setLoading(false);
        navigate("/");
      });
  };

  return (
    <div className="register-page">
      <div className="voltar-home">
        <Link to="../">
          <img src="arrow-left.png"></img>
        </Link>
      </div>
      <div className="register-container">
        <div className="register-container-inside">
          <div className="logo">
            <img src="merlin-logo.png"></img>
          </div>
          <form className="register-form">
            <input
              type="name"
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
            <input
              type="email"
              placeholder="Email de usuario"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
            <input
              type="name"
              placeholder="Seu Apelido"
              onChange={(e) => setNick(e.target.value)}
              id="name"
            />
            <input
              type="password"
              placeholder="Sua Senha"
              onChange={(e) => setPassword(e.target.value)}
              id="pwd"
            />
            <button
              className="submit-register"
              type="button"
              onClick={submitForm}
            >
              REGISTRAR
            </button>
          </form>

          <div className="nova-conta">
            <p>
              Ainda nao tem conta? <Link to="../login"> Logar </Link>
            </p>
          </div>
        </div>
      </div>
      {loading ? <Loading /> : <></>}
    </div>
  );
}
