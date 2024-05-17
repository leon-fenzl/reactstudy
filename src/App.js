import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Works from "./pages/Works";
import About from "./pages/About";
import "./styles/main.css"
import "./styles/app.css"
export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/reactstudy" element={<Homepage/>}/>
        <Route path="/reactstudy/works" element={<Works/>}/>
        <Route path="/reactstudy/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};
/*
<Route path="/reactstudy/works" element={<Works/>}/>
*/