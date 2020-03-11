import React from "react";
import "./footerContact.css";
import BigCommerce from "../../picture/bigcommerce.png"
import LogoNew from "../../picture/logo_new.png"
import Partner from "../../picture/partner.png"

function FooterContact() {
  return (
    <div className="footer-box">
      <div className="footer-slogan1">
        Let Redkite.io team walk you through latest cutting-edge technologies
        and widely recognised tech solution stacks. Please let us know how we
        can be helpful.
      </div>
      <div className="footer-logos">
          <img src={LogoNew} className="footer-logo" />
          <img src={BigCommerce} className="footer-partners" />
          <img src={Partner} className="footer-partners1" />
      </div>
    </div>
  );
}

export default FooterContact;
