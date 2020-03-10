import React from "react";
import "./headerMenu.css";
import MenuBar from "./MenuBar";
import Logo from "../../picture/logo.png";

function HeaderMenu() {
  
  return (
    <div >
      <div className="menu-container"  >
        <div className="menu-container-item-menu" >
          {" "}
          <MenuBar />{" "}
        </div>
        <div className="logo-and-three-words" >
        <div className="menu-container-item-logo">
          <img src={Logo} alt="Redkite logo" className="logo-redkite" />
        </div>
        <div>
          <div className="slogon-container backdrop">
            <div className="text" >LOYALTY, </div>
            <div className="text">INTEGRITY, </div>
            <div className="text">EXPERIENCE.</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
