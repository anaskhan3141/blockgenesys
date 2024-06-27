import React from "react";
import Logo from "../../assets/Logo.gif"
import "./Navbar.css"
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
    return(
      <nav className="navbar">
        <img src={Logo} alt=""/>
        <h1>BLOCK <br /> GENESYS</h1>
      </nav>
    )
}

export default Navbar;