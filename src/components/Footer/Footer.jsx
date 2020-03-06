import React from "react";
import SocialIcon from "./SocialIcon";
import FooterNavigation from "./FooterNavigation"
import "./footer.css";

function Footer() {
  return (
    <div className="footer" >
      <div className="footer-icons-div " >
        <SocialIcon SocialIcons="fab fa-facebook-f" bgColor="#1877F2"  />
        <SocialIcon SocialIcons="fab fa-instagram" bgColor="#C13584" />
        <SocialIcon SocialIcons="fab fa-linkedin-in" bgColor="#2867B2" />
      </div>
      <div>
      {/* <FooterNavigation/> */}
      </div>
  
    </div>
  );
}

export default Footer;
