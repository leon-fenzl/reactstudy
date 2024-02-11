import React from "react";
import {Link} from 'react-router-dom';
import "../Styles/portfolio.css"
export default function ContentFlexbox(){
  return(
    <div className="flexbox">
      <div className="flexchild">
        <Link className="link-art">
          <h1>Art</h1>
        </Link>
      </div>
      <div className="flexchild">
        <Link className="link-art">
          <h1>Art</h1>
        </Link>
      </div>
      <div className="flexchild">
        <Link className="link-art">
          <h1>Art</h1>
        </Link>
      </div>
      <div className="flexchild">
        <Link className="link-art">
          <h1>Art</h1>
        </Link>
      </div>
      <div className="flexchild">
        <Link className="link-art">
          <h1>Art</h1>
        </Link>
      </div>
      <div className="flexchild">
        <Link className="link-art">
          <h1>Art</h1>
        </Link>
      </div>
    </div>
  );
}