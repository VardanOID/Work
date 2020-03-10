import React from "react";
import CasesTitle from "./CasesTitle";
import CasesBox from "./CasesBox";
import "./Cases.css";
import Meeting from "../../picture/meeting.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
function Cases() {
  return (
    <div className="cases-box cases">
    <h1 className="customer-cases-title" data-aos="zoom-in">Customer Cases</h1>
      {/* <img src={Meeting} className="img_back" /> */}
      <div className="cases-div">
        <Grid>
        
          <Row className="cases-first-row">
            <Col lg={3}>              <CasesBox />            </Col>
            <Col lg={3}>              <CasesBox />            </Col>
            <Col lg={3}>              <CasesBox />            </Col>
            <Col lg={3}>              <CasesBox />            </Col>
     </Row>
          <Row>
            <Col lg={3}>              <CasesBox />            </Col>
            <Col lg={3}>              <CasesBox />            </Col>
            <Col lg={3}>              <CasesBox />            </Col>
            <Col lg={3}>              <CasesBox />            </Col>
          </Row>
        </Grid>
      </div>

    </div>
  );
}

export default Cases;
