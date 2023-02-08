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
        <h1>Em Construção</h1>
      </div>
    </LoggedIn>
  );
}
