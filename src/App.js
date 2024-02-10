import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import Portfolio from "./Pages/Portfolio.js";
import Tutorial from "./Pages/Tutorial.js";
import CVitae from "./Pages/CVitae.js";
import "./main.css"
export default function App(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/reactstudy" element={<Homepage/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/tutorial" element={<Tutorial/>}/>
          <Route path="/curricullum" element={<CVitae/>}/>
        </Routes>
      </BrowserRouter>
    )
}