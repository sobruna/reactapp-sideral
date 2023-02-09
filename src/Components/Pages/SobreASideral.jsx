import React from "react";

import Default from "../Templates/Default";

import "../../Style/Style.css";
import "../../Style/Cursos.css";
import "../../Style/Login.css";
import "../../Style/TermosDeUso.css";

import aboutuspro from "../../Images/aboutuspro.png";
import aboutuslofi from "../../Images/aboutuslofi.png";
import aboutusparede from "../../Images/aboutusparede.png";

export default function SobreASideral() {
  return (
    <Default>
      <div className="">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">Sobre a Sideral</h1>
              <p className="lead text-muted mb-0">
                Cursos de outro mundo para pessoas que querem explorar o
                universo
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img src={aboutuslofi} alt="" className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="font-weight-light">Como funciona?</h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
                pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
                Egestas maecenas pharetra convallis posuere morbi leo urna
                molestie at. Ullamcorper sit amet risus nullam. Elementum
                integer enim neque volutpat ac tincidunt vitae.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Saiba mais!
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src={aboutuspro}
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              ></img>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src={aboutusparede}
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              ></img>
            </div>
            <div className="col-lg-6">
              <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}
