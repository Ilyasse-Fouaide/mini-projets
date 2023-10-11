import React from 'react'
import Button from './Button'

function TabContent({ isClicked }) {
  return (
    <>
      {isClicked && (
        <div className='relative flex flex-col items-center lg:flex-row space-y-10 space-x-0 lg:space-y-0 lg:space-x-10 mt-12'>
          <div className='w-full md:w-[500px] lg:w-1/3'>
            <img src={isClicked.image} alt={isClicked.tab} className='w-full' />
          </div>
          <div>
            <h2 className='text-3xl md:text-4xl text-center lg:text-left font-semibold'>{isClicked.header}</h2>
            <p className='mt-10 max-w-xl mx-auto text-center lg:text-left text-grayishBlue text-md'>{isClicked.content}</p>
            <Button
              link={"#"}
              content={"more info"}
              bgColor={"bg-softBlue"}
              borderColor={"border-softBlue"}
              className={"block lg:inline-block mt-10 text-center"}
            />
            <div className='illustration-tab'></div>
          </div>
        </div>
      )}
    </>
  )
}

export default TabContent