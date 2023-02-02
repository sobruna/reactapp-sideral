import React, { useState } from "react";
import Default from "../Templates/Default";
import loginimg from "../../Images/login.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "../../Style/Style.css";
import "../../Style/Cadastro.css";
import "../../Style/Cursos.css";
import "../../Style/Login.css";
import "../../Style/TermosDeUso.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [isShown, setIsSHown] = useState(false);

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:3000/users/login",
      data: {
        email,
        password,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("token", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/minhaconta";

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  // const [email, SetEmail] = React.useState("");
  // const [password, SetPassword] = React.useState("");
  // const handleLogin = async () => {
  //   let result = await fetch("http://localhost:3000/users/login", {
  //     method: "post",
  //     body: JSON.stringify({ email, password }),
  //     hearders: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   result = await result.json();
  //   console.warn(result);
  //   if (result.name) {
  //   } else {
  //     alert("Verifique seu e-mail ou senha, por favor!");
  //     console.log(email, password);
  //   }
  // };

  return (
    <Default>
      <section
        className="vh-100"
        style={{
          display: "flex",
          height: "100vh",
          overflow: "scroll initial",
          backgroundColor: "#bb7fd9",
        }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={loginimg}
                      alt="login form"
                      className="img-fluid p-5"
                    />
                    <h6 className="px-3">
                      Imagem de{" "}
                      <a href="https://br.freepik.com/vetores-gratis/fundo-de-foguete-de-construcao-de-equipe_4443347.htm#query=foguete&position=7&from_view=search&track=sph">
                        Freepik
                      </a>
                    </h6>
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex mb-3 pb-1 justify-content-center">
                          <span className="h2 fw-bold mb-3 mx-2 text-center">
                            Entre na sua conta ou{" "}
                            <Link to="/cadastro" className="h2 fw-bold mb-3">
                              Cadastre-se
                            </Link>
                          </span>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            placeholder="exemplo@exemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example17">
                            E-mail
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type={isShown ? "text" : "password"}
                            id="password"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="form2Example27">
                            Senha
                          </label>
                          <div className="checkbox-container">
                            <label htmlFor="checkbox">Ver senha?</label>
                            <input
                              id="checkbox"
                              type="checkbox"
                              checked={isShown}
                              onChange={togglePassword}
                            />
                          </div>
                        </div>
                        <button
                          className="btn btn-light px-5 rounded-pill shadow-sm"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Login
                        </button>
                        <a className="small text-muted mx-3" href="#!">
                          Esqueceu sua senha?
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Default>
  );
}
