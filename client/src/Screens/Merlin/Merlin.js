
import "./Merlin.css"
import { store } from "../..";
import { useEffect, useState } from "react";
import Axios from "../../Utils/Axios";

export default function Merlin() {
    const {value} = store.getState().Auth;
    const {userId} = store.getState().userId;
    const [finalizados, setFinalizados] = useState([]);
    const {http} = Axios();

    function getFinalizados() {
        http.get(`/finalizados/${userId}`).then((response) => {
            setFinalizados(response.data);
        });
    }
    useEffect(() => {
        getFinalizados()
    }, []);
    return(
        <div className="main">
            <div className="merlin">
                <div className="container-e">
                    <div className="navbar-e">
                        <div className="navbar-e-div">
                            <h5>PERFIL</h5>
                            <h5>PERFIL</h5>
                            <h5>PERFIL</h5>
                            <h5>PERFIL</h5>
                            <h5>PERFIL</h5>
                        </div>
                    </div>
                    <div className="container-f">
                            {finalizados.map((finalizado) => {
                                return (
                                    <div>
                                        {finalizado.nome}
                                        {finalizado.tier}
                                        {finalizado.createdAt}
                                    </div>)
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}