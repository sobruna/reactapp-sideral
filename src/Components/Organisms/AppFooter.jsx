import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../../Style/Import.css";

export default function AppFooter() {
  return (
    <footer className="p-5 bg-dark">
      <div className="row">
        <div className="col-6 col-md-2 mb-3 w-auto">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/sobre" className="nav-link p-0 text-light">
                Sobre a Sideral
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/cursos" className="nav-link p-0 text-light">
                Cursos
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/instrutores" className="nav-link p-0 text-light">
                Instrutores
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/termos-de-uso" className="nav-link p-0 text-light">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                <i class="fa-brands fa-linkedin m-1 fa-xl bg-dark"></i>
                Linkedin
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                <i class="fa-brands fa-square-facebook m-1 fa-xl bg-dark"></i>
                Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                <i class="fa-brands fa-square-twitter m-1 fa-xl bg-dark"></i>
                Twitter
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                <i class="fa-brands fa-square-youtube m-1 fa-xl bg-dark"></i>
                Youtube
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                <i className="fa-brands fa-square-instagram m-1 fa-xl bg-dark"></i>
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5 className="text-light">Entre em contato com a gente!</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                Whatsapp
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                Atendimento das 9:00 às 18:00
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-light">
                suporte@sideral.com.br
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5 className="text-light">
              Se inscreva pra receber novidades e promoções!
            </h5>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              ></input>
              <button className="btn btn-primary" type="button">
                Assinar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p className="text-white-50">
          © 2022 Company, Inc. All rights reserved.
        </p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
