import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar(){
  return(
    <div className="navbar">
     <h1><Link to="/reactstudy" className="nav-links">LEON FENZL</Link></h1>
     <h2><Link to="/reactstudy/works" className="nav-links">Works</Link></h2>
     <h2><Link to="/reactstudy/about" className="nav-links">About</Link></h2>
    </div>
  );
}