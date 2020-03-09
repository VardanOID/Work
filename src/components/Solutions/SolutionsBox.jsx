import React from "react";
import "./solutionsBox.css";
import SolutionsSectionsPic from "./SolutionsSectionsPic";
import SolutionsSectionsPic1 from "./SolutionsSectionsPic1";

function SolutionsBox() {
  return (
    <div className="solutions-box">
    <div className="solutions-main-title " >
   <div data-aos="fade-right"> Solutions</div>
    </div>
      <SolutionsSectionsPic />
      {/* sd */}
      <SolutionsSectionsPic1 />
      {/* sd */}
      <SolutionsSectionsPic />
    </div>
  );
}

export default SolutionsBox;
