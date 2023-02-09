import React from "react";

import Default from "../Templates/Default";
import LoggedIn from "../Templates/LoggedIn";
import "../../Style/Style.css";
import "../../Style/Cursos.css";
import "../../Style/Login.css";
import "../../Style/TermosDeUso.css";
import logo from "../../Images/icon.png";

//<h2 className="py-5 text-center">Meus Cursos</h2>

export default function TrabalheConosco() {
  return (
    <LoggedIn>
      <div
        className="d-flex d-inline-flex flex-column"
        style={{
          marginLeft: "20%",
        }}
      >
        <div className="d-flex d-inline-flex border-bottom border-white mb-5">
          <h1 className="text-center">Meus Cursos</h1>
        </div>
        <div className="card m-2 p-2 cursos-logado border rounded bg-dark card text-white">
          <div className="card-body">
            {" "}
            <h5 className="card-title text-center">Análise de mídia</h5>
            <p className="card-text text-primary">Status:</p>
            <p className="card-text">Em andamento</p>
            <a href="/" className="btn btn-primary">
              Acessar o curso
            </a>{" "}
          </div>
        </div>
        <div className="card m-2 p-2 cursos-logado border rounded bg-dark card text-white">
          <div className="card-body">
            {" "}
            <h5 className="card-title text-center">
              Desenvolvedor de Jogos - Unity
            </h5>
            <p className="card-text text-primary">Status:</p>
            <p className="card-text">Em andamento</p>
            <a href="/" className="btn btn-primary">
              Acessar o curso
            </a>{" "}
          </div>
        </div>
        <div className="card m-2 p-2 cursos-logado border rounded bg-dark card text-white">
          <div className="card-body">
            {" "}
            <h5 className="card-title text-center">Produtos Digitais</h5>
            <p className="card-text text-info">Status:</p>
            <p className="card-text">Não foi iniciado</p>
            <a href="/" className="btn btn-primary">
              Acessar o curso
            </a>{" "}
          </div>
        </div>
      </div>
    </LoggedIn>
  );
}
