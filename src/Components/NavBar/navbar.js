import React from "react";
import "../NavBar/navbar.css";
import vividHomelogo from "../img/newlogo-removebg-preview.png";
import { Link, NavLink } from "react-router-dom";

function NavBarall(){
    return(
        <>
          <nav>
        <div className="listsn">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo">
          <NavLink to="/home"><img src={vividHomelogo} alt="Logo" /></NavLink>
          </label>
          <ul>
            <div className="sss">
                
            <li><Link to="/about" exact activeClassName="active1">Our Story</Link></li>
              <li><Link to="/services" activeClassName="active1">Services</Link></li>
              <li><Link to="/D_Weddingd" activeClassName="active1">Destination Weddings</Link></li>
              <li><Link to="/gallery" activeClassName="active1">Portfolio</Link></li>
              <li><Link to="/Wedding_budget" activeClassName="active1">wedding budget plan</Link></li>
              <li><Link to="/blog" activeClassName="active1">Blog</Link></li>
              <li><Link to="/contact" activeClassName="active1">Contact</Link></li>
            </div>
            <div className="rightnav">
              <li><Link to="/login">Login</Link></li>
            </div>
          </ul>
        </div>
      </nav>
        

        </>
    );
};
export default NavBarall;