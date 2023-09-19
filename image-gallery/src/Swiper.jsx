import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const images = [
  { src: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { src: "https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1600" },
];

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className='relative'>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[70vh]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-full bg-cover bg-no-repeat bg-center -z-10 bg-black/50 bg-blend-overlay' style={{ backgroundImage: `url(${image.src})` }}></div>
          </SwiperSlide>
        ))}
        <div className="hidden autoplay-progress w-10" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <div className='w-[95%] md:w-[700px] z-10 p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='  text-[20px] md:text-[33px] font-extrabold text-white'>The best free stock photos, royalty free images & videos shared by creators.</div>
        <div className='mt-6'>
          <input type="text" className="w-full h-[44px] px-7 outline-none rounded-lg py-5 md:py-7 shadow-lg  placeholder:text-lg placeholder:text-slate-500" placeholder='Search for free photos' />
        </div>
        <div className='mt-6  text-white  font-bold text-sm md:text-base'>
          <span className='text-slate-300'>Trending</span>: mehndi design, motivational, meeting, london, social media marketing
        </div>
      </div>

    </div>
  );
}
