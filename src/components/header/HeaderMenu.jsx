import React from "react";
import { Navbar } from "react-bootstrap";
import "./headerMenu.css";
import MenuBar from "./MenuBar";
import Logo from "../../picture/logo.png";



function HeaderMenu() {
  return (
    // <Navbar className="menu-bar-box" sticky="top">
    //   <Navbar.Brand>
    //     <MenuBar />
    //   </Navbar.Brand>

    //   <Navbar.Collapse className="justify-content-begin">
    //     <Navbar.Text>
    //       <img src={Logo} alt="Redkite logo" className="logo-redkite" />
    //     </Navbar.Text>
    //   </Navbar.Collapse>
    // </Navbar>
    <div>
      {/* <div className="gradient"></div>
      <div className="gradient-2"></div> */}
      <div className="menu-container">
        <div className="menu-container-item-menu" >
          {" "}
          <MenuBar />{" "}
        </div>
        <div className="menu-container-item-logo">
          <img src={Logo} alt="Redkite logo" className="logo-redkite" />
        </div>
        <div>
          <div className="slogon-container backdrop">
            <div className="text">LOYALTY, </div>
            <div className="text">INTEGRITY, </div>
            <div className="text">EXPERIENCE.</div>
          </div>
        </div>
        {/* <div className="slogon-description">
      <div >We offer end-to-end solutions, from concept to strategic planning to precise tactical execution.</div>
      <div > Our dedication to our clients’ success is uncompromising.</div>
      <div >We are ambitious, technology driven and innovative.</div>
      <div > Bringing value to our customers is at the core of our corporate culture. Solving complex problems with simplicity is what we do.</div>
      </div> */}
      </div>
    </div>
  );
}

export default HeaderMenu;
