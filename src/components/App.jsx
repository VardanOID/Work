import React from "react";
import Header from "./header/Header";
import CustomerAndTestimonials from "./CustomerAndTestimonials/CustomerAndTestimonialsBox";
import Cases from "../components/Cases/Cases";
import Kaleidoscope from "../components/Кaleidoscope/Kaleidoscope";
import CallToAction from "../components/CallToAction/CallToAction";
import SolutionsBox from "../components/Solutions/SolutionsBox";
import ButtonUp from "../components/ButtonUp/ButtonUp"
import Footer from "../components/Footer/Footer"
import Magento from "../components/Magento/Magento"
import "./app.css";

function App() {
  return (
    <div className="all-page">
    <span id="top"></span>
      <Header />
      <ButtonUp/>
      <Magento />
      {/* <CallToAction /> */}
      <SolutionsBox />
      <CustomerAndTestimonials />
      <Cases />
      <Kaleidoscope />
     <Footer />
    </div>
  );
}

export default App;
