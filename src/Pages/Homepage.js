import React from "react";
import {Link} from 'react-router-dom';
import "../Styles/home.css"
export default function Homepage(){
    return(
      <div className="home">
        <div className="home-bg-holder">
          <div className="home-bg">

          </div>
        </div>
        <div className="card">
          <div className="card-info">
            <h1>León Fenzl</h1>
            <h3>Game Artist & Programmer</h3>
            <ul className="menu">
              <Link to="/works" className="link-Name" id="works">Works</Link>
              <Link to="/about" className="link-Name" id="about">About</Link>
            </ul>
          </div>
        </div>
      </div>
    )
}