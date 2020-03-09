import React from "react";
import SocialIcon from "./SocialIcon";
import FooterNavigation from "./FooterNavigation";
import FooterBottom from "./FooterBottom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons-div ">
        <SocialIcon SocialIcons="fab fa-facebook-f" bgColor="#1877F2" />
        <SocialIcon SocialIcons="fab fa-instagram" bgColor="#C13584" />
        <SocialIcon SocialIcons="fab fa-linkedin-in" bgColor="#2867B2" />
      </div>
      <div className="footer-menu">
        <FooterNavigation footerItems="About" />
        <FooterNavigation footerItems="Need Help?" />
        <FooterNavigation footerItems="Content Guide" />
        <FooterNavigation footerItems="Privacy" />
        <FooterNavigation footerItems="Terms of Use" />
        <FooterNavigation footerItems="Advertising" />
        <FooterNavigation footerItems="Jobs" />
      </div>
      <div >
        <FooterBottom />
      </div>
    </div>
  );
}

export default Footer;
