import React from "react";
import {Link} from 'react-router-dom';
import "../Styles/navbar.css"
export default function CompNavbar(){
  return(
    <div className="custom-navbar">
      <div className="LOGO">
        <Link to="/reactstudy" className="link"><h1>León Fenzl</h1></Link>
        <h0>
          <p>3D Artist - Programmer</p>
        </h0>
      </div>
      <div className="flex-menu">
        <div className="mobileMenu">
          <Link className="link"><h2>Mobile Menu</h2></Link>
        </div>
        <div className="link-page">
          <Link to="/portfolio" className="link"><h2>Portfolio</h2></Link>
        </div>
        <div className="link-page">
          <Link to="/curricullum" className="link"><h2>Curriculum</h2></Link>
        </div>
        <div className="link-page">
          <Link to="/tutorial" className="link"><h2>Tutorials</h2></Link>
        </div>
      </div>
    </div>
  );
}