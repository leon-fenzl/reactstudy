import React from "react";
import {Link} from 'react-router-dom';
import "../Styles/navbar.css"
export default function Navbar(){
    return(
      <div className="navbar">
        <div className="logo">
          <Link to="/" className="link-Name" id="home"><p>León Fenzl</p></Link>
          <h3>GAME ARTIST & PROGRAMMER</h3>
        </div>
        <ul className="nav-menu">
          <Link to="/works" className="link-Name" id="works">Works</Link>
          <Link to="/about" className="link-Name" id="about">About</Link>
        </ul>
      </div>
    )
}