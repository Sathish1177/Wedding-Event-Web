import React from "react";
import "../Aboutus/About.css";
import NavBarall from "../NavBar/navbar";
import Footer1 from "../Footer/footer";
import img11 from "../img/about-side-img.jpg";
import miss from "../img/mission.jpg";
import viss from "../img/visi.jpg";
import Incdec from "./num_cont/incdec";

function Abouts(){
    return(
        <>
       
       <NavBarall/>
<div className="ab_full_pad">
<div className="imagea">
 
     <h2 >OUR STORY</h2>
</div>

{/* <div className="fas-img">
 <img className="fas-r" src={right}/>
 <img className="fas-l" src={left}/>
 </div>  */}
<div class="ab_container">
        <div class="ab_heading">
            <h1>Who we Are?</h1>
            <h2>Capturing Moments, Creating Memories</h2>
        </div>
        
        <div class="ab_firstcontens">
            <div class="sss">
                <p>
                  Manavizha is the 1st Organized wedding planning company from Kongu region which is famous for Hospitality. 
                  Manavizha is a sister concern of VIVID who is in the Wedding and Event Industry for more than 13years.
                  Manavizha has its own inhouse team for wedding Decor,Photography ,Catering and Makeup services.We feel to
                  provide unqiue experince to the couple and their family by integrating technology to their wedding.
                  We have an unique mobile application for wedding photography with AI Technology &VR for Decor.
                  Destination Events are the future whether its wedding or puberty or babyshower. We are expert in 
                  crafting your moments at beautiful destination across the globe..
                </p>
                <br/>
                <p>
                  At Manavizha, we understand that your wedding day is one of the most significant moments of your life. 
                  That's why we're here to turn your dreams into reality with our meticulous planning and attention to detail.
                </p>
                <br/>
                <p>
                  From intimate gatherings to lavish affairs, we offer a range of services tailored to suit your need.
                  We believe that every couple deserves a wedding that is as extraordinary as their love, and we are 
                  honored to be a part of your special day. Let us take the stress out of wedding planning so that you 
                  can focus on what truly matters  celebrating your love and creating unforgettable memories with your loved ones.
                </p>
                <br/>
                <p>
                  With 13 years of experience in the wedding industry, we've had the privilege of working with 
                  couples from diverse backgrounds, cultures, and preferences, crafting weddings that truly speak 
                  to their personalities and desires.
                </p>
                <br/>
                <p>
                  With a passion for creativity and a commitment to excellence, we work closely with each couple 
                  to bring their unique vision to life. Whether you envision a grand extravaganza or an intimate gathering, 
                  our personalized approach ensures that your wedding reflects your individual style and personality.
                </p>
                <br/>
                <p>
                  we understand that your wedding day is one of the most significant moments of your life. 
                  That's why we're here to turn your dreams into reality with our meticulous planning and attention to detail
                </p>
            </div>
            <div class="rsd">
           <img src={img11}/>
        </div>
        </div>
      
    
  <div class="ab_visi">
    <h1>Vision Statement</h1>
    <img src={viss}/>
    <p>To be the premier wedding planning company renowned for 
      creating extraordinary celebrations that transcend expectations 
      and etch lifelong memories of love, joy, and elegance.</p>
  </div>
  <div class="ab_miss">
    <h1>Mission Statement</h1>
    <p>Our mission at Manavizha
      is to craft bespoke wedding celebrations that reflect the unique 
      personalities and dreams of each couple. With meticulous attention to detail, 
      unwavering dedication, and a passion for excellence, we strive to exceed expectations, 
      turning visions into reality and ensuring that every moment is filled with magic and bliss.</p>
      <img src={miss}/>
  </div>  
  <div class="ab_magic">
    <h1>Let's Create Magic Together</h1>
    <p>Your wedding day should be a reflection of your love story, 
      and we are here to ensure that every moment is as beautiful and unforgettable as you've always imagined.
      Get in touch with us today to begin planning the wedding of your dreams. Together, 
      let's create memories that will last a lifetime.</p>
  </div>

</div>
</div>
 <Incdec/>
    <Footer1/>
        </>
    );
}

export default Abouts;