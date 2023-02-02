import React from "react";
import Default from "../Templates/Default";
import "../../Style/Style.css";
import "../../Style/Cadastro.css";
import "../../Style/Cursos.css";
import "../../Style/Login.css";
import "../../Style/TermosDeUso.css";

export default function Cadastro() {
  return (
    <Default>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items bg-dark bg-opacity-50">
                <h3>
                  Faça seu cadastro e comece a descobrir o universo hoje mesmo!
                </h3>
                <p>Preencha seus dados:</p>
                <form className="requires-validation" novalidate>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Nome Completo"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Por favor, preencha seu nome completo"
                        )
                      }
                    ></input>
                    <div className="valid-feedback">
                      Username field is valid!
                    </div>
                    <div className="invalid-feedback">
                      O seu nome não pode estar em branco
                    </div>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      onInvalid={(e) =>
                        e.target.setCustomValidity(
                          "Por favor, preencha seu e-mail"
                        )
                      }
                    ></input>
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">
                      Seu email não pode estar em branco
                    </div>
                  </div>

                  <div className="col-md-12">
                    <select className="form-select mt-3" required>
                      <option selected disabled value="">
                        Por onde você conheceu a Sideral?
                      </option>
                      <option value="socialmedia">
                        Por uma rede social como Facebook, Twitter, Instagram,
                        etc
                      </option>
                      <option value="linkedin">Linkedin</option>
                      <option value="amigos">
                        Recomendação de um amigo/ conhecido
                      </option>
                      <option value="google">
                        Pesquisando por um curso no google
                      </option>
                      <option value="eventos">
                        Em um evento em que a Sideral estava
                      </option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Senha"
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Por favor, crie um senha")
                      }
                      required
                    ></input>
                    <div className="valid-feedback">
                      Password field is valid!
                    </div>
                    <div className="invalid-feedback">
                      Password field cannot be blank!
                    </div>
                  </div>
                  <div className="form-check my-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    ></input>
                    <label className="form-check-label">
                      Confirmo que meus dados estão corretos
                    </label>
                    <div className="invalid-feedback">
                      Por favor, confirme que seus dados estão corretos!
                    </div>
                  </div>

                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Fazer cadastro
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
}

// return function async() {
//   ("use strict");
//   const forms = document.querySelectorAll(".requires-validation");
//   Array.from(forms).forEach(function (form) {
//     form.addEventListener(
//       "submit",
//       function async(event) {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// };
