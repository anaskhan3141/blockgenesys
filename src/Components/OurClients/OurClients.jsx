import React from 'react'
import goldfinch from "../../assets/clients/goldfinch.svg"
import clients from './clients'

import "./OurClients.css"

const OurClients = () => {
  return (
    <section className='clients-main'>
      <h1>Our Clients</h1>
      <div className="grid-container">
        {
          clients.map((element, index) => (
            <a key={index} className="grid-item" href={element.link} target='blank'>
              <img src={element.image} alt="" />
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default OurClients
