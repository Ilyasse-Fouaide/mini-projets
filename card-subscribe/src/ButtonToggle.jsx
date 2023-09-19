import React, { useEffect, useState } from 'react'
import sun from "./img/sun.png"
import moon from "./img/moon.png"

function ButtonToggle() {
  const [isClicked, setIsClicked] = useState(false);


  useEffect(() => {
    if (isClicked) {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem("dark", true);
    } else {
      document.querySelector("html").classList.remove("dark")
      localStorage.setItem("dark", false);
    }
  }, [isClicked]);

  const toggle = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className='fixed top-0 right-0 p-3  dark:bg-zinc-800 bg-zinc-100'>
      <div className='p-2 bg-zinc-600 rounded-xl cursor-pointer'>
        <img src={isClicked ? moon : sun} className='w-[28px]' onClick={toggle} />
      </div>
    </div>
  )
}

export default ButtonToggle