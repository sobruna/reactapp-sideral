import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "../../Style/Import.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      className="d-inline-flex"
      style={{
        position: "d-flex",
        height: "100vh",
        overflow: "scroll initial",
        backgroundColor: "#bb7fd9",
      }}
    >
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none">
            Bem vindo de volta!
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/meuscursos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                Meus cursos
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/apoio" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">
                Material de Apoio
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/minhaconta" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Minha Conta</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Precisa de ajuda?
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
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
