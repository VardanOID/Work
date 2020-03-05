import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import HeaderItem from "./HeaderMenu";
// import logo from '../../picture/redkite.png'
import Video from "../../video/video.mp4";
import Button from "@material-ui/core/Button";
import HeaderMenu from "./HeaderMenu";
import MenuBar from "./MenuBar";
import Arrow from "./Arrow";

// function Header() {
class Header extends React.Component {
  // componentDidMount() {
  //   scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  // }
  render() {
    let style = {
      width: "100%",
      height: "90vh",
      objectFit: "initial",
      zIndex: "-100"
    };
    let gradient = {
      position: "absolute",
      width: "100%",
      height: "100vh",



      background: "rgb(91,200,237)",
      background: "linear-gradient(156deg, rgba(91,200,237,0.5158438375350141) 16%, rgba(247,128,0,0) 42%)"
    };
    let gradient2 = {
      position: "absolute",
      width: "100%",
      height: "90vh",



      background: "rgb(145,237,91)",
      background: "linear-gradient(302deg, rgba(145,237,91,0.5158438375350141) 16%, rgba(247,128,0,0) 42%)"
    };
    return (
      <div>
        <div style={gradient} ></div>
        <div style={gradient2}></div>

        <HeaderMenu />

        <div class="video-container">
          <video style={style} autoplay="true" loop="true" muted="true">
            <source src={Video} className="video-option"></source>
          </video>
        </div>

        <Arrow />
      </div>
    );
  }
}

export default Header;
