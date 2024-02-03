import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./Components/Styles/main.css";
import Navbar from './Components/Navbar.js';
import Homepage from "./Components/Homepage.js";
import Game from "./Components/Pages/Game.js"
import About from "./Components/About.js";
import Footer from './Components/Footer.js';

export default function App(){
  return(
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/reactstudy" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}