import React, {useContext, useEffect} from 'react'

// components
import {Clock} from "../components/index"
import {Quote} from "../components/index"
import { Footer } from "../components/index"

// context
import {StatusContext} from "../contexts/StatusContext"

const Home = () => {
  const { quote, fetchQuote } = useContext(StatusContext);

  useEffect(() => {
    fetchQuote();
  }, [])

  return (
    <>
      <main className="home container">
        {!!quote ? <Quote /> : <p>Loading...</p>}
        <Clock />
      </main>
      <Footer />
    </>
  )
}

export default Home
