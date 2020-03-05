import React from "react";
import "./arrow.css";


function Arrow() {
  
  return (
    <div className="arrow-div" >
      <span class="nav-scroll__link__text" ><a href="#section2" className="scroll-name-prop">Scroll down</a></span>
      <div className="container-for-arrow"  data-aos="zoom-in-down"></div>

<span id="section2"></span>
    </div>
  );
}
export default Arrow;

