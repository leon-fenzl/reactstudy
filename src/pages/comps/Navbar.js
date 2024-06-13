import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar(){
  return(
    <div className="navbar">
     <h1><a href="/" className="nav-links">LEON FENZL</a></h1>
     <h2><a href="#about" className="nav-links">About</a></h2>
     <h2><a href="#works" className="nav-links">Works</a></h2>
    </div>
  );
}