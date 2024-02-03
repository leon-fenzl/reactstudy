import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import About from "./Pages/About.js";
import "./Styles/main.css"
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/reactstudy" element={<Homepage/>}/>
        <Route path="/reactstudy/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}