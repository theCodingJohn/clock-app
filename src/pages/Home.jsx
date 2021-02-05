import React from 'react'

// components
import {Clock} from "../components/index"
import {Quote} from "../components/index"
import {Footer} from "../components/index"

const Home = () => {
  return (
    <>
      <main className="home container">
        <Quote />
        <Clock />
      </main>
      <Footer />
    </>
  )
}

export default Home
