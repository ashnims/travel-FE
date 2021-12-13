import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!false);
  };
  const closeMenu =()=>{
      setClick(false);
  }
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="title">
          Traveller <SiYourtraveldottv className="logo" />{" "}
        </Link>
        <div  className="menu-icons">
          {click ? <FaTimes  onClick={closeMenu} /> : <FaBars  onClick={handleClick}/>}
        </div>

        <ul className={click ? "menubar-active" : "menubar"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/packges" className="nav-link">
              Packges
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Team & About
            </Link>
          </li>
        </ul>
        <Link to='/signup' > <button className="nav-btn">
          Sign Up
        </button> </Link>
      </div>
    </nav>
  );
};

export default Navbar;
