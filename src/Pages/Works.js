import React from "react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer";
import "../Styles/works.css"
import "../Styles/content-grid.css"
export default function Works(){
  
  return(
    <div>
      <Navbar/>
      <div className="grid">
        <div className="side1"></div>
        <div className="contents">
          <div className="flexbox">
            <button className="flex-item">
            <div className="item-bg" id="item-0"></div>
            <p className="item-name">Pokéball</p>
            </button>
            <button className="flex-item">
            <div className="item-bg" id="item-1"></div>
            <p className="item-name">Elf 1</p>
            </button>
            <button className="flex-item">
            <div className="item-bg" id="item-2"></div>
            <p className="item-name">Elf 2</p>
            </button>
            <button className="flex-item">
            <div className="item-bg" id="item-3"></div>
            <p className="item-name">Elf 3</p>
            </button>
            <button className="flex-item">
            <div className="item-bg" id="item-4"></div>
            <p className="item-name">Pokéball</p>
            </button>
            <button className="flex-item">
            <div className="item-bg" id="item-5"></div>
            <p className="item-name">Pokéball</p>
            </button>
            <button className="flex-item">
            <div className="item-bg" id="item-6"></div>
            <p className="item-name">Pokéball</p>
            </button>
          </div>
        </div>
        <div className="side2"></div>
      </div>
      <Footer/>
    </div>
  )
}