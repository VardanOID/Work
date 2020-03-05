import React from "react";
import "./SolutionsSectionsPic.css";
import SolutionsPic from "../../picture/s.jpg";
import SolutionsSectionsText from "./SolutionsSectionsText";
import Meeting1 from "../../picture/meeting.jpg";
function SolutionsSectionsPic() {
  return (
    <div class="contener_general">
      <div class="carreaux_presentation_light">
        <div class="shadow_swhow_mini">
          <SolutionsSectionsText
            solutionTitle="What is Lorem Ipsum?"
            solutionDesc=" Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book."
          />
          <div class="deroul_titre">
            <img src={Meeting1} className="solution-img-hover" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SolutionsSectionsPic;
