import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import HeaderItem from "./HeaderMenu";
// import logo from '../../picture/redkite.png'
import Video from "../../video/video.mp4";
import Button from "@material-ui/core/Button";
import HeaderMenu from "./HeaderMenu";
import MenuBar from "./MenuBar";
import Arrow from "./Arrow";
import ReactPlayer from "react-player";

// function Header() {
function Header() {
  // componentDidMount() {
  //   scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  // }

  let video = document.getElementById("myVideo");

  function enableMute() {
    video.muted = !video.muted;
  }
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

    // background: "rgb(91,200,237)",
    // background: "linear-gradient(156deg, rgba(91,200,237,0.5158438375350141) 16%, rgba(247,128,0,0) 42%)"

    // background: "rgb(91,200,237)",
    // background: "linear-gradient(156deg, rgba(91,200,237,0.53) 20%, rgba(255,255,255,0) 56%)"
    background: "rgb(91,200,237)",
    background:
      "linear-gradient(146deg, rgba(91,200,237,1) 4%, rgba(255,255,255,0) 28%)"
  };
  let gradient2 = {
    position: "absolute",
    width: "100%",
    height: "90vh",

    background: "rgb(145,237,91)",
    background:
      "linear-gradient(302deg, rgba(145,237,91,1) 5%, rgba(255,255,255,0) 21%)"
  };
  // let vid = document.getElementById("myVideo");

  // function getVolume() { 
  //   alert(vid.muted);
  // } 
    
  // function setHalfVolume() { 
  //   vid.muted = true;
  // } 
    
  // function setFullVolume() { 
  //   vid.muted = false;
  // } 
  // let azs={
  //   position: 'absolute',
  //   zIndex:"100000000000"
  // }
  return (
    <div>
    {/* <div style={azs}><button onClick={getVolume} type="button">What is the volume?</button>
<button onClick={setHalfVolume} type="button">Set volume to 0.2</button>
<button onClick={setFullVolume} type="button">Set volume to 1.0</button> </div> */}
      <div style={gradient}></div>
      
      <div style={gradient2}></div>

      <HeaderMenu />

    <div class="video-container"  > 
         <video style={style} autoplay="true" loop="true" controls muted  >
          <source src={Video} className="video-option"   ></source>
        </video> 
       {/* <ReactPlayer url={Video} playing loop muted="false"  id="myVideo"/> */}
      </div> 

      <Arrow />
     
    </div>
  );
}

export default Header;
