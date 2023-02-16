import "./Merlin.css";
import { store } from "../..";
import { useEffect, useState } from "react";
import Axios from "../../Utils/Axios";

export default function Merlin() {
  const { value } = store.getState().Auth;
  const { userId } = store.getState().userId;
  const [finalizados, setFinalizados] = useState([]);
  const { http } = Axios();

  function getFinalizados() {
    http.get(`/finalizados/${userId}`).then((response) => {
      setFinalizados(response.data);
    });
  }
  useEffect(() => {
    getFinalizados();
  }, []);
  return (
    <div className="main">
      <div className="merlin">
        <iframe
          title="This is a unique title"
          src="http://ragnarok.merlinacademy.com.br"
        ></iframe>
      </div>
    </div>
  );
}
