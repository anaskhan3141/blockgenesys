import React from 'react'
import DafiProtocol from "../../assets/DafiProtocol.png"
import VanarChain from "../../assets/VanarChain.png"
import ApeTerminal from "../../assets/ApeTerminal.png"

import "./OurClients.css"

const OurClients = () => {
  return (
    <div className='clients-main'>
        <h1>Our Clients</h1>
        <div className='clients'>
            <div className='client'>
                <img src={DafiProtocol} alt="" height={200} width={200} />
                <p>Dafi Protocol</p>
            </div>
            <div className='client'>
                <img src={VanarChain} alt="" height={200} width={200} />
                <p>Vanar Chain</p>
            </div>
            <div className='client'>
                <img src={ApeTerminal} alt="" height={200} width={200} />
                <p>Ape Terminal</p>
            </div>
        </div>
    </div>
  )
}

export default OurClients