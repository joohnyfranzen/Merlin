import Axios from "../../Utils/Axios";
import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../..";
import "./Feed.css"

export default function Feed() {
    const {http} = Axios();
    const navigate = useNavigate();
    const [usersCursos, setUsersCursos] = useState([]);
    const [users, setUsers] = useState([]);
    const [cursos, setCursos] = useState([]);
    const {value} = store.getState().Auth;   
    var userId = store.getState().userId;
    userId = userId.userId
    console.log(usersCursos)
     function getUsersCursos() {
        http.get(`/feeduser`).then((response) => {
            setUsersCursos(response.data);
        });
    }
    function getCursos() {
        http.get(`/curso`).then((response) => {
            setCursos(response.data);
        });
    }
    function getUsers() {
        http.get(`/user`).then((response) => {
            setUsers(response.data);
        });
    }
    useEffect(() => {
        getUsersCursos()
        getCursos()
        getUsers()
    }, []);

    return (
        <div className="father">
                    <div className="recent">
            <h3>Conquistas Recentes</h3>
            <div className="courses">
                {usersCursos?.map(
                    (userCurso, index) => {
                        const user = users[index]
                        const curso = cursos[index]
                        return users[index] && cursos[index]  ?
                        (
                            <div className="course">
                                <div className="item" id="feed">
                                    <h3>{user.nome} Conquistou {curso.conquista} Obtendo o titulo de {curso.titulo} de Nível {curso.tier}</h3>
                                </div>                    
                            </div> 
                        ) : (null)
                    }) 
                }
            </div>
        </div>
        </div>
    )
}