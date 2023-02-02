import React from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

import logo from "../../Images/icon.png";

import App from "../../App";

import "../../Style/Import.css";

export default function AppHeader() {
  return (
    <div class="m-4 mb-5">
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="icon sp-logo" src={logo} />
          </Link>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <Link to="/cursos" class="nav-item nav-link active">
                Cursos
              </Link>
              <Link to="/instrutores" class="nav-item nav-link active">
                Instrutores
              </Link>
              <Link to="/cadastro" class="nav-item nav-link active">
                Cadastro
              </Link>
            </div>
            <div class="navbar-nav ms-auto">
              <Link to="/login" class="nav-item nav-link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
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
