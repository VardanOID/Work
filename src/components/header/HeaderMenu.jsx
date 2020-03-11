import React from "react";
import "./headerMenu.css";
import MenuBar from "./MenuBar";
import Logo from "../../picture/logo.png";

class HeaderMenu extends React.Component {
  state = {
    navBackground: "transparent",
    // border: "2px solid red"
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < "1" ? "transparent" : "#221F1F";
      const boxShadow =  window.scrollY < "1" ? "none" : "0px 15px 18px -1px rgba(0,0,0,0.75)";
      const transition = window.scrollY < "1" ? ".5s" : ".5s";

      this.setState({ navBackground: backgroundcolor });
      this.setState({ navBoxShadow: boxShadow });
      this.setState({ navTransition: transition});
    });
  }
  render() {
    return (
      <div>
        <div
          className="menu-container"
          style={{
            backgroundColor: `${this.state.navBackground}`,
            // border:`${this.state.navBorder}`,
            boxShadow: `${this.state.navBoxShadow}`,
           transition: `${this.state.navTransition}`,
            // position: "fixed",
            // top: "0px",
            width: "100%",
            paddingBottom:"5px",
            zIndex:"100000000000000000000",
          }}
        >
          <div className="menu-container-item-menu">
            <MenuBar />
          </div>
          <div className="logo-and-three-words">
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
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
