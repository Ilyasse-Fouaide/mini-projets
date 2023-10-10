import React from 'react'
import logo from "../images/logo-bookmark.svg"

function Nav() {
  return (
    <nav className='container mx-auto px-6 py-10'>
      <div className='flex items-center justify-between'>
        <div className='z-10'>
          <img src={logo} alt="logo bookmark" />
        </div>
        <div className='hidden md:flex items-center space-x-10 uppercase text-grayishBlue'>
          <a href="#Features" className='tracking-widest hover:text-softRed'>Features</a>
          <a href="#Features" className='tracking-widest hover:text-softRed'>Download</a>
          <a href="#Features" className='tracking-widest hover:text-softRed'>Faq</a>
          <a href="" className='bg-softRed text-white px-6 py-2 rounded-md shadow-md hover:bg-transparent hover:text-softRed border-2 border-softRed'>login</a>
        </div>
        <div className='md:hidden'>Hamburger</div>
      </div>
    </nav>
  )
}

export default Nav