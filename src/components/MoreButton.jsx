import React, { useContext } from 'react'
import gsap from 'gsap'

// context
import {StatusContext} from "../contexts/StatusContext"

// icon
import arrowIcon from "../assets/desktop/icon-arrow-up.svg"

const MoreButton = () => {
  const { isComponentOpen, setComponentStatus } = useContext(StatusContext);

  const openComponent = () => {
    const tl = gsap.timeline();

    tl.from(".footer", { translateY: 0 })
      .to(".footer", { translateY: 0 }, 0)
      .from("body", { translateY: 0 }, 0)
      .to("body", { translateY: "-16rem" }, 0);
    
    gsap.to(".arrow-icon", { rotate: 0 });
    
    tl.play();
    // setComponentStatus(!isComponentOpen);
  }

  const closeComponent = () => {
    const tl = gsap.timeline();

    tl.to(".footer", { translateY: 0 })
      .from(".footer", { translateY: "0" }, 0)
      .from("body", { translateY: "-16rem" }, 0)
      .to("body", { translateY: 0 }, 0);
    
    gsap.to(".arrow-icon", { rotate: 180 });
    
    tl.play();
  }

  const handleComponentStatus = () => {
    isComponentOpen ? closeComponent() : openComponent();
    setComponentStatus(!isComponentOpen);
  };


  return (
    <div onClick={handleComponentStatus} type="button" tabIndex="2" className="more-button">
      <p>{ isComponentOpen ? "less" : "more" }</p>
      <img className="arrow-icon" src={ arrowIcon } alt="arrow icon"/>
    </div>
  )
}

export default MoreButton
