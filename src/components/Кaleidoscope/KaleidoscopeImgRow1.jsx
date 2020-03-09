import React from "react";
import Black from "../../picture/3.png";
import White from "../../picture/4.png";
import Color from "../../picture/color.jpg";
import "./KaleidoscopeImgRow1.css";

function KaleidoscopeImgRow1() {
  function eventStart3() {
    let h1 = document.getElementById("wwa");
    let question = document.getElementById("question");
    h1.style.transform = "translate(10%, 10%)";
    h1.style.color = "#d82533";
    h1.style.transition = "1s";
    question.style.color = "white";
    question.style.transition = "1s";
  }
  function eventEnd3() {
    let h1 = document.getElementById("wwa");
    let question = document.getElementById("question");
    h1.style.transform = "translate(0, 0)";
    h1.style.transition = "1s";
    h1.style.color = "white";
    question.style.color = "#d82533";
  }
  function eventStart4() {
    let h1 = document.getElementById("start-journey");
    let question = document.getElementById("start-j-redkite");
    h1.style.transform = "translate(1%, 15%)";
    h1.style.color = "white";
    h1.style.transition = "1s";
    question.style.color = "#d82533";
    question.style.transition = "1s";
  }
  function eventEnd4() {
    let h1 = document.getElementById("start-journey");
    let question = document.getElementById("start-j-redkite");
    h1.style.transform = "translate(0, 0)";
    h1.style.transition = "1s";
    h1.style.color = "#d82533";
    question.style.color = "white";
  }
  // function eventStart1() {
  //   let career = document.getElementById("career");
  //   career.style.transform = "translate(10%, 10%)";
  //   //
  //   career.style.zIndex = "1";
  //   // career.style.position = "absolute";

  //   career.style.transition = "1s";
  // }
  // function eventEnd1() {
  //   let career = document.getElementById("career");
  //   career.style.transform = "translate(0, 0)";
  //   // career.style.position = "absolute";
  //   career.style.transition = "1s";
  // }

  // function eventStart2() {
  //   let news = document.getElementById("news");
  //   news.style.transform = "translate(10%, 10%)";
  //   // news.style.position = "absolute";
  //   news.style.zIndex = "1";

  //   // news.style.transition = "1s";
  // }
  // function eventEnd2() {
  //   let news = document.getElementById("news");
  //   news.style.transform = "translate(0, 0)";
  //   // news.style.position = "absolute";
  //   // news.style.transition = "0.1s";
  // }

  return (
    // https://banner2.cleanpng.com/20180329/ytq/kisspng-desktop-wallpaper-color-paint-colorful-5abc74db06ca76.1317674315223001230278.jpg
    <div className="all">
      <div
        className="m img-hover-zoom "
       
      >
        <span className="wwa" id="wwa">
          Who We Are<span id="question">?</span>
        </span>
        <img  onMouseEnter={eventStart3}
        onMouseLeave={eventEnd3}
          // src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80"
          src={Color}
          alt="img06"
          className="kal-img"
        />
        {/* <div
          className="figure1 career1">
         
          <span  data-aos="zoom-in"> Lorem</span>
        </div> */}

        <div
          className="figure1 news1"
          //  onMouseEnter={eventStart2} onMouseLeave={eventEnd2}
        >
          {/* <img
                src={White}
                alt="img06"
                className="kal-img-small"
              /> */}
          <span> News</span>
        </div>
      </div>
      <div className="small-img-container">
        <div>
          <div className="gradient-career">
            <div className="figure career">
              <div className="gradient-career2">
                <span id="career" >
                  Careers
                </span>
              </div>
            </div>
          </div>

          {/* <div
            className="figure news" >
          
            <span id="news"  data-aos="zoom-in"> News</span>
          </div> */}
          <div>
            <div class="pictureone">
            <span className="start-journey" id="start-journey">
            Start Journey With <br/><span id="start-j-redkite">RedKite</span>
        </span>
              <img
               onMouseEnter={eventStart4}
        onMouseLeave={eventEnd4}
                // src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80"
                src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80"
                alt="img06"
                className="kal-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="p-1 black">
              <img src={Black} className="kal-img-small1" />
            </div>  */}
      {/* <div>
            <div className="p-1">       
              <img src={Black} className="kal-img-small1" />
            </div>
     
              <img
                 src={White}
                alt="img06"
                className="kal-img-small"
              />
       
          </div> */}
    </div>
  );
}

export default KaleidoscopeImgRow1;
