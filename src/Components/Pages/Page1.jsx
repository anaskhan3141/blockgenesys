import React from 'react'
import whiteImage from "../../assets/01.svg"
import blackImage from "../../assets/01-black.svg"
import AnimatedText from '../AnimateText/AnimateText'

import { useTheme } from '../ThemeProvider'
import "./Pages.css"


const Page1 = React.forwardRef((props, ref) => {

    const { theme, toggleTheme } = useTheme()
    return (

        <section className='page-section'>
            <div className='page-container' data-scroll-to="page1" ref={ref}>
                <div className='page-left' id='page1'>
                    <AnimatedText>
                        <p>01</p>
                        <h1>
                            Initial ​Assessment
                        </h1>
                    </AnimatedText>
                    <AnimatedText>
                        <p>
                            We begin by understanding your project goals, ​architecture, and smart contract specifications. This ​allows us to tailor our auditing approach to your specific ​needs, ensuring a thorough evaluation of your smart ​contracts.
                        </p>
                        <p>
                            Our team conducts a deep dive into your code to ​identify potential vulnerabilities and areas for ​improvement. By gaining a comprehensive ​understanding of your project's intricacies, we can ​develop a customized auditing strategy that effectively ​addresses your unique requirements.
                        </p>
                    </AnimatedText>
                </div>
                <div className='page-right'>
                    <AnimatedText>
                        <img src={theme == 'dark' ? whiteImage : blackImage} alt="" className='page-image' />
                    </AnimatedText>
                </div>
            </div>
        </section>
    )
})

export default Page1;