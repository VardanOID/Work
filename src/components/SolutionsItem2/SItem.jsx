import React from "react";
import WebStudio from "../../picture/webstudio.jpg";
import "./sitem.css";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import SItemBox1 from "./SItemBox";
import SItemText1 from "./SItemText";

function Sitem1() {
  return (
    <div className="sitem-box1">
      <img src={WebStudio} className="Sitem-img2" />
      <Grid lg={12}>
        <Row>
          <Col lg={6}>
            <div>
              <SItemBox1 />
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <SItemText1 sitemtext="A web site is the doorway into your business bedazzle the customer with it upfront and present all the relevant information, metrics and statistics of your business to win them over. Let your website be your sales tool." />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
export default Sitem1;
