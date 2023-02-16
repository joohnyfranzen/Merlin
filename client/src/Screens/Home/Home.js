import React from "react";
import Axios from "../../Utils/Axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const { http } = Axios();
  const [cursos, setCursos] = useState([]);
  function getCursos() {
    http.get("/curso").then((response) => {
      setCursos(response.data);
    });
  }
  useEffect(() => {
    getCursos();
  }, []);

  return (
    <div className="father" id="homepage">
      <div className="recent">
        <div className="courses"></div>
      </div>
    </div>
  );
}
