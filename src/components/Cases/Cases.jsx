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
      <img src={Meeting} className="img_back" />
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

      {/* <CasesTitle />
      <div  className='customer-cases-box-info'>
      <CasesBox
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        mainTitle="Title"
    
      />
       <CasesBox
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        mainTitle="Title"
      />
       <CasesBox
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        mainTitle="Title"
      />
      
       <CasesBox
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        mainTitle="Title"
      />
      </div>
      <div className="customer-cases-box-info">
       <CasesBox
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        mainTitle="Title"
      />
       <CasesBox
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        mainTitle="Title"
      />
       <CasesBox
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        mainTitle="Title"
      />
       <CasesBox
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
       scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        mainTitle="Title"
      />
      </div> */}
    </div>
  );
}

export default Cases;
