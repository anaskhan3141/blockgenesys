import React from 'react'
import whiteImage from "../../assets/0.svg"
import blackImage from '../../assets/0-black.svg'
import AnimatedText from '../AnimateText/AnimateText'
import { useTheme } from '../ThemeProvider'

import "./Page.css"

const Page = () => {

    const { theme, toggleTheme } = useTheme()
    return (
        <section className='page1-section'>
            <AnimatedText>

                <div className='page1-container'>
                    <div className='page1-left '>

                        <h1>
                            Smart Contract ​Auditing
                        </h1>

                        <p>
                            Ensure the reliability and security of your blockchain-​based projects with our comprehensive smart contract ​auditing service. Our team of experienced auditors ​meticulously examines the code of your smart ​contracts, identifying potential vulnerabilities and ​weaknesses.
                        </p>
                        <p>
                            Through a combination of automated analysis and ​manual review, we ensure that your smart contracts ​adhere to best practices, mitigate the risk of ​exploitation, and safeguard your assets and ​transactions.
                        </p>
                    </div>
                    <div className='page1-right'>

                        <img src={theme == "dark" ? whiteImage : blackImage} alt="" className='page1-image' />
                    </div>
                </div>
            </AnimatedText>

        </section>


    )
}

export default Page;