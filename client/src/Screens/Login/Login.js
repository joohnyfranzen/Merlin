import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../..";
import Axios from "../../Utils/Axios";
import Loading from "../../Components/Loading/Loading";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { http } = Axios();
  const [loading, setLoading] = useState(false);
  const email = useRef(null);
  const password = useRef(null);

  const submitForm = () => {
    setLoading(true);
    function submit() {
      http
        .post("/login", {
          email: email.current.value,
          senha: password.current.value,
        })
        .then((res) => {
          store.dispatch({ type: "SET_TOKEN", value: res.data.token });
          localStorage.setItem("token", res.data.token);
          store.dispatch({ type: "SET_ID", userId: res.data.id });
          localStorage.setItem("userId", res.data.id);
          setLoading(false);
          navigate("/");
        });
    }

    setTimeout(submit, 3000);
  };
  return (
    <div className="login-page">
      <div className="voltar-home">
        <Link to="../">
          <img src="arrow-left.png"></img>
        </Link>
      </div>
      <div className="login-container">
        <div className="login-container-inside">
          <div className="logo">
            <img src="merlin-logo.png"></img>
          </div>
          <form className="login-form">
            <input
              type="email"
              placeholder="Email de usuario"
              ref={email}
              id="email"
            />
            <input
              type="password"
              placeholder="Sua senha"
              ref={password}
              id="pwd"
            />
            <button className="submit-login" type="button" onClick={submitForm}>
              LOGAR
            </button>
          </form>
          <div className="nova-conta">
            <p>
              Ainda nao tem conta? <Link to="../registro"> Registrar </Link>
            </p>
          </div>
        </div>
      </div>
      {loading ? <Loading /> : <></>}
    </div>
  );
}
