import React, { useContext, useEffect } from 'react'
import axios from 'axios'

// components
import {Clock} from "../components/index"
import {Quote} from "../components/index"
import { Footer } from "../components/index"

// context
import {StatusContext} from "../contexts/StatusContext"

const Home = () => {
  const { quote, fetchQuote, timeData, locationData, setTimeData, setLocationData } = useContext(StatusContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeDataResponse = await axios.get("https://worldtimeapi.org/api/ip");
        setTimeData(timeDataResponse.data);
        const locationDataResponse = await axios.get("https://freegeoip.app/json/");
        setLocationData(locationDataResponse.data);
      } catch (e) {
        console.log(e)
      }
    }

    fetchData()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line
  }, [])

  const userTime = new Date();

  useEffect(() => {
    const setTime = () => {
      if (userTime.getHours() > 5 && userTime.getHours() < 18) {
        document.body.className += "";
      } 
      document.body.className += " night";
    }
    setTime();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <main className="home container">
        {!!quote ? <Quote /> : <p>Loading...</p>}
        {!!timeData && !!locationData ? <Clock /> : <p>Loading...</p>}
      </main>
      {!!timeData ? <Footer /> : <p>Loading...</p>}
    </>
  )
}

export default Home
