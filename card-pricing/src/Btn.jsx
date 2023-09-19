import React, { useEffect, useState } from 'react';
import sun from "./assets/sun.png";
import moon from "./assets/moon.png";

function Btn() {
  const [isDark, setIsDark] = useState(localStorage.getItem("isDark") === 'true'); // Convert to boolean

  useEffect(() => {
    if (isDark) {
      document.querySelector("html").classList.add("dark"); // Add your class name here
    } else {
      document.querySelector("html").classList.remove("dark"); // Add your class name here
    }
  }, [isDark]);

  const handleIsDark = () => {
    setIsDark(!isDark); // Toggle isDark
    localStorage.setItem('isDark', !isDark); // Store the new value
  }

  return (
    <div className='fixed right-5 top-5 w-[50px] h-[50px] p-2 bg-slate-800 dark:bg-white rounded-2xl cursor-pointer z-50 shadow-lg' onClick={handleIsDark}>
      <img data-v-6a110655 src={isDark ? moon : sun} className='w-full' alt={isDark ? 'Sun' : 'Moon'} loading='lazy' />
    </div>
  )
}

export default Btn;
