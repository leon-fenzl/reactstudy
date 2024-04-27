import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Works from "./Pages/Works";
import About from "./Pages/About";
import "./main.css"
export default function App(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    )
}
/*
  <Route path="/" element={<Homepage/>}/>
  <Route path="/portfolio" element={<Portfolio/>}/>
  <Route path="/tutorial" element={<Tutorial/>}/>
  <Route path="/curricullum" element={<CVitae/>}/>
*/