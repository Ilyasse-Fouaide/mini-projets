import React from 'react'

function Hamburger({ isClicked, setIsClicked }) {
  return (
    <div className='z-40 md:hidden w-9 space-y-1 cursor-pointer relative' onClick={() => setIsClicked(!isClicked)}>
      <div className={`h-1 rounded-full bg-black duration-200 ${isClicked && 'rotate-45 translate-y-2 bg-white'}`}></div>
      <div className={`h-1 rounded-full bg-black ${isClicked && 'opacity-0'}`}></div>
      <div className={`h-1 rounded-full bg-black duration-200 ${isClicked && '-rotate-45 -translate-y-2 bg-white'}`}></div>
    </div>
  )
}

export default Hamburger