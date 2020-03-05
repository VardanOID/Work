import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import "./CasesBox.css";

export default function CasesBox(props) {
  //   const BlueOnGreenTooltip = withStyles({
  //     tooltip: {
  //       color: "black",
  //       backgroundColor: "white",
  //       fontSize: "17px",
  //       lineHeight: "24px",
  //       fontFamily: "SFUITextRegular",
  //       fontWeight: "normal",
  //       fonStyle: "normal",
  //       // border: '1px solid red',
  //       borderRadius: '10px',
  //       webkiBoxShadow: '9px 6px 19px -6px rgba(0,0,0,0.75);',
  // mozBoxShadow: '9px 6px 19px -6px rgba(0,0,0,0.75);',
  // boxShadow: '9px 6px 19px -6px rgba(0,0,0,0.75);',

  //     }
  //   })(Tooltip);

  return (
    <Grid className="cases-box-layouts">
      {/* <BlueOnGreenTooltip
        title={props.title} > */}

      <div class="customer-cases-box-container">
        <div>
          <i class="fab fa-angellist cases-logo"></i>
        </div>
        <div className="main-title">Title</div>
        <div className="case-box-info scale-in-left" id="data">
     
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry  Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>

      {/* </BlueOnGreenTooltip> */}
    </Grid>
  );
}
