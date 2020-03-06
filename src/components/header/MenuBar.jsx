import React from "react";
import "./MenuBar.css";

import MenuIcon from "@material-ui/icons/Menu";

import CloseIcon from '@material-ui/icons/Close';
import LogoLeftMenu from "../../picture/logo2.png";





export default function MenuBar() {
  function subMenuOpen() {
    let subMenu = document.getElementById("sub-menu");
    subMenu.style.left = "0";
    subMenu.style.transition = "1s";
  
  }
  function closeSubMenu(){
    let subMenu = document.getElementById("sub-menu");
    subMenu.style.left = "-420px";
    subMenu.style.transition = "1s";
  }


  return (
    <div>
      
      <div className="menu-icon" onClick={subMenuOpen} data-aos="zoom-in"  >
       <MenuIcon />
      </div>
      <div id="sub-menu">
       
        <div className="left-menu-items-box">
        {/* <i class="fas fa-times close-icon"  onClick={closeSubMenu}></i> */}
        <CloseIcon onClick={closeSubMenu} className="close-icon" />
          <div className="left-menu-items">HOME</div>
          <div className="left-menu-items">RECENT WORKS</div>
          <div className="left-menu-items">SOLUTIONS</div>
          <div className="left-menu-items">TECHNOLOGY</div>
          <div className="left-menu-items">WHO WE ARE</div>
          <div className="left-menu-items">CONTACT</div>
          <div className="left-menu-items"><img src={LogoLeftMenu}  className="logo-left-menu"/></div>
        </div>
      </div>
    </div>
  );
}
