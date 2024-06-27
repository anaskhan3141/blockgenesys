import React from 'react'
import Logo from "../../assets/0.svg"

import "./Pages.css"

const Page0 = () => {
    return (
        <section className='page-section'>
            <div className='page-container'>
                <div className='page-left '>
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
                <div className='page-right'>
                    <img src={Logo} alt="" className='page-image'/>
                </div>
            </div>
        </section>

    )
}

export default Page0;