import React from "react";
import LoggedIn from "../Templates/LoggedIn";
import "../../Style/Style.css";
import "../../Style/Cursos.css";
import "../../Style/Login.css";
import "../../Style/TermosDeUso.css";

export default function MinhaConta() {
  return (
    <LoggedIn>
      <div
        className="row fixed-right div-profile"
        style={{
          backgroundColor: "#bb7fd9",
        }}
      >
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            ></img>
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Minha Conta</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  value=""
                ></input>
              </div>
              <div className="col-md-6">
                <label className="labels">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="Sobrenome"
                ></input>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="(00)000000000"
                  value=""
                ></input>
              </div>
              <div className="col-md-12">
                <label className="labels">Estado</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 2"
                  value=""
                ></input>
              </div>
              <div className="col-md-12">
                <label className="labels">Cidade</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 2"
                  value=""
                ></input>
              </div>
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email id"
                  value=""
                ></input>
              </div>
            </div>
            <div className="row mt-3"></div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Salvar alterações
              </button>
            </div>
          </div>
        </div>
      </div>
    </LoggedIn>
  );
}
