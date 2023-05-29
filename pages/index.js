import Head from 'next/head'
import Bg from '../components/Bg/Bg'
import Loader from '../components/Loader/Loader'
import Welcome from '../components/Welcome/Welcome'
import Planner from '../components/Planner/Planner'
import React, { useEffect } from 'react'
import { AppConsumer } from '../context/AppContext'
import AOS from 'aos'

export default function Home() {

  useEffect(() => {
    AOS.init()
  }, [])

  const {
    isLoading,
    isWelcome,
  } = AppConsumer()

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
          <Loader />
        ): null}

        {!isLoading & isWelcome ? (
          <Welcome />
        ): null}

        {!isWelcome && (
          <Planner />
        )}
      </main>
    </div>
  )
}
