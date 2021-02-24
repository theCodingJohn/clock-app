import React, { useEffect, useRef } from 'react'

const GithubButton = ({link}) => {
  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    width: "10rem",
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const anchorStyle = {
    color: "white",
    whiteSpace: "nowrap"
  }

  const githubBtnRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      githubBtnRef.current.style.display = "none";
    }, 3000)
  }, [])

  return (
    <div ref={githubBtnRef} style={style}>
      <a target="_blank" rel="noreferrer noopener" href={link} style={anchorStyle}>Github Repo Link</a>
    </div>
  )
}

export default GithubButton

