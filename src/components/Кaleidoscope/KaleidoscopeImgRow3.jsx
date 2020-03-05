import React from "react";
import Black from "../../picture/3.png";
import White from "../../picture/4.png";
import "./KaleidoscopeImgRow1.css";

function KaleidoscopeImgRow3() {
  function eventStart() {
    let h1 = document.getElementById("photo-title");
    h1.style.transform = "translate(50%, 50%)";
    h1.style.transition = "1s";
  }
  function eventEnd() {
    let h1 = document.getElementById("photo-title");
    h1.style.transform = "translate(0, 0)";
    h1.style.transition = "1s";
  }
  return (
    <div className="all">
      <div
        className="m photo img-hover-zoom"
        onMouseEnter={eventStart}
        onMouseLeave={eventEnd}
      >
        <h1 id="photo-title">Title</h1>
        <img
          src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80"
          alt="img06"
          className="kal-img"
        />
        <div class="glow-wrap">
          <i class="glow"></i>
        </div>
      </div>

      <div>
        <div className="figure">
          {" "}
          <img src={White} alt="img06" className="kal-img-small" />
        </div>

        <div className="p-1">
          <img src={Black} className="kal-img-small1" />
        </div>
      </div>
      <div>
        <div className="p-1">
          <img src={Black} className="kal-img-small1" />
        </div>

        <img src={White} alt="img06" className="kal-img-small" />
      </div>
    </div>
  );
}

export default KaleidoscopeImgRow3;
