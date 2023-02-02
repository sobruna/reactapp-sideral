import React from "react";

import Default from "../Templates/Default";

import "../../Style/Style.css";
import "../../Style/Cadastro.css";
import "../../Style/Cursos.css";
import "../../Style/Login.css";
import "../../Style/TermosDeUso.css";

import logo from "../../Images/icon.png";

export default function Cursos() {
  return (
    <Default>
      <main className="container-fluid ">
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 border-bottom">Cursos</h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h4 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Full Stack Development
                  </h4>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logo}
                        alt="Logo Sideral"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                    </li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h4 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Produtos Digitais
                  </h4>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logo}
                        alt="Logo Sideral"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                    </li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h4 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Micro curso - Análise de mídia
                  </h4>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logo}
                        alt="Logo Sideral"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                    </li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h4 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Desenvolvedor de Jogos - Unity
                  </h4>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logo}
                        alt="Logo Sideral"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                    </li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h4 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    User experience Design
                  </h4>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logo}
                        alt="Logo Sideral"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                    </li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h4 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Data Science & Machine Learning
                  </h4>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={logo}
                        alt="Logo Sideral"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                    </li>
                    <li className="d-flex align-items-center"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Default>
  );
}
