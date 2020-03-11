import React from "react";
import "./FooterGetInTouch.css";

function FooterGetInTouch() {
  return (
    <div>
      <div className="touch-title">Get In Touch</div>
      {/* <div className="footer-contact-tel-box">
        <div className="footer-contact-tel">
          <div>Tel. (Direct)</div>
          <div>+374 77 071 555</div>
        </div>
        <div className="footer-contact-tel">
          <div>Tel. (Office)</div>
          <div>+374 12 991555</div>
        </div>

        <div className="footer-contact-tel">
          <div>Address: (ARM)</div>
          <div>Nikoghayos Adonc 2/1 , 0014, Yerevan, Armenia.</div>
        </div>
        <div className="footer-contact-tel">
          <div>Email:</div>
          <div>info@redkite.io</div>
        </div>
      </div> */}

      <table>
          <tr><td>Tel. (Direct)</td><td>+374 77 071 555</td></tr>
          <tr><td>Tel. (Office)</td><td>+374 12 991555</td></tr>
          <tr><td>Address: (ARM)</td><td>Nikoghayos Adonc 2/1 , 0014, Yerevan, Armenia.</td></tr>
          <tr><td>Email:</td><td>info@redkite.io</td></tr>
      </table>
    </div>
  );
}

export default FooterGetInTouch;
