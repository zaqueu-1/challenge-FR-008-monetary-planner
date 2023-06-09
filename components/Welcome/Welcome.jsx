import React from 'react'
import { BsCoin } from 'react-icons/bs'
import { AppConsumer } from '../../context/AppContext'

function Welcome() {

  const {
    handleWelcome,
  } = AppConsumer()

  return (
    <div data-aos="fade-up" data-aos-duration="900" className='welcome'>
      <div className="logo">
        <h1>grana.app</h1>
        <BsCoin className='mini-logo'/>
      </div>

      <p>Aqui você poderá definir um valor a ser guardado até determinada data, sabendo exatamente o quanto deve gastar por dia para tornar isso possível!</p>
        <button onClick={() => handleWelcome()}>Bora lá!</button> 
    </div>
  )
}

export default Welcome
