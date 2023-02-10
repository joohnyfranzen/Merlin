import "./Conta.css";
import { store } from "../..";
import Axios from "../../Utils/Axios";
import React, { useEffect, useState } from "react";
export default function Conta() {
  const { value } = store.getState().Auth;
  const { userId } = store.getState().userId;
  const { http } = Axios();

  const [username, setUsername] = useState("");

  function getUser() {
    http.get(`/user/${userId}`).then((response) => {
      setUsername(response.data);
    });
  }
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="father">
      <div className="recent">
        <div className="configuraçoes">
          <ul className="config">
            <li>Configuraçoes da Conta</li>
            <li>Pagamento</li>
            <li>Meus Cursos</li>
            <li>Certificado</li>
          </ul>
          <ul className="config-options">
            <h4>Minha Conta</h4>
            <li>{username.nome}</li>
            <li>
              <button className="config-button">Alterar</button>
            </li>
            <li>
              {username.email} <button>Alterar</button>
            </li>
            <li>
              {username.nick} <button>Alterar</button>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
