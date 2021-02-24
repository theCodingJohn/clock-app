import React, { createContext, useState } from "react";
import axios from 'axios'

export const StatusContext = createContext(null);

export const StatusProvider = (props) => {
  const [isComponentOpen, setComponentStatus] = useState(false);

  const [quote, setQuote] = useState(null)

  const [timeData, setTimeData] = useState(null);

  const [locationData, setLocationData] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random?tags=technology,famous-quotes");
      setQuote(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <StatusContext.Provider value={{isComponentOpen, setComponentStatus, quote, setQuote, fetchQuote, timeData, setTimeData, locationData, setLocationData}}>
      {props.children}
    </StatusContext.Provider>
  );
};