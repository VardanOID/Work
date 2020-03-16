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
            <div><SItemText sitemtext=" A stunning web-site design isn’t just enough to win customers over from
      the competition and establish a long-lasting, trusted and serious brand.
      Though Redkite prides itself on designing and developing alluring and
      user-friendly web sites, we understand that an e-commerce solution should
      be customer oriented, predicting buyer behavior and empowering your
      business to satisfy customers, drive powerful analytics and allow easy and
      seamless business course corrections when necessary to stay always
      profitable and grow revenue. Our team of creative enthusiasts,
      strategically minded architects and technology driven developers is all
      you need to bring great ideas to life that focus on your customers while
      driving revenue growth through powerful tools and flexible analytics."/></div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
export default Sitem;
