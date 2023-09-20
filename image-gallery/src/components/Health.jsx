import React from 'react'
import { FiDownload } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmarks } from 'react-icons/bs'

const images = [
  { src: "https://images.pexels.com/photos/414262/pexels-photo-414262.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/313716/pexels-photo-313716.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/2280620/pexels-photo-2280620.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/2351274/pexels-photo-2351274.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/6707511/pexels-photo-6707511.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/5863366/pexels-photo-5863366.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/1390403/pexels-photo-1390403.jpeg?auto=compress&cs=tinysrgb&w=1600" },
];

function Health() {
  return (
    <div className="max-w-7xl mx-auto columns-2 p-3 gap-3 space-y-3 lg:columns-3 lg:p-10 lg:gap-5 lg:space-y-5 mt-5">
      {images.map((image, index) =>
        <div className="hover:bg-gradient-to-tl hover:from-indigo-500/50 hover:to-pink-500/50 relative cursor-pointer group" key={index}>
          <img src={image.src} className='rounded-lg mix-blend-overlay' loading='lazy' />

          <a href={image.src} target='blank' className='z-10 absolute group: bottom-3 right-3 cursor-pointer hover:bg-white p-2 rounded-lg md:hidden'>
            <FiDownload className=' text-white text-2xl group:text-slate-700' />
          </a>

          <a href={image.src} target='blank' className='z-10 hidden absolute group bottom-3 right-3 cursor-pointer bg-white p-2 rounded-lg group-hover:inline hover:bg-slate-100'>
            <FiDownload className='text-2xl text-slate-700' />
          </a>

          <span className='z-10 hidden absolute group top-3 right-3 cursor-pointer bg-white p-2 rounded-lg group-hover:inline hover:bg-slate-100'>
            <AiOutlineHeart className='text-2xl text-slate-700' />
          </span>

          <span className='z-10 hidden absolute group top-3 right-6 -translate-x-[100%] cursor-pointer bg-white p-2 rounded-lg group-hover:inline hover:bg-slate-100'>
            <BsBookmarks className='text-2xl text-slate-700' />
          </span>

          <div className='-z-4 rounded-lg hidden group-hover:inline absolute h-full w-full top-0 bg-gradient-to-b from-black/40 from-1% via-white/0 to-black/40 to-99%'></div>

        </div>
      )}
    </div>
  )
}

export default Health