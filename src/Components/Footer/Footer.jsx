import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-main'>
        <h1>
        Secure Your Decentralized Future!
        </h1>
        <div className='links'>
            <p>connect with us</p>
            <ul className='link'>
                <li><a>X</a></li>
                <li><a>Github</a></li>
                <li><a>Medium</a></li>
            </ul>
        </div>
        <p className='contact'>contact@blockgenesys.com</p>
    </div>
  )
}

export default Footer