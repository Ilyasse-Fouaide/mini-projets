import React, { useState } from 'react'
import tab1 from "../images/illustration-features-tab-1.svg";
import tab2 from "../images/illustration-features-tab-2.svg";
import tab3 from "../images/illustration-features-tab-3.svg";
import Button from './Button';

const data = [
  {
    tab: "Simple Bookmarking",
    header: "Bookmark in one click",
    content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: tab1
  },
  {
    tab: "Speedy Searching",
    header: "Bookmark in one click",
    content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: tab2
  },
  {
    tab: "Easy sharing",
    header: "Bookmark in one click",
    content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: tab3
  },
]

function Tab() {
  const [isClicked, setIsClicked] = useState(data[0]);

  return (
    <section>
      <div className="container mx-auto px-6 py-12">
        <div className='flex flex-col w-full md:w-fit md:flex-row md:border-b'>
          {data.map((item, key) => (
            <div className={`relative border-b py-5 text-center md:p-6 hover:text-softRed ${isClicked.tab === item.tab ? 'text-softRed border-b-2 border-b-softRed' : 'text-gray-700'} font-medium cursor-pointer`} key={key} onClick={() => setIsClicked(item)}>
              {item.tab}
            </div>
          ))}
        </div>
        {isClicked && (
          <div className='relative flex flex-col items-center md:flex-row space-y-10 space-x-0 md:space-y-0 md:space-x-10 mt-12'>
            <div className='w-full lg:w-1/3'>
              <img src={isClicked.image} alt={isClicked.tab} className='w-full' />
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl text-center md:text-left font-semibold'>{isClicked.header}</h2>
              <p className='mt-10 max-w-lg mx-auto text-center md:text-left text-grayishBlue text-base'>{isClicked.content}</p>
              <Button
                link={"#"}
                content={"more info"}
                bgColor={"bg-softBlue"}
                borderColor={"border-softBlue"}
                className={"block md:inline-block mt-10 text-center"}
              />
              <div className='illustration-tab'></div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Tab