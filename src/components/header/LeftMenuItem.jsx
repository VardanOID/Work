import React from 'react';
import Link from '@material-ui/core/Link';
import "./leftMenuItem.css";



function LeftMenuItem(props){
return(
    <div 
     className="item">  {props.name}  
   </div>
  
)
}

export default LeftMenuItem;