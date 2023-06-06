import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header({prefix}) {
  const [dropNav, setDropNav] = useState(false);
  
  useEffect(() => {
    setDropNav(false);
  }, []);

  return (
    <div className="navbar" id={dropNav ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => {setDropNav((prev) => !prev)}}> 
          <AiOutlineMenu /> 
        </button>
      </div>

      <div className="links">
        
        <a href={`${prefix}/`} id="name">Peter Yockey</a>
        <a href={`${prefix}/about`} className="navs">About</a>
        <a href={`${prefix}/portfolio`} className="navs">Portfolio</a>
        <a href={`${prefix}/contact`} className="navs">Contact</a>
        <a href={`${prefix}/resume`} className="navs">Resume</a>

        <div className="right"></div>
      </div>
    </div>
  )  
}
