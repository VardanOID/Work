import React from "react";
import "./solutionsBox.css";
import SolutionsSectionsPic from "./SolutionsSectionsPic";
import SolutionsSectionsPic1 from "./SolutionsSectionsPic1";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch as RouterSwitch
} from "react-router-dom";
import SItem from "../SolutionsItem/SItem";
import SItem1 from "../SolutionsItem2/SItem";

function SolutionsBox() {
  return (
    <div className="solutions-box" id="solutions">
      <span></span>
      <div className="solutions-main-title ">
        <div data-aos="fade-right"> Solutions</div>
      </div>
      <Router>
        <Link to="/ecommerce">
          {" "}
          <SolutionsSectionsPic />
        </Link>
        <Route path="/ecommerce" component={SItem} />
        <Link to="/webstudio">
          <SolutionsSectionsPic1 />
        </Link>
        <Route path="/webstudio" component={SItem1} />
      </Router>

      {/* sd */}
      {/* <SolutionsSectionsPic1 /> */}
      {/* sd */}
      <SolutionsSectionsPic />
    </div>
  );
}

export default SolutionsBox;
