import React, { useContext } from 'react'

// context
import {StatusContext} from "../contexts/StatusContext"

const Footer = () => {
  const { timeData } = useContext(StatusContext);

  return (
    <footer className="footer container">
      <div className="wrapper timezone-wrapper">
        <p>Current timezone</p>
        <h4>{timeData.timezone}</h4>
      </div>
      <div className="wrapper dayYear-wrapper">
        <p>Day of the year</p>
        <h4>{timeData.day_of_year}</h4>
      </div>
      <div className="wrapper dayWeek-wrapper">
        <p>day of the week</p>
        <h4>{timeData.day_of_week}</h4>
      </div>
      <div className="wrapper weekNumber-wrapper">
        <p>week number</p>
        <h4>{ timeData.week_number }</h4>
      </div>
    </footer> 
  )
}

export default Footer
