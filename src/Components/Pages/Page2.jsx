import React from 'react'
import whiteImage from "../../assets/02.svg"
import blackImage from "../../assets/02-black.svg"
import {useTheme} from '../ThemeProvider'
import "./Pages.css"

const Page2 = () => {

    const{theme, toggleTheme}  = useTheme()


    return (
        <section className='page-section'>

            <div className='page-container'>
                <div className='page-left'>
                    <p>02</p>
                    <h1>
                        Code <br /> Review
                    </h1>
                    <p>
                        Our experts meticulously review your smart contract ​code, analyzing it for adherence to best practices and ​potential vulnerabilities.
                    </p>
                    <p>
                        We employ advanced testing techniques, including ​static and dynamic analysis, to uncover security flaws ​such as reentrancy attacks and logic vulnerabilities. This ​comprehensive review ensures that your smart ​contracts are robust and resilient against potential ​threats.
                    </p>
                </div>
                <div className='page-right'>
                    <img src={theme == 'dark' ? whiteImage : blackImage} alt="" className='page-image' />
                </div>
            </div>
        </section>
    )
}

export default Page2;