import React from "react";
import SideMenu from "../Organisms/SideMenu";

export default function Default(props) {
  return (
    <div className="wrapper">
      <SideMenu />
      {props.children}
    </div>
  );
}
