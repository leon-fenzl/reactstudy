import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
import "../styles/app.css";
import "../styles/imgsadress.css"

export default function Works(){
  
  return(
  <>
    <div className="flex-holder" id="works">
      <div className="flexbox">
        <a to="" className="flex-item" id="img1">
        <div className="item-name-bg"/>
        <h2 className="item-name">Samsara</h2>
        </a>
        <a to="" className="flex-item" id="img2">
        <div className="item-name-bg"/>
        <h2 className="item-name">Samsara</h2>
        </a>
        <a to="" className="flex-item" id="img3">
        <div className="item-name-bg"/>
        <h2 className="item-name">Samsara</h2>
        </a>
        <a to="" className="flex-item" id="img4">
        <div className="item-name-bg"/>
        <h2 className="item-name">Elf Study 1</h2>
        </a>

        <a to="" className="flex-item" id="img5">
        <div className="item-name-bg"/>
        <h2 className="item-name">Elf Study 2</h2>
        </a>

        <a to="" className="flex-item" id="img6">
        <div className="item-name-bg"/>
        <h2 className="item-name">Elf Study 3</h2>
        </a>

        <a to="" className="flex-item" id="img7">
        <div className="item-name-bg"/>
        <h2 className="item-name">Fan made Pokéball</h2>
        </a>

        <a to="" className="flex-item" id="img8">
        <div className="item-name-bg"/>
        <h2 className="item-name">Sculpt Study</h2>
        </a>
      </div>
    </div>
  </>
  );
};