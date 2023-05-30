import React, { useState, useEffect } from 'react'
import { BsCoin } from 'react-icons/bs'
import { AppConsumer } from '../../context/AppContext'

function Planner() {

    const {
      amount,
      setAmount,
      percent,
      setPercent,
      custom,
      setCustom,
      endDate,
      setEndDate,
      calc,
      setCalc,
      currentDay,
      handlePress,
      todayDate,
    } = AppConsumer()

    useEffect(() => {
        if (amount > 0 && percent > 0) {
          const toSave = (amount * percent / 100).toFixed(2)
          const canUse = (amount - toSave)
          const diff = (new Date(endDate).getTime()-currentDay.getTime())
          const totalDays = Math.ceil(diff / (1000 * 3600 * 24))+1
          const result = (canUse / totalDays).toFixed(2)
          setCalc(result)
        }
    }, [amount, percent, endDate])

  return (
    <div data-aos="fade-up" data-aos-duration="900" className='planner-container'>
        <div className="logo">
            <h1>grana.app</h1>
            <BsCoin className='mini-logo'/>
        </div>

        <div className="how-much">
          <p>Quanto você tem no momento?</p>
          <input type='number' onChange={(e) => setAmount(e.target.value)} min={0} />
        </div>
 
        
        <div className="buttons">
          <p>Quanto você pretende guardar desse valor?</p>
          {!custom && (
            <div className='controls'>
              <button className={percent===5?'active':'btn'} onClick={() => handlePress(5)}>5%</button>
              <button className={percent===10?'active':'btn'} onClick={() => handlePress(10)}>10%</button>
              <button className={percent===15?'active':'btn'} onClick={() => handlePress(15)}>15%</button>
              <button className={percent===20?'active':'btn'} onClick={() => handlePress(20)}>20%</button>
              <button className={percent===30?'active':'btn'} onClick={() => handlePress(30)}>30%</button>
              <button className='btn' onClick={() => setCustom(true)}>Outro</button>
            </div>
          )}
          {custom && (
            <>
              <input type='number' value={percent} min={0} max={100} onChange={(e) => setPercent(e.target.value)} />
              <button className='btn' onClick={() => setCustom(false)}>Voltar</button>
            </>
          )}
        </div>

        <div className="day">
          <p>Até quando planeja guardar esse valor?</p>
          <input type='date' className='inp2' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>

        {amount>0 & percent>0 & new Date(endDate).getTime()>=currentDay.getTime() ? (
            <>
                <div className="results">
                    <p>Hoje é <u>dia {currentDay.getDate()}</u>, portanto:</p>
                    <p>Para economizar R${(amount * percent / 100).toFixed(2)} até o dia escolhido, você deve gastar no máximo R${calc} por dia.</p>
                </div>
            </>
        ): amount>0 & percent>0 & new Date(endDate).getTime()<currentDay.getTime() ? (
            <>
                <div className="results">
                    <p>Você escolheu uma data anterior à hoje! Selecione outra data!</p>
                </div>
            </>
        ): null}

    </div>
  )
}

export default Planner
