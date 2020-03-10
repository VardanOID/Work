import React from "react";
import "./magentoBox.css";
import Magento from "../../picture/magento.png";

function MagentoBox() {
  return (
    <div className="magento-box-container">
    
      <div>  <img src={Magento} /></div>

        <div className="magento-convert">
         <span> convert from magento to bigcommerce!</span>
        </div>
      
    </div>
  );
}
export default MagentoBox;
