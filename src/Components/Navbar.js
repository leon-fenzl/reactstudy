import React from "react";
import {Link} from 'react-router-dom';
import "../Styles/navbar.css"
export default function Navbar(){
    return(
      <div className="navbar">
        <div className="logo">
          <Link to="/reactstudy" className="link-Name" id="home"><h3>León Fenzl</h3></Link>
          <p>GAME ARTIST & PROGRAMMER</p>
        </div>
        <ul className="nav-menu">
          <Link to="/works" className="link-Name" id="works">Works</Link>
          <Link to="/about" className="link-Name" id="about">About</Link>
        </ul>
      </div>
    )
}