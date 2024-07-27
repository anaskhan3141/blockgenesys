import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';
import Logo from "../../assets/Logo.gif"
import menuIcon from '../../assets/menuIcon.svg'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import { useTheme } from '../ThemeProvider';
import './Navbar.css'

export default function Navbar() {

  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme();
  const [width, setwidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsMenuOpen(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  }


  //--------------CALUCLATING SCREEN WIDTH-------------------------
  const calculateWidth = () => {
    setwidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', calculateWidth)

    return () => {
      window.removeEventListener('resize', calculateWidth)
    };
  }, []);

  return (

    width > 1024 ?
      <nav className='nav-bar'  >
        <div className="nav-container">
          <div className="navbar-left">
            <img src={Logo} alt="" id="nav-logo" />
            <h1 className='logo-name' onClick={()=>{window.location.href = '/'}}>BLOCK <br /> GENESYS</h1>
          </div>

          <div className="navbar-right">

            <ul className='list'>

              <Link to="services" smooth={true} duration={1700} offset={-62} activeClass="active" className='Link'>
                <li>Services</li>
              </Link>

              <Link to="portfolio" smooth={true} duration={1700} offset={-62} activeClass="active" className='Link'>
                <li >Portfolio</li>
              </Link>

            </ul>

            <input type="checkbox" id="dark-mode-button" onClick={toggleTheme} checked={theme === 'light' ? true : false} />

            <div className='theme-button' onClick={()=>{window.location.href = '/contact'}}>
              Contact
            </div>
          </div>
        </div>


      </nav>


      :
      //  =================================Mobile navbar==================================


      <nav className='nav-bar'>
        <div className="navbar-left">
          <img src={Logo} alt="" id="nav-logo" />
          <h1 className='logo-name' onClick={()=>{navigate('/')}}>BLOCK <br /> GENESYS</h1>
        </div>

        <div className='menu-button-div' onClick={toggleMenu}>
          <svg viewBox="0 0 23 23">
            <path fill="transparent" stroke-width="1.75" stroke="currentColor" stroke-linecap="round" d="M 4 2.5 L 20 2.5"></path>
            <path fill="transparent" stroke-width="1.75" stroke="currentColor" stroke-linecap="round" d="M 2 9.423 L 20 9.423" opacity="1"></path>
            <path fill="transparent" stroke-width="1.75" stroke="currentColor" stroke-linecap="round" d="M 4 16.346 L 20 16.346"></path></svg>
        </div>

        {isMenuOpen && (
          <div className={`menu ${isAnimating ? 'animate-slide-up' : 'animate-slide-down'}`}
            style={{ backgroundColor: theme === 'light' ? "#fff" : "#2b2b2b" }}>

            <ul className='menu-list'>
              <Link to="services" smooth={true} duration={1700} offset={-62} activeClass="active" className='Link' >
                <li onClick={toggleMenu}>Services</li>
              </Link>
              <Link to="portfolio" smooth={true} duration={1700} offset={-62} activeClass="active" className='Link' >
                <li onClick={toggleMenu}>Portfolio</li>
              </Link>
            </ul>

            <input type="checkbox" id="dark-mode-button" onClick={toggleTheme} checked={theme === 'light' ? true : false} />

            <div className='menu-contact-button' onClick={()=>{window.location.href = '/contact'}}>
              Contact
            </div>

          </div>
        )}

      </nav>
  )
}
