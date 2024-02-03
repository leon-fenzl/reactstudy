import React from "react";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import "../Styles/content.css"
export default function Navbar(){
  return(
    <nav>
      <Link to="/reactstudy" className="link"><h1>Homepage</h1></Link>
      <div className="mobileMenu">
        <h2>mobileMenu</h2>
      </div>
      <div className="about">
        <Link to="/reactstudy/about" className="link"><h2>About</h2></Link>
      </div>
    </nav>
  );
}