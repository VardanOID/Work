import React from "react";
import "./SolutionsSectionsPic.css";
import SolutionsPic from "../../picture/s.jpg";
import SolutionsSectionsText from "./SolutionsSectionsText";
import Meeting1 from "../../picture/meeting.jpg";
import Sol1 from "../../picture/sol1.png";
function SolutionsSectionsPic() {
  return (
    <div class="contener_general">
      <div class="carreaux_presentation_light">
        <div class="shadow_swhow_mini">
          <SolutionsSectionsText
            solutionTitle="E-Commerce Solutions"
            solutionSubTitle="Build your e-commerce business in confidence and concentrate on your core competency while Redkite builds all the necessary IT infrastructure."
            solutionDesc=" A stunning web-site design isn’t just enough to win customers over from the competition and establish a long-lasting, trusted and serious brand. Though Redkite prides itself on designing and developing alluring and user-friendly web sites, we understand that an e-commerce solution should be customer oriented, predicting buyer behavior and empowering your business to satisfy customers, drive powerful analytics and allow easy and seamless business course corrections when necessary to stay always profitable and grow revenue. Our team of creative enthusiasts, strategically minded architects and technology driven developers is all you need to bring great ideas to life that focus on your customers while driving revenue growth through powerful tools and flexible analytics."
          />
          <div class="deroul_titre">
            <img src={Sol1} className="solution-img-hover" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SolutionsSectionsPic;
