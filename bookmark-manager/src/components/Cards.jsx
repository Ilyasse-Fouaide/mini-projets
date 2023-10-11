import React from 'react'
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";
import Button from './Button';

const data = [
  {
    title: "Add to Chrome",
    content: "Minimum Version 62",
    image: chrome
  },
  {
    title: "Add to Firefox",
    content: "Minimum Version 62",
    image: firefox
  },
  {
    title: "Add to Opera",
    content: "Minimum Version 62",
    image: opera
  }
];

function Cards() {
  return (
    <section>
      <div className='container mx-auto px-10 py-10 flex flex-col items-center lg:flex-row lg:justify-center space-x-0 space-y-7 lg:space-y-0 lg:space-x-10'>
        {data.map((item, index) => (
          <div className={`shadow-lg rounded-xl p-6 w-full lg:w-[300px]`} key={index}>
            <div className='w-fit mx-auto'><img src={item.image} alt={item.title} /></div>
            <h2 className='font-semibold text-xl text-center mt-10'>{item.title}</h2>
            <p className='mt-5 text-md text-center text-grayishBlue'>{item.content}</p>
            <div className='mt-5 border-t-2 rounded-full'></div>
            <Button
              bgColor={"bg-softBlue"}
              className={"mt-5 block text-center"}
              borderColor={"border-softBlue"}
              content={"Add & Install Extension"}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cards