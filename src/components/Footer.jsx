import React from 'react'

const Footer = () => {

  return (
    <footer className="footer container">
      <div className="wrapper timezone-wrapper">
        <p>Current timezone</p>
        <h4>Asia/Manila</h4>
      </div>
      <div className="wrapper dayYear-wrapper">
        <p>Day of the year</p>
        <h4>36</h4>
      </div>
      <div className="wrapper dayWeek-wrapper">
        <p>day of the week</p>
        <h4>5</h4>
      </div>
      <div className="wrapper weekNumber-wrapper">
        <p>week number</p>
        <h4>5</h4>
      </div>
    </footer> 
  )
}

export default Footer
