import React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css"

export default function Homepage(){
  return(
  <div className="home" id="home">
    <div className="card">
      <h1 className="artist">LEÓN FENZL</h1>
      <h2>Game <span>(</span>Artist & Programmer<span>)</span></h2>
    </div>
  </div>
  );
};