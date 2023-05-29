import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
    const [amount, setAmount] = useState(null)
    const [percent, setPercent] = useState(null)
    const [custom, setCustom] = useState(false)
    const [endDate, setEndDate] = useState(null)
    const [calc, setCalc] = useState(null)

    const currentDay = new Date().getDate()

    const handlePress = (value) => {
        setPercent(value)
    }

    const [isLoading, setIsLoading] = useState(true)
    const [isWelcome, setIsWelcome] = useState(true)
  
    const handleWelcome = () => {
      setIsWelcome(false)
    }
 
    return (
    <AppContext.Provider value={{
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
        handleWelcome,
        isLoading,
        setIsLoading,
        isWelcome,
        setIsWelcome,
     }} >
          {children}
        </AppContext.Provider>
      )
    }

export const AppConsumer = () => useContext(AppContext)
export default AppProvider