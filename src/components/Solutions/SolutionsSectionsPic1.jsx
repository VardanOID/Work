import React from "react";
import "./SolutionsSectionsPic1.css";

import SolutionsSectionsText1 from "./SolutionsSectionsText1";
import Meeting1 from "../../picture/meeting.jpg";
function SolutionsSectionsPic1() {
  return (
    <div class="contener_general1">
      <div class="carreaux_presentation_light1">
        <div class="shadow_swhow_mini1">
          <SolutionsSectionsText1
            solutionTitle="What is Lorem Ipsum?"
            solutionDesc=" Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book."
          />
          <div class="deroul_titre1">
            <img src={Meeting1} className="solution-img-hover1" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SolutionsSectionsPic1;
