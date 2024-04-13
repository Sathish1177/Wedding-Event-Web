import React from "react";
import "./Gallery.css";

import { Link } from "react-router-dom";

import FilterImage from "./filtter";
import NavBarall from "../NavBar/navbar";
import Footer1 from "../Footer/footer";




function Gallery(){

  
    return(
        <>
   <NavBarall/>
   <div className="ab_full_pad">
<div class = "imagea">
     <h2>PORTFOLIO</h2>
</div>
<div class="content">
    <div class="headingd">
        <h1>What we click?</h1>
        <h2>Capturing Moments, Creating Memories</h2>
    </div>
    </div>

      
       <FilterImage/>
    
    </div>
    
   
   <Footer1/>
    
</>
    )
    };
    export default Gallery;