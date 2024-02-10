import React from "react";
import Navbar from "../Components/CompNavbar.js";
import Footer from "../Components/CompFooter.js";
import "../Styles/grid.css"
export default function CVitae(){
  return(
    <div className="grid">
      <nav><Navbar/></nav>
      <div className="empty-1"></div>
      <div className="contents"><h1>Curriculum Content</h1></div>
      <div className="empty-2"></div>
      <footer><Footer/></footer>
    </div>
  );
}