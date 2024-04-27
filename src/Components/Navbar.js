import React from "react";
import {Link} from 'react-router-dom';
import "../Styles/navbar.css"
export default function Navbar(){
  return(
    <div className="navbar">
      <div className="logo">
        <Link to="/reactstudy" className="link-Name" id="home"><h1>LEÓN FENZL</h1></Link>
        <p>GAME ARTIST & PROGRAMMER</p>
      </div>
      <ul className="nav-menu">
        <Link to="/reactstudy/works" className="link-Name" id="works">Works</Link>
        <Link to="/reactstudy/about" className="link-Name" id="about">About</Link>
      </ul>
    </div>
  )
}