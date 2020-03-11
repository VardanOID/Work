import React from "react";
import SocialIcon from "./SocialIcon";
import FooterNavigation from "./FooterNavigation";
import FooterBottom from "./FooterBottom";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";

function Footer() {
  return (
    <div className="footer" id="contact">
    <span ></span>
      <div className="footer-icons-div ">
        <SocialIcon SocialIcons="fab fa-facebook-f" bgColor="#1877F2" />
        <SocialIcon SocialIcons="fab fa-instagram" bgColor="#C13584" />
        <SocialIcon SocialIcons="fab fa-linkedin-in" bgColor="#2867B2" />
      </div>
      {/* <div className="footer-menu">
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
      </div> */}
<Grid>
  <Row>
    <Col lg={6}>1</Col>
    <Col lg={6}>2</Col>
  </Row>
</Grid>
    </div>
  );
}

export default Footer;
