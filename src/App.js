import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar.js';
import Homepage from "./Components/Homepage.js";
import About from "./Components/About.js";
import Footer from './Components/Footer.js';
import "./Components/Styles/main.css";
export default function App(){
  return(
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/reactstudy" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}