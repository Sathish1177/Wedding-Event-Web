import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contect.css";

import locathon from "../img/location_contect.png";
import call from "../img/call_contect.png";
import  share from "../img/share_contect.png";

import NavBarall from "../NavBar/navbar";
import Footer1 from "../Footer/footer";



    const Contect =() => {


        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();

      
          emailjs
            .sendForm(
                     'service_oiydf9n',
                     'template_s516vpp',
                     form.current,
                    {
                    publicKey:'4XwxwN1cd11ckD_KG',
                    })
            .then(
              () => {
                console.log('SUCCESS!');
                console.log("Message send");
                alert("Message sent successfully!");
                form.current.reset();
              },
              (error) => {
                console.log('FAILED...', error.text);
                alert("Message sending failed. Please try again later.");
              },
            );
        };
    

    
    return(         
        <>
        <NavBarall/>
<div className="ab_full_pad">
<div class = "imagea">
     <h2>CONTACT US</h2>
</div>
<div class="content">
    <div class="headinga">
        <h1>Get in touch</h1>
        <h2>Capturing Moments, Creating Memories</h2>
    </div>
    </div>

    <div className="contact_mid">

     <div>
      <img src={locathon}/>
      <h2>Location</h2>
      <p>H20, Periyar Nagar,<br/>
        Next to ABC Hospital,<br/>
        Erode - 638 009</p>
    </div>
     <div>
     <img src={share}/>
     <h2>email</h2>
    <p>vividclickzzstudio</p>
     </div>
     <div>
     <img src={call}/>
     <h2>Mobile</h2>
    <p>+91 97897 32019</p>
     </div>
    </div>

    
    <div class="headinga">
        <h1>Have Any Question?</h1>
        </div>

        <form ref={form} onSubmit={sendEmail} className="form1" name="formfull">
   
        <div class="form11">
            <p id="error-message"></p>
            <div class="contact-row">
                <div class="contact-form">
                    <label>Name</label>
                    <input type="text" id="fullname" name="fullname" required placeholder=" Enter Your Full Name"/>
                    
                </div>

                <div class="contact-form">
                    <label>Email Id</label>
                    <input type="email" name="email" id="email" required placeholder=" Enter Your Email Id"/>
                   
                </div>
            </div>

            <div class="contact-row">
                <div class="contact-form">
                    <label>Mobile No </label>
                    <input type="text" name="phone" id="phone" required placeholder="Enter Your Mobile No"/>
                 
                </div>

                <div class="contact-form">
                    <label>Subject</label>
                    <input type="text" name="subject" id="subject" required placeholder="Subject"/>
                   
                   
                </div>
            </div>

            <div class="contact-form1">
                <label>Message</label>
                <textarea name="message" id="message" required placeholder="Type your Message...."></textarea>
             
            </div>

            <div class="contact-form2">
                <input type="submit" class="sub"  name="submit" value="Send"/>
            </div>
        </div>
    </form>
    </div>
    <Footer1/>

        </>
    )
};
export default Contect;

