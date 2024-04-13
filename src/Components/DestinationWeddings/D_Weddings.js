import React from "react";
import "./D_Weddings.css";

import img1 from "../img/Ellipse 15.svg";
import img2 from "../img/Ellipse 16.svg";
import img3 from "../img/Ellipse 17.svg";

import NavBarall from "../NavBar/navbar";
import Footer1 from "../Footer/footer";
import { Link } from "react-router-dom";




function D_Weddings(){
    return(
        <>
        <NavBarall/>
        <div className="ab_full_pad">
        <div class = "imagea">
     <h2>Destination Weddings</h2>
</div>
</div>
    <div class="content">
        <div class="headingd">
            <h1>What We Do?</h1>
            <h2>Capturing Moments, Creating Memories</h2>
            <p>We capture the magic of your destination wedding with breathtaking photography that tells your unique love story.<br/> 
                From sandy beaches to majestic mountaintops, we document the romance and beauty of your dream wedding adventure.</p>
        </div>
        </div>
        <div class="container2">
            <div class="gallery1">

                <Link to="/global">
                <img src={img1} />
                    <div class="desc1">Global</div> 
                </Link>
               
            </div>
            <div class="gallery1">
                <Link to="/india">
                <img src={img2} />
                    <div class="desc1">India</div>
                </Link>
              
            </div>
            <div class="gallery1">
                <Link to="/tamil">
                <img src={img3} />
                    <div class="desc1">Tamil Nadu</div>
                </Link>
            </div>
        </div>
      
         <Footer1/>
        </>
    )
};
export default D_Weddings;