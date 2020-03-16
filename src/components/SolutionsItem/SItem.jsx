import React from "react";
import Ecomm from "../../picture/ecommerce.png";
import "./sitem.css";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import SItemBox from "./SItemBox";
import SItemText from "./SItemText"

function Sitem() {
  return (
    <div className="sitem-box">
      <img src={Ecomm} className="Sitem-img1" />
      <Grid lg={12}>
        <Row>
          <Col lg={6}>
            <div>
              <SItemBox />
            </div>
          </Col>
          <Col lg={6}>
            <div><SItemText/></div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
export default Sitem;
