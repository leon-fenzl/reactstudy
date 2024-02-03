import React from "react";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import './Styles/navbar.css';
import imgLogo from "../images/Networkedplay_Logo.png";
import imgMenu from "../images/Btt_Menu.png";
export default function Navbar(){
  return(
    <nav className="navbar">
      <Link to="/reactstudy" className="links">Homepage</Link>
      <Link to="/about" className="links">About</Link>
    </nav>
  );
}
