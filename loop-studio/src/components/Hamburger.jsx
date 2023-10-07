import React from 'react'

function Hamburger({ isClicked, setIsClicked }) {
  return (
    <div className="relative w-10 h-10 space-y-2 flex flex-col justify-center cursor-pointer md:hidden" onClick={() => setIsClicked(!isClicked)}>
      <div className={`w-full h-1 transition-all bg-white ${isClicked ? 'absolute top-1/2 -translate-y-1/2 -rotate-45 duration-200' : ''}`}></div>
      <div className={`w-full h-1 bg-white ${isClicked ? 'hidden' : ''}`}></div>
      <div className={`w-full h-1 transition-all bg-white ${isClicked ? 'absolute bottom-1/2 translate-y-1/2 rotate-45 duration-200' : ''}`}></div>
    </div>
  )
}

export default Hamburger