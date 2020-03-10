import React from "react";
import "./SolutionsSectionsPic1.css";

import SolutionsSectionsText1 from "./SolutionsSectionsText1";
import Sol2 from "../../picture/sol2.png";
function SolutionsSectionsPic1() {
  return (
    <div class="contener_general1">
      <div class="carreaux_presentation_light1">
        <div class="shadow_swhow_mini1">
          <SolutionsSectionsText1
            solutionTitle="Web Studio"
            solutionSubTitle="Entrust Redkite with your web project, be that a stunning website, online store, web-app or any other web-based solution, Redkite has the experience, the skill and the talent to build it."
            solutionDesc=" A web site is the doorway into your business bedazzle the customer with it upfront and present all the relevant information, metrics and statistics of your business to win them over. Let your website be your sales tool."
          />
          <div class="deroul_titre1">
            <img src={Sol2} className="solution-img-hover1" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SolutionsSectionsPic1;
