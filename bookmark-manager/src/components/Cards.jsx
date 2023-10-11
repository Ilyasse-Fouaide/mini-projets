import React from 'react'
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";
import CardsItem from './CardsItem';

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
        {data.map((item, index) => <CardsItem item={item} key={index} />)}
      </div>
    </section>
  )
}

export default Cards