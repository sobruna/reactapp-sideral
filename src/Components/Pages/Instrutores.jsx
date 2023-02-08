import React from "react";

import Default from "../Templates/Default";

import "../../Style/Style.css";
import "../../Style/Cursos.css";
import "../../Style/Login.css";
import "../../Style/TermosDeUso.css";

import instrutor1 from "../../Images/Instrutores/instrutor_01.jpg";
import instrutor2 from "../../Images/Instrutores/instrutor_02.jpg";
import instrutor3 from "../../Images/Instrutores/instrutor_03.jpg";
import instrutor4 from "../../Images/Instrutores/instrutor_04.jpg";

export default function Instrutores() {
  return (
    <Default>
      <div className="py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light text-white">
                Nossos Instrutores
              </h2>
              <h4 className="font-italic text-white">
                São mais 1000 instrutores prontos pra te ajudar!
              </h4>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src={instrutor1}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                ></img>
                <h5 className="mb-0">Till Lindemann</h5>
                <span className="small text-uppercase text-muted">
                  Fundador da Sideral, desenvolvedor desde 1988 e atual Pyro
                  Tech Lead da Rammstein
                </span>

                <a
                  href="https://www.youtube.com/watch?v=Dv6Th7kJ64Q&ab_channel=RammsteinOfficial"
                  className="btn btn-light px-5 rounded-pill shadow-sm mt-3"
                >
                  Saiba mais
                </a>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src={instrutor2}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                ></img>
                <h5 className="mb-0">Hideo Kojima</h5>
                <span className="small text-uppercase text-muted">
                  Designer desde desde 1986, atualmente é dono de seu próprio
                  estúdio, a Kojima Productions
                </span>

                <a
                  href="https://www.youtube.com/watch?v=USgMmBO2Z18&ab_channel=KOJIMAPRODUCTIONS"
                  className="btn btn-light px-5 rounded-pill shadow-sm mt-3"
                >
                  Saiba mais
                </a>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src={instrutor3}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                ></img>
                <h5 className="mb-0">Chuu</h5>
                <span className="small text-uppercase text-muted">
                  Você viu essa mulher?<br></br>
                  전부 다 줄게 take my heart <br></br>
                  분명 넌 나의 destiny
                </span>

                <a
                  href="https://www.youtube.com/watch?v=BVVfMFS3mgc&ab_channel=loonatheworld"
                  className="btn btn-light px-5 rounded-pill shadow-sm mt-3"
                >
                  Saiba mais
                </a>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src={instrutor4}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                ></img>
                <h5 className="mb-0">Danai Gurira</h5>
                <span className="small text-uppercase text-muted">
                  Ux Designer desde 2004, atuou em empresas como Don't Dead Open
                  Inside e Wakanda
                </span>
                <a
                  href="https://www.instagram.com/danaigurira/"
                  className="btn btn-light px-5 rounded-pill shadow-sm mt-3"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}
