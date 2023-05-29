import Head from 'next/head'
import Bg from '../components/Bg/Bg'
import Loader from '../components/Loader/Loader'
import Welcome from '../components/Welcome/Welcome'
import Planner from '../components/Planner/Planner'
import React, { useState, useEffect } from 'react'
import AOS from 'aos'

export default function Home() {

  useEffect(() => {
    AOS.init()
  }, [])

  const [isLoading, setIsLoading] = useState(true)
  const [isWelcome, setIsWelcome] = useState(true)

  const handleWelcome = () => {
    setIsWelcome(false)
  }

  return (
    <div>
      <Head>
        <title>grana.app | economizar nunca foi tão fácil!</title>
        <meta name="description" content="economizar nunca foi tão fácil!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Bg />
        {isLoading ? (
          <Loader setIsLoading={setIsLoading}/>
        ): null}

        {!isLoading & isWelcome ? (
          <Welcome handleWelcome={handleWelcome}/>
        ): null}

        {!isWelcome && (
          <Planner />
        )}
      </main>
    </div>
  )
}
