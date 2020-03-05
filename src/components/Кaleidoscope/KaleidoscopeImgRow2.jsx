import React from "react";
import Black from "../../picture/3.png";
import White from "../../picture/4.png";
// import "./kaleidoscopeImgRow2.css";

function KaleidoscopeImgRow1() {
  return (
    <div className="all">
     

      <div>
        <img
          src={White}
          alt="img06"
          className="kal-img-small"
        />

        <div className="p-1">
          <img src={Black} className="kal-img-small1" />
        </div>
      </div>
      <div>
        <div className="p-1">
          <img src={Black} className="kal-img-small1" />
        </div>

        <img
        src={White}
          alt="img06"
          className="kal-img-small"
        />
      </div>
      <div className="m img-hover-zoom--colorize img-hover-zoom">
        <img
          src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80"
          alt="img06"
          className="kal-img"
        />
      </div>
    </div>
  );
}

export default KaleidoscopeImgRow1;
