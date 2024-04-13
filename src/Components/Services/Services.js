import React from "react";
import "./Services.css";

import img1 from "../img/AestheticWeddingDecor_Services.jpg";
import img2 from "../img/photography_Services.jpg";
import img3 from "../img/brindalMakeup_Services.jpg";
import img4 from "../img/Catering_Services.jpg";
import img5 from "../img/CelebrityManagement_Services.jpg";
import NavBarall from "../NavBar/navbar";
import { Link } from "react-router-dom";
import Footer1 from "../Footer/footer";
// import img6 from "../img/CelebrityManagement_Services.jpg";
// import Footer from "./footer";



function Services1(){
    return(
        <>
        <NavBarall/>
        <div className="ab_full_pad">
          <div class="imagea">
        <h2>SERVICES</h2>
    </div>
    </div>
    <div class="content">
        <div class="headingd">
            <h1>Who we Do?</h1>
            <h2>Capturing Moments, Creating Memories</h2>
            <p>At Manavizha we always work on Integrating technology to turn your dream wedding into real 
              celebrations as a part of all the premium designs has been<br/> crafted by our Architechect 
              Team where you also experience with VR. We have an exclusive AI Enhanced mobile application for Photography.</p>
        </div>
    </div>

    <div class="container2">
        <div class="gallery1">
            <img src={img1} />
            <Link to="/aestheticwedding">
                <div class="desc">Aesthetic wedding decor</div>
                </Link>
        </div>
        <div class="gallery1">
            <img src={img2}/>
            <Link to="/photography">
                <div class="desc">photography</div>
            </Link>
        </div>
        <div class="gallery1">
            <img src={img3} />
            <Link to="/brindalmakeup">
                <div class="desc">brindal makeup</div>
            </Link>
        </div>
        <div class="gallery1">
            <img src={img4}/>
            <Link to="/catering">
                <div class="desc">catering</div>
            </Link>
        </div>
        <div class="gallery1">
            <img src={img5} />
            <Link to="/celebrity">
                <div class="desc">celebrity management</div>
            </Link>
        </div>
        <div class="gallery1">
            <img src={img5}/>
            <Link to="/events">
                <div class="desc">other events</div>
            </Link>
        </div>
    </div>
    
       <Footer1/>
        
        </>
    )
};
export default Services1;