import React, { useState } from 'react'
import logo from "../images/logo-bookmark.svg"
import logo2 from "../images/logo-bookmark-footer.svg"
import Hamburger from './Hamburger'
import Button from './Button';
import Navmenu from './Navmenu';

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
      <Navmenu isClicked={isClicked} />
    </>
  )
}

export default Nav