import React from "react";
import Navbar from "./pages/comps/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About"
import Works from "./pages/Works";
import Footer from "./pages/comps/Footer";
import "./styles/main.css"
import "./styles/app.css"
export default function App(){
  return(
    <>
      <Navbar/>
      <br/>
      <Homepage/>
      <br/>
      <About/>
      <br/>
      <Works/>
      <br/>
      <Works/>
      <br/>
      <Works/>
      <br/>
      <Footer/>
    </>
  );
};