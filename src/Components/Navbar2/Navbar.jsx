import React, { useEffect, useState } from 'react'
import Logo from "../../assets/Logo.gif"
import { useTheme } from '../ThemeProvider';
import './Navbar.css'

export default function Navbar() {

  const { theme, toggleTheme } = useTheme();
  const [width, setwidth] = useState(window.innerWidth);

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
    <nav className='nav-bar'  >
      <div className="navbar-left">
        <img src={Logo} alt="" id="nav-logo" />
        <h1 className='logo-name'>BLOCK <br /> GENESYS</h1>
      </div>
      {width > 1024 ?
        (
          <div className="navbar-right">

            <ul className='list'>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Blog</li>
              <li>Docs</li>
            </ul>
            <div className='theme-button' onClick={toggleTheme}>
              {theme === 'light' ?
                (<>Light Mode</>) :
                (<>Dark Mode</>)
}
            </div>
          </div>
        ) :

        (
          <div className='menu-button-div'>

            <svg viewBox="0 0 23 23">
              <path fill="transparent" stroke-width="1.75" stroke="currentColor" stroke-linecap="round" d="M 4 2.5 L 20 2.5"></path>
              <path fill="transparent" stroke-width="1.75" stroke="currentColor" stroke-linecap="round" d="M 2 9.423 L 20 9.423" opacity="1"></path>
              <path fill="transparent" stroke-width="1.75" stroke="currentColor" stroke-linecap="round" d="M 4 16.346 L 20 16.346"></path></svg>


          </div>
        )}

    </nav>
  )
}
