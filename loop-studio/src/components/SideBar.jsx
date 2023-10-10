import React from 'react'

function SideBar({ isClicked }) {
  return (
    <div className={`fixed flex flex-col divide-y-2 divide-gray-600 justify-between right-0 -top-6 bg-black w-[300px] h-screen text-right p-6 mt-6 rounded-tl-3xl duration-200 shadow-2xl ${isClicked ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className='pt-20'>
        {['About', 'Carrer', 'Events', 'Products', 'Support'].map((item, key) => (
          <div className='text-white cursor-pointer hover:bg-gray-800 p-3 rounded-lg' key={key}>
            <a href="#">{item}</a>
          </div>
        ))}
      </div>
      <div className="text-2xl text-center pt-6 text-gray-300"><a href="#">Meta<span className="text-blue-500 text-3xl">VERSE</span></a></div>
    </div>
  )
}

export default SideBar