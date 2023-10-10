import React from 'react'
import Button from './Button'
import image from '../images/illustration-hero.svg'

function Hero() {
  return (
    <section>
      <div className="container mx-auto px-6 py-10 flex flex-col-reverse items-center lg:flex-row">
        <div className='space-y-10 w-full lg:w-1/2'>
          <h1 className='text-3xl font-semibold text-center md:text-4xl lg:text-6xl lg:text-left'>A Simple Bookmark Manager</h1>
          <p className='text-center text-grayishBlue max-w-md mx-auto lg:text-left text-md md:text-lg lg:mx-0'>
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load intantly. Try it for free.
          </p>
          <div className='flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-2 md:space-x-4 md:space-y-0'>
            <Button
              link={'#'}
              bgColor={'bg-softBlue'}
              hoverBgColor={'hover:bg-transparent'}
              hoverTextColor={'hover:text-softBlue'}
              borderColor={'border-softBlue'}
              className={'w-full md:w-fit text-center font-semibold'}
              content={'Get It On Chrome'}
            />
            <Button
              link={'#'}
              bgColor={'bg-grayishBlue'}
              hoverBgColor={'hover:bg-transparent'}
              hoverTextColor={'hover:text-grayishBlue'}
              borderColor={'border-grayishBlue'}
              className={'w-full md:w-fit text-center font-semibold'}
              content={'Get It On Firefox'}
            />
          </div>
        </div>
        <div className='relative w-full lg:w-1/2'>
          <div className='illustration'></div>
          <img src={image} alt="" className='z-10 w-full' />
        </div>
      </div>
    </section>
  )
}

export default Hero