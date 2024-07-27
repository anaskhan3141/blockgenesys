import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useTheme } from '../ThemeProvider'
import { Link, animateScroll as scroll } from 'react-scroll';
import twitterImageLight from '../../assets/twitterLight.svg'
import twitterImageDark from '../../assets/twitterDark.svg'
import youtubeImageLight from '../../assets/youtubeDark.svg'
import youtubeImageDark from '../../assets/youtubeLight.svg'
import githubImageLight from '../../assets/githubDark.svg'
import githubImageDark from '../../assets/githubLight.svg'
import './Footer.css'

export default function Footer() {

    const { theme, toggletheme } = useTheme();
    const navigate = useNavigate()

    return (
        <footer className='footer' style={{ borderColor: theme == "light" ? "#2b2b2b" : "#e5e7eb" }}>
            <div className="top-container" style={{ borderColor: theme == "light" ? "#2b2b2b" : "#e5e7eb" }}>

                <p id='para'>BlockGenesys is a distributed network of industry-leading security researchers tackling the most complex and mission-critical protocols across web3.</p>

                <ul className='nav-items'>
                    <Link to="services" smooth={true} duration={1700} offset={-62} activeClass="active" className='Link'>
                        <li>Services</li>
                    </Link>

                    <Link to="portfolio" smooth={true} duration={1700} offset={-62} activeClass="active" className='Link'>
                        <li>Portfolio</li>
                    </Link>
                </ul>
                <div id='right-para'>
                    <p>For additional information please reach out to us at sales@blockgensys.com or contact us below:</p>
                    <span onClick={()=>{window.location.href = '/contact'}}>Contact Us </span>
                </div>
            </div>
            <div className="bottom-container">
                © 2024 Blockgensys


                <div className="social-icons">
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="BlockGenesys YouTube">
                        <img src={theme === "light" ? twitterImageLight : twitterImageDark} alt="" className='social-icon' />
                    </a>

                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="BlockGenesys YouTube">
                        <img src={theme === "light" ? youtubeImageDark : youtubeImageLight} alt="" className='social-icon' />
                    </a>

                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="BlockGenesys GitHub">
                        <img src={theme === "light" ? githubImageLight : githubImageDark} alt="" className='social-icon' />
                    </a>
                </div>



            </div>
        </footer>
    )
}
