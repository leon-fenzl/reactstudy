import React from "react";
import Navbar from "../Components/CompNavbar.js";
import Flexbox from "../Components/ContentFlexbox.js";
import Footer from "../Components/CompFooter.js";

export default function Portfolio(){
  return(
    <div className="portfolio">
      <nav><Navbar/></nav>
      <Flexbox/>
      <footer><Footer/></footer>
    </div>
  );
}