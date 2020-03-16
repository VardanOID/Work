import React from "react";
import Header from "./header/Header";
import CustomerAndTestimonials from "./CustomerAndTestimonials/CustomerAndTestimonialsBox";
import Cases from "../components/Cases/Cases";
import Kaleidoscope from "../components/Кaleidoscope/Kaleidoscope";
import CallToAction from "../components/CallToAction/CallToAction";
import SolutionsBox from "../components/Solutions/SolutionsBox";
import ButtonUp from "../components/ButtonUp/ButtonUp";
import Footer from "../components/Footer/Footer";
import Magento from "../components/Magento/Magento";
// import { Route, Router } from "react-router";
// import {Link} from "react-router-dom"
import { BrowserRouter as Router, Route, Link, Switch as RouterSwitch } from "react-router-dom";
import SItem from "../components/SolutionsItem/SItem"
import "./app.css";


function App() {
  return (
    
      <Router>
      <div className="all-page">
      <span id="top"></span>
      <Header />
      <ButtonUp />
      <Magento />
      {/* <CallToAction /> */}
      <SolutionsBox />
      <CustomerAndTestimonials />
      <Cases />
      <Kaleidoscope />
      <Footer />
    </div>
  <Route exact path="/ecommerce" component={SItem} target="_blank"/>
</Router>

      
  );
}

export default App;
