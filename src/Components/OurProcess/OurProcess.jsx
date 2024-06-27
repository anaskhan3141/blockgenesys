import React, { useContext } from 'react'
import "./OurProcess.css"
import Down from "../../assets/Down.gif"
import { ScrollContext } from '../ScrollProvider'

const OurProcess = () => {

    const scrollToNextComponent = useContext(ScrollContext);

    const handleClick = () => {
        scrollToNextComponent(); // Scroll to the next component
    };

    return (
        <section id='our-process-section'>
            <h1>
                Our Auditing Process
            </h1>
            <p>
                Our team of expert auditors employs a meticulous and comprehensive approach to ​smart contract auditing. We combine industry best practices with cutting-edge ​technologies to identify potential vulnerabilities and ensure the integrity of your smart ​contracts.
            </p>


            <img src={Down} alt="" onClick={handleClick} />


        </section>
    )
}

export default OurProcess