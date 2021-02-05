import React, {useContext, useEffect, useState} from 'react'
import gsap from 'gsap'
import axios from 'axios'

// context
import {StatusContext} from "../contexts/StatusContext"

const Quote = () => {
  const { quote, fetchQuote } = useContext(StatusContext);

  const handleClick = () => {
    fetchQuote()
    rotate();
  }

  const rotate = () => {
    let tl = gsap.timeline();
    tl.from(".refresh-button", { rotation: 0 })
      .to(".refresh-button", { rotation: 360 });
    
    tl.play()
  }

  return (
    <div className="quote">
      <div> 
        <q>{quote.content}</q>
        <h3 className="author">{quote.author}</h3>
      </div>
      <div>
      <svg onClick={handleClick} className="refresh-button" type="button" tabIndex="1" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z" fill="#FFF" fill-rule="nonzero" opacity=".5"/></svg>
      </div>
    </div>
  )
}

export default Quote
