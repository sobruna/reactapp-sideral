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
      <div className="d-flex d-inline-flex">
        <div className="">
          <div className="card cursos-logado border rounded bg-dark card text-white">
            <div className="card-body">
              {" "}
              <h5 className="card-title">Nome do Curso</h5>
              <p className="card-text">Descrição do curso</p>
              <a href="/" className="btn btn-primary">
                Acessar o curso
              </a>{" "}
            </div>
          </div>
          <div className="card cursos-logado border rounded bg-dark card text-white">
            <div className="card-body">
              {" "}
              <h5 className="card-title">Nome do Curso</h5>
              <p className="card-text">Descrição do curso</p>
              <a href="/" className="btn btn-primary">
                Acessar o curso
              </a>{" "}
            </div>
          </div>
          <div className="card cursos-logado border rounded bg-dark card text-white">
            <div className="card-body">
              {" "}
              <h5 className="card-title">Nome do Curso</h5>
              <p className="card-text">Descrição do curso</p>
              <a href="/" className="btn btn-primary">
                Acessar o curso
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </LoggedIn>
  );
}
