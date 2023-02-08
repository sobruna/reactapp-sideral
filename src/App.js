import React from "react";

import Home from "./Components/Pages/Home";
import Cursos from "./Components/Pages/Cursos";
import DepoimentosDeAlunos from "./Components/Pages/DepoimentosDeAlunos";
import Instrutores from "./Components/Pages/Instrutores";
import Login from "./Components/Pages/Login";
import SideralNaImprensa from "./Components/Pages/SideralNaImprensa";
import SobreASideral from "./Components/Pages/SobreASideral";
import TermosDeUso from "./Components/Pages/TermosDeUso";
import TrabalheConosco from "./Components/Pages/TrabalheConosco";
import MeusCursos from "./Components/Pages/MeusCursos"
import MinhaConta from "./Components/Pages/MinhaConta"
import AcessarCurso from "./Components/Pages/AcessarCurso"
import Apoio from "./Components/Pages/Material de Apoio"

import BootStrapCarousel from "./Components/Pages/BootstrapCarousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from 'webfontloader';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/login" element={<Login />} />;
      <Route path="/cursos" element={<Cursos />} />;
      <Route path="/depoimentos" element={<DepoimentosDeAlunos />} />;
      <Route path="/instrutores" element={<Instrutores />} />;
      <Route path="/imprensa" element={<SideralNaImprensa />} />;
      <Route path="/termos-de-uso" element={<TermosDeUso />} />;
      <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />;
      <Route path="/meuscursos" element={<MeusCursos />} />  
      <Route path="/sobre" element={<SobreASideral />} />
      <Route path="/minhaconta" element={<MinhaConta />} />
      <Route path="/apoio" element={<Apoio />} />
      <Route path="/curso-teste" element={<AcessarCurso />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;