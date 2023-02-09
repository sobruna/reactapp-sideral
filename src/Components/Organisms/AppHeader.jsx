import React from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

import logo from "../../Images/icon.png";

import App from "../../App";

import "../../Style/Import.css";

export default function AppHeader() {
  return (
    <div className="m-4 mb-5">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <Link className="navbar-brand" to="/">
                <img className="icon sp-logo" src={logo} />
              </Link>
              <Link to="/" className="nav-item nav-link active">
                Sideral
              </Link>
              <Link to="/cursos" className="nav-item nav-link active">
                Cursos
              </Link>
              <Link to="/instrutores" className="nav-item nav-link active">
                Instrutores
              </Link>
            </div>
            <div className="navbar-nav ms-auto">
              <Link to="/login" className="nav-item nav-link">
                Login - Cadastre-se
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
