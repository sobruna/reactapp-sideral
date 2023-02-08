import React from "react";
import BootstrapCarousel from "./BootstrapCarousel";
import Default from "../Templates/Default";
import "../../Style/Style.css";
import "../../Style/Cursos.css";
import "../../Style/Login.css";
import "../../Style/TermosDeUso.css";

export default function Home() {
  return (
    <Default>
      <div className="container-flex d-flex justify-content-center">
        <BootstrapCarousel />
      </div>
    </Default>
  );
}
