import React from 'react'

// icon
import arrowIcon from "../assets/desktop/icon-arrow-up.svg"

const MoreButton = () => {
  return (
    <div type="button" tabIndex="2" className="more-button">
      <p>More</p>
      <img className="arrow-icon" src={ arrowIcon } alt="arrow icon"/>
    </div>
  )
}

export default MoreButton
