import React from 'react'

function Navmenu({ isClicked }) {
  return (
    <div className={`z-10 fixed top-0 w-full h-[100vh] transition-opacity duration-200 ${isClicked ? '' : 'hidden'} bg-indigo-950 divide-y-2 divide-gray-300 pt-24`}>
      {['Features', 'Download', 'Faq'].map((item, index) => (
        <div key={index}>
          <div className='flex flex-col justify-center items-center py-2 text-gray-200 uppercase'>
            <div className='hover:text-softRed cursor-pointer'>{item}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Navmenu