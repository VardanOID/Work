import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import HeaderItem from "./HeaderMenu";
// import logo from '../../picture/redkite.png'
import Video from "../../video/video.mp4";
import Button from "@material-ui/core/Button";
import HeaderMenu from "./HeaderMenu";
import MenuBar from "./MenuBar";
import Arrow from "./Arrow";
import ReactPlayer from "react-player";
import { rgbToHex } from "@material-ui/core";

// function Header() {
function Header() {
  // componentDidMount() {
  //   scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  // }

  let video = document.getElementById("myVideo");

  let style = {
    width: "100%",
    height: "90vh",
    objectFit: "initial",
    zIndex: "-100"
  };
  let gradient = {
    position: "absolute",
    width: "100%",
    height: "90vh",

    // background: "rgb(6,3,213)",
    // background:
    //   "linear-gradient(156deg, rgba(3,81,213,0.77) 13%, rgba(255,255,255,0.07886904761904767) 50%)"
    background: "rgb(216,37,51)",
    background:
      "linear-gradient(304deg, rgba(216,37,51,1) 0%, rgba(255,255,255,0) 50%)"
  };
  let gradient2 = {
    position: "absolute",
    width: "100%",
    height: "90vh",

    // background: "rgb(24,117,39)",
    background: "rgb(0,0,0)",
    // background:
    //   "linear-gradient(302deg, rgba(24,117,39,0.7707457983193278) 13%, rgba(255,255,255,0.07886904761904767) 50%)"
    background:
      "linear-gradient(156deg, rgba(0,0,0,1) 4%, rgba(255,255,255,0) 50%)"
  };
  let mutebut={
     borderRadius: '100%',
    zIndex: '1100000000',
    cursor: 'pointer',
    float: 'left',
    position: 'absolute',
    
    marginLeft: '95%',
    border: 'none'
  }
  let vid =
    "https://www.youtube.com/embed/qwzjXc0k-g4?controls=0&autoplay=1&disablekb=1&playlist=qwzjXc0k-g4&loop=1&showinfo=1&modestbranding=1&allowfullscreen&mute=";
  const [vid2, setvid2] = useState("0");
  let res = vid.concat(vid2);

  
  return (
    <div>
      <div style={gradient}></div>

      <div style={gradient2}></div>

      <HeaderMenu />

      <div class="video-container">
        {/* <video style={style} autoplay="true" loop="true" muted>
          <source src={Video} className="video-option"></source>
        </video> */}

        <iframe
          style={style}
          src={res}
          mute="1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
      </div>
      

      <Arrow />
      <button
        id="mute"
     style={mutebut}
        onClick={() => setvid2("1")}
        
      >
        mute
      </button>
    </div>
  );
}

export default Header;
