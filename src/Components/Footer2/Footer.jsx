import React from 'react'
import {useTheme} from '../ThemeProvider'
import './Footer.css'

export default function Footer() {

    const {theme, toggletheme} = useTheme();
    return (
        <footer className='footer' style={{borderColor: theme=="light" ? "#2b2b2b" : "#e5e7eb" }}>
            <div className="top-container" style={{borderColor: theme=="light" ? "#2b2b2b" : "#e5e7eb" }}>

                <p id='para'>BlockGenesys is a distributed network of industry-leading security researchers tackling the most complex and mission-critical protocols across web3.</p>

                <ul className='nav-items'>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                </ul>
                <div id='right-para'>
                    <p>For additional information please reach out to us at sales@blockgensys.com or contact us below:</p>
                    <span>Contact Us </span>
                </div>
            </div>
            <div className="bottom-container">
                <p>© 2024 Blockgensys</p>


            </div>
        </footer>
    )
}
