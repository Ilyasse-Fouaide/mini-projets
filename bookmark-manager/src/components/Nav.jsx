import React, { useState } from 'react'
import logo from "../images/logo-bookmark.svg"
import logo2 from "../images/logo-bookmark-footer.svg"
import Hamburger from './Hamburger'
import Button from './Button';

function Nav() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <nav className='container mx-auto px-6 py-10'>
        <div className='flex items-center justify-between'>
          <div className='z-40'>
            <img src={isClicked ? logo2 : logo} alt="logo bookmark" />
          </div>
          <div className='hidden md:flex items-center space-x-10 uppercase text-grayishBlue'>
            <a href="#features" className='tracking-widest hover:text-softRed'>Features</a>
            <a href="#download" className='tracking-widest hover:text-softRed'>Download</a>
            <a href="#faq" className='tracking-widest hover:text-softRed'>Faq</a>
            <Button
              link={'#'}
              bgColor={'bg-softRed'}
              hoverBgColor={'hover:bg-transparent'}
              hoverTextColor={'hover:text-softRed'}
              borderColor={'border-softRed'}
              content={'Login'}
            />
          </div>
          <Hamburger isClicked={isClicked} setIsClicked={setIsClicked} />
        </div>
      </nav>
      <div className={`opacity-0 z-10 fixed top-0 w-full h-[100vh] transition-opacity duration-200 ${isClicked && 'opacity-95'} bg-indigo-950 divide-y-2 divide-gray-300 pt-24`}>
        {['Features', 'Download', 'Faq'].map((item, index) => (
          <div key={index} className={`${isClicked ? '' : 'hidden'}`}>
            <div className='flex flex-col justify-center items-center py-2 text-gray-200 uppercase'>
              <div className='hover:text-softRed cursor-pointer'>{item}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Nav