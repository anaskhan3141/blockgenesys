import React from 'react'
import whiteImage from "../../assets/03.svg"
import blackImage from "../../assets/03-black.svg"
import AnimatedText from '../AnimateText/AnimateText'
import { useTheme } from '../ThemeProvider'
import "./Pages.css"

const Page3 = () => {

    const { theme } = useTheme()
    return (
        <section className='page-section'>

            <div className='page-container'>
                <div className='page-left'>
                    <AnimatedText>
                        <p>03</p>
                        <h1>
                            Detailed <br /> Reporting
                        </h1>
                    </AnimatedText>
                    <AnimatedText>
                        <p>
                            Upon completion of the audit, we provide you with a ​detailed report summarizing our findings.
                        </p>
                        <p>
                            This includes identified vulnerabilities, their severity ​levels, and actionable recommendations for ​remediation. Our transparent reporting process ​empowers you to make informed decisions about ​enhancing the security and reliability of your smart ​contracts, safeguarding your digital assets and ​bolstering stakeholder trust.
                        </p>
                    </AnimatedText>
                </div>
                <div className='page-right'>
                    <AnimatedText>
                        <img src={theme == 'light' ? blackImage : whiteImage} alt="" className='page-image' />
                    </AnimatedText>
                </div>
            </div>
        </section>
    )
}

export default Page3;