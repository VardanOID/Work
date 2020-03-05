import React from "react";
import "./SolutionsSectionsText1.css";

function SolutionsSectionsText1(props) {
  return (
    <div className="solutions-text1">
    <p className="solutions-text-title1"  data-aos="flip-up">{props.solutionTitle}</p>
    <p  data-aos="flip-down">{props.solutionDesc}
     
    </p>
    </div>
  );
}

export default SolutionsSectionsText1;
