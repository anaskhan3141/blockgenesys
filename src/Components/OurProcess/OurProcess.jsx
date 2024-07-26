import React, { useContext } from 'react'
import "./OurProcess.css"
import { Link, animateScroll as scroll } from 'react-scroll';
import Down from "../../assets/Down.gif"
import { ScrollContext } from '../ScrollProvider'
import AnimatedText from '../AnimateText/AnimateText'

const OurProcess = () => {

    const scrollToNextComponent = useContext(ScrollContext);

    const handleClick = () => {
        scrollToNextComponent(); // Scroll to the next component
    };

    return (
        <section id='our-process-section'>
            <AnimatedText>
                <h1>
                    Our Auditing Process
                </h1>
            </AnimatedText>
            <AnimatedText>
                <p>
                    Our team of expert auditors employs a meticulous and comprehensive approach to ​smart contract auditing. We combine industry best practices with cutting-edge ​technologies to identify potential vulnerabilities and ensure the integrity of your smart ​contracts.
                </p>
            </AnimatedText>

            <AnimatedText>
                <Link to="page1" smooth={true} duration={1700} offset={-62} activeClass="active">

                    <img src={Down} alt=""  />
                </Link>
            </AnimatedText>

        </section>
    )
}

export default OurProcess