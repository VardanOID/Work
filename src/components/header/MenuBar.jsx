import React from "react";
import "./MenuBar.css";

import MenuIcon from "@material-ui/icons/Menu";

import CloseIcon from '@material-ui/icons/Close';
import LogoLeftMenu from "../../picture/logo2.png";





export default function MenuBar() {
  function subMenuOpen() {
    let subMenu = document.getElementById("sidenav");
    subMenu.style.left = "0";
    subMenu.style.transition = "1s";
  
  }
  function closeSubMenu(){
    let subMenu = document.getElementById("sidenav");
    subMenu.style.left = "-420px";
    subMenu.style.transition = "1s";
  }


  return (
    <div>
      
      <div className="menu-icon" 
      onClick={subMenuOpen} 
      data-aos="zoom-in"  >
       <MenuIcon />
      </div>
      {/* <div id="sub-menu " >
       
        <div className="left-menu-items-box ">
        <CloseIcon onClick={closeSubMenu} className="close-icon" />
       <a href="#"> <div className="left-menu-items">SOLUTIONS</div> </a>
       <a href="#">  <div className="left-menu-items">CUSTOMERS</div></a>
       <a href="#">  <div className="left-menu-items">ABOUT US</div></a>
          
       <a href="#">  <div className="left-menu-items">CONTACT</div></a>
      
          <div className="left-menu-items"><img src={LogoLeftMenu}  className="logo-left-menu"/></div>
        </div>
      </div> */}
      <div id="sidenav">
      <CloseIcon onClick={closeSubMenu} className="close-icon" />
  <a href="#solutions" className="left-menu-items">SOLUTIONS</a>
  <a href="#customers" className="left-menu-items">CUSTOMERS</a>
  <a href="#aboutUs" className="left-menu-items">ABOUT US</a>
  <a href="#contact" className="left-menu-items">CONTACT</a>
  
  <div className="left-menu-items"><img src={LogoLeftMenu}  className="logo-left-menu"/></div>
</div>

    </div>
  );
}
