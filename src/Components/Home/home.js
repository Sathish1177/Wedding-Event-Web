import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/home.css';
import vividHomelogo from '../img/newlogo-removebg-preview.png'; // Import your image
import homeimg from "../img/vivid_home.png";
import aiimg from "../img/ai2-removebg-preview.png";
import vrimg from "../img/vrnew-removebg-preview.png";

function Home() {
  return (
    <div className="aaaaa">
      <nav>
        <div className="lists">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo">
            <img src={vividHomelogo} alt="Logo" />
          </label>
          <ul>
            <div className="sss">
             <li><Link to="/about" >Our Story</Link></li>
              <li><Link to="/services" >Services</Link></li>
              <li><Link to="/D_Weddingd" >Destination Weddings</Link></li>
              <li><Link to="/gallery" >Portfolio</Link></li>
              <li><Link to="/blog" >Blog</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
            </div>
            <div className="rightnav"> 
              <li><Link to="/login">Login</Link></li>
            </div>
          </ul>
        </div>
      </nav>
      <div className="aaa">
      <div class="ss">
        <img src={aiimg}/>
        <p>Experience your dream wedding<br/> with AI & VR Technology</p>
        <div class="ss1">
          <img src={vrimg}/>
        </div>
      </div>

        <div className="image15">
          <img src={homeimg} alt="Vivid Home" />
        </div>  
        <div className="hea">
          <div className="adx">
            <h1>Crafting <br />Everlasting <br />Memories</h1>
            <p>Extraordinary Weddings Don't <br /> Just Happen, It's Planned.</p>
          </div>
          <div className="image14">
            <img src={homeimg} alt="Vivid Home" />
          </div>
        </div>
        <div className="hea1">
          <p>Let Us Plan the Magic Together</p>
          <div className="he">
            <Link to="/Wedding_budget">Design your Wedding</Link>
          </div>
          <div className="hee">
              <img class="img1" src={aiimg}/>
              <img class="img2" src={vrimg}/>
            <p>Experience your dream wedding<br /> with AI & VR Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
