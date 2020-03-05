import React from "react";
import "./SocialIcon.css";


function SocialIcon(props) {
    let iconstyle={
        backgroundColor:props.bgColor
    }



  return <div>
<div className="social-icon"  style={iconstyle}><i className={props.SocialIcons}  ></i></div>
      
  </div>;
}

export default SocialIcon;
