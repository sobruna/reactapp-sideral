import React, { useState } from "react";
import axios from "axios";
import Default from "../Templates/Default";
import loginimg from "../../Images/login.jpg";
import "../../Style/Style.css";
import "../../Style/Cursos.css";
import "../../Style/Login.css";
import "../../Style/TermosDeUso.css";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import Cookies from "universal-cookie";
const cookies = new Cookies();

// fim do importar de coisas

export default function SideralNaImprensa() {
  //funções de funcionamento da página

  //Ativar login ou cadastro
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  //fim ativas login ou cadastro
  const [nameInput, setNameInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [isShown, setIsSHown] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://ec2-54-160-84-162.compute-1.amazonaws.com:3000/users/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        cookies.set("token", result.data.token, {
          path: "/",
        });
        window.location.href = "/minhaconta";

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  const handleRegister = (e) => {
    setLoading(true);
    try {
      axios
        .post(
          "http://ec2-54-160-84-162.compute-1.amazonaws.com:3000/users/create",
          {
            name: nameInput,
            email: email,
            password: password,
          }
        )
        .then(
          (window.confirm("Cadastro criado! Faça seu login :)"),
          (window.location.href = "/login")),
          ({ data }) => {
            if (data.token) {
              localStorage.setItem("token", data.token);
            }
          }
        );
    } catch (error) {
      console.error(error.response.data);
    }
  };

  //página:

  return (
    <Default>
      <MDBContainer className="d-inline-flex bg-white rounded m-5 justify-content-evenly">
        <MDBContainer className="d-flex flex-column w-50 d-sm-none d-md-block">
          <img src={loginimg} alt="login form" className="img-fluid p-5" />
          <h6 className="px-3">
            Imagem de{" "}
            <a href="https://br.freepik.com/vetores-gratis/fundo-de-foguete-de-construcao-de-equipe_4443347.htm#query=foguete&position=7&from_view=search&track=sph">
              Freepik
            </a>
          </h6>
        </MDBContainer>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Cadastre-se
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <div className="text-center my-5">
                <p>Faça seu login:</p>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                type="email"
                id="email"
                placeholder="exemplo@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Senha"
                type={isShown ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="checkbox"
                  type="checkbox"
                  checked={isShown}
                  onChange={togglePassword}
                  label="Ver senha?"
                />
                <a href="!#">Esqueceu sua senha?</a>
              </div>

              <MDBBtn
                className="mb-4 w-100"
                type="button"
                onClick={handleSubmit}
              >
                Fazer login
              </MDBBtn>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
              <div className="text-center my-5">
                <p>Preencha seus dados:</p>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="Nome e Sobrenome"
                id="nameInput"
                type="text"
                onChange={(e) => setNameInput(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Senha"
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="Eu concordo com os Termos e Condições"
                />
              </div>
              <MDBBtn
                className="mb-4 w-100"
                type="button"
                onClick={handleRegister}
              >
                Criar cadastro
              </MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </MDBContainer>
    </Default>
  );
}
