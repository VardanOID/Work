import React from "react";
import './CustomerAndTestimonialsBox.css'
import CustomersLogo from "./CustomersLogo"
import Testimonials from "./Testimonials"


function CustomerAndTestimonialsBox(){
    return(
    <div className="customer-and-testimonials-box">
    <span id="customers"></span>
    <div className="customers-title">Customers</div>
<div className="customers">Some of the amazing clients we've worked with</div>
<CustomersLogo />
<Testimonials />
    </div>)
}

export default CustomerAndTestimonialsBox;