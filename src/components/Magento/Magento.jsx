import React from "react";
import "./magento.css";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import MagentoBox from "./MagentoBox";

function Magento() {
  return (
    <div className="magento-box">
      <Grid lg={12}>
        <Row>
          <Col lg={6}>
            <div><MagentoBox/></div>
          </Col>
          <Col lg={6}>
            <div>Buttons</div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Magento;
