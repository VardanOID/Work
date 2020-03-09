import React from "react";
import "./testimonials.css";

// import Carousel from "react-bootstrap/Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import A from "../../picture/1.png";
// import B from "../../picture/2.png";
// import { Slide } from "@material-ui/core";
// import Slider from "react-slick";

// const Wrapper = styled.div`
//   width: 100%;
//   padding: 32px;
// `;
// const Page = styled.div`
//   width: 100%;
// `;
let style = {
  backgroundColor: "#221F1F",
  opacity: 1,
  fontSize: "14px",
  textAlign: "left",
  paddingTop:"10px"
};
export default class Testimonials extends React.Component {
  render() {
    return (
      //     <Wrapper>
      //         <Slider
      //           speed={500}
      //           slidesToShow={1}
      //           slidesToScroll={1}
      //           infinite={false}
      //         >
      //  <Page>sd</Page>
      //  <Page>sd</Page>
      //         </Slider>

      //         </Wrapper>
      <div className="slider-box">
        <div className="testimonialas" data-aos="fade-right"><b>Testimonials</b></div>
        
        <div className="quote-and-slide">
        <div className="quote"></div>
          <Carousel
            axis
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            transitionTime={1000}
            showIndicators={false}
            width="700px"
            interval={5000}
          >
            <div>
              <img src={A} />
              <p className="legend" style={style}>
                We have been supported by Redkite for a number of years. The
                team is an integral part of our operations and development
                processes. Together we have built, replaced, and expanded
                enterprise systems to deliver great business value through agile
                development and DevOps for rapid deployments and automated QA.
                We use the best tools and development practices to develop and
                operate a complex, integrated ecommerce environment.
                <h5 className="testimonial-author">
           
                  CTO FROM A PUBLISHING INDUSTRY TRUSTED US WITH A PRODUCTION
                  GRADE COMMERCE PLATFORM
                
                </h5>
              </p>
            </div>
            <div>
              <img src={A} />
              <p className="legend" style={style}>
                I worked with Redkite executives for a number of years in
                different capacities. The people behind the brand are
                exceptional and trustworthy. Their technology knowledge and
                ability to provide solutions to tough problems, really
                elegantly, helped me and my initiatives numerous times. They are
                my choice of partners whenever I find myself in need of tech
                advice or a solution for my commerce portfolio.
                <h5 className="testimonial-author">
                  ENTREPRENEUR, FOUNDER OF COMMERCE PLATFORM FOR CONSTRUCTION
                  APPLIANCE AND TOOLS
                </h5>
              </p>
            </div>
            <div>
              <img src={A} />
              <p className="legend" style={style}>
                Great company, trustworthy, always deliver as they promise. Too
                many aspects of the solution were unknown at the beginning but
                their ability to narrow down the MVP, make it stage based
                approach saved for us lot os money and time. Our choice of
                technology partner for sure.
                <h5 className="testimonial-author">OWNER OF THE GALFES RAMEN DEUREN</h5>
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

// export default Testimonials;
