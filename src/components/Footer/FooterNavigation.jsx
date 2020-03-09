import React from "react";
import "./footerNavigation.css";


function FooterNavigation(props) {
  

  return <div className="footer-navigation-box"  >
<div>{props.footerItems}</div>
      
  </div>;
}

export default FooterNavigation;
