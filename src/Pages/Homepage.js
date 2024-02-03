import React from "react";
import {Link} from "react-router-dom";
import Navbar from '../Components/ContentNavbar.js';
import Footer from '../Components/ContentFooter.js';

export default function Homepage(){
  return(
    <div className="container">
      <Navbar/>
      <div id="empty1">empty 1</div>
      <div id="content1">content 1</div>
      <div id="empty2">empty 2</div>
      <Footer/>
    </div>
  );
}