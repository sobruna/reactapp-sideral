import React from "react";
import AppFooter from "../Organisms/AppFooter";
import AppHeader from "../Organisms/AppHeader";

export default function Default(props) {
  return (
    <div className="wrapper">
      <AppHeader />
      {props.children}
      <AppFooter />
    </div>
  );
}
