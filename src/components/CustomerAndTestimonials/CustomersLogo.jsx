import React from "react"
import "./customersLogo.css"

import Carson from "../../picture/carson.png";
import Galfes from "../../picture/galfes.png";
import InnoSeal from "../../picture/inno_seal.png";
import Shift from "../../picture/shift.png";
import Verfjob from "../../picture/verfjob.png";

function CustomersLogo(){
    return(
   <div className="logo-box">
     <img src={Carson}  data-aos="fade-up" />
     <img src={Galfes} data-aos="fade-down"/>
     <img src={InnoSeal} data-aos="fade-up"/>
     <img src={Shift} data-aos="fade-down"/>
     <img src={Verfjob} data-aos="fade-up"/>
   
   </div>
    )
}
export default CustomersLogo;