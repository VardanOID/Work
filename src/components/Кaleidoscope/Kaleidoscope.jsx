import React from "react";
// import Black from "../../picture/3.png";
import KaleidoscopeImgRow1 from "../Кaleidoscope/KaleidoscopeImgRow1";
import KaleidoscopeImgRow2 from "../Кaleidoscope/KaleidoscopeImgRow2";
import KaleidoscopeImgRow3 from "../Кaleidoscope/KaleidoscopeImgRow3";

import "./kaleidoscope.css";


function Kaleidoscope() {
  return (
    <div className="kaleidoscope-box">
      <div className="kaleidoscope-title">We Deliver</div>
   <KaleidoscopeImgRow1 />
   <KaleidoscopeImgRow2 />
   <KaleidoscopeImgRow3 />
     
    </div>
  );
}
export default Kaleidoscope;
