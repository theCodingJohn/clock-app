import React, {useContext} from 'react'

// components
import { MoreButton } from "./index"

// context
import {StatusContext} from "../contexts/StatusContext"

const Clock = () => {
  const { timeData, locationData } = useContext(StatusContext); 

  const usersDateTime = new Date(timeData.datetime);
  const userHour = usersDateTime.getHours().toString().padStart(2, "0");
  const userMinute = usersDateTime.getMinutes().toString().padStart(2, "0");

  const greeting = (time) => {
    switch (time) {
      case time > 5:
        return "good morning,";
      case time > 12 && time > 18:
        return "good afternoon,";
      default:
        return "good evening,";
    }
  }

  return (
    <div className="clock-wrapper">
      <div className="clock">
        <span className="greeting">
          <div className="celestial-icon"></div>
          {greeting(usersDateTime.getHours())}
          <span className="text">it's currently</span>
        </span>
        <h1>{`${userHour}:${userMinute}`} <span className="time-zone">{ timeData.abbreviation }</span></h1>
        <span className="location">{ `In ${locationData.city}, ${locationData.country_code}` }</span>
      </div>
      <MoreButton />
    </div>
  )
}

export default Clock
