import React from "react";
import "./SolutionsSectionsText.css";

function SolutionsSectionsText(props) {
  return (
    <div className="solutions-text">
    <p className="solutions-text-title"  data-aos="flip-up">{props.solutionTitle}</p>
    <p data-aos="flip-up" className="solutions-title-subtitle">{props.solutionSubTitle}</p>
    <p  data-aos="flip-down">{props.solutionDesc}</p>
    </div>
  );
}

export default SolutionsSectionsText;
