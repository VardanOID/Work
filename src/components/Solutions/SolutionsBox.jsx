import React from "react";
import "./solutionsBox.css";
import SolutionsSectionsPic from "./SolutionsSectionsPic";
import SolutionsSectionsPic1 from "./SolutionsSectionsPic1";

function SolutionsBox() {
  return (
    <div className="solutions-box">
    <div>Solutions</div>
      <SolutionsSectionsPic />
      {/* sd */}
      <SolutionsSectionsPic1 />
      {/* sd */}
      <SolutionsSectionsPic />
    </div>
  );
}

export default SolutionsBox;
