import React from "react";
import "./footer.css";
import footer_img from "../img/footerimg.jpg";

import footer_logo from "../img/newlogo-removebg-preview.png";
import gallery1 from "../img/F_Rectangle 24.png";
import gallery2 from "../img/F_Rectangle 25.png";
import gallery3 from "../img/F_Rectangle 28.png";
import gallery4 from "../img/F_Rectangle 30.png";
import gallery5 from "../img/F_Rectangle 31.png";
import gallery6 from "../img/F-Rectangle 32.png";
import facebook from "../img/facebook_logo.png";
import insta from "../img/insta_logo.webp";
import youtube from "../img/youtube_logo.png";
import twitter from "../img/twitter_logo.png";
 
function Footer1(){
    return(
        <>
       
       <div className="ffooter">
        <img src={footer_img} alt="" width="100%" className="imgg"/>
   
        <div class="fcontent">
             
            <div class="flogo">
               
               <img src={footer_logo} alt=""/>
            </div>

            <div class="faboutus">
               <h6>ABOUT US</h6>
               <p>Every click captures the magic of
                 your special day in vibrant detail.
                 Trust us to turn your moments into
                  cherished memories that last a lifetime.</p>
            </div>

            <div class="fservices">
               <h6>SERVICES</h6>
               <ul>
                <li>Aesthetic Wedding Decor</li>
                <li>Photography</li>   
                <li>Bridal Makeup</li>
                <li>Catering</li>
                <li>Celebrity Management</li>
               </ul>
            </div>

            <div class="fGallery">
                <h6>GALLERY</h6>
                <div>
                   <img src={gallery1} alt="gallery"/>
                   <img src={gallery2} alt="gallery"/>
                   <img src={gallery3} alt="gallery"/>
                   <img src={gallery4} alt="gallery"/>
                   <img src={gallery5} alt="gallery"/>
                   <img src={gallery6} alt="gallery"/>
                </div>
            </div>

            <div class="ffollow">
                <h6>FOLLOW US</h6>
             <div class="ficons">
                <img src={facebook} alt="logo" width="28px"/>
                <img src={insta} alt="logo" width="28px"/>
                <img src={youtube} alt="logo" width="28px"/>
                <img src={twitter} alt="logo" width="28px"/>
             </div>

             <div class="fpara">
                <p>© company Events 2024. 
                    All Rights Reserved. 
                    Powered by abc.Tech</p>
             </div>
            </div>
        </div>

    </div>

        </>
    );
}
export default Footer1;