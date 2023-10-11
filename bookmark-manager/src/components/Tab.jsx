import React, { useState } from 'react'
import tab1 from "../images/illustration-features-tab-1.svg";
import tab2 from "../images/illustration-features-tab-2.svg";
import tab3 from "../images/illustration-features-tab-3.svg";
import TabsItem from './TabsItem';
import TabContent from './TabContent';

const data = [
  {
    tab: "Simple Bookmarking",
    header: "Bookmark in one click",
    content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: tab1
  },
  {
    tab: "Speedy Searching",
    header: "Intelligent search",
    content: "Our powerful search feature will help you find saved sites in not time at all. No need to trawl through all of your bookmarks.",
    image: tab2
  },
  {
    tab: "Easy sharing",
    header: "Share your bookmarks",
    content: "Easily share your bookmarks and collections with others. Create a shareable link that you can sen at the click of a button.",
    image: tab3
  },
]

function Tab() {
  const [isClicked, setIsClicked] = useState(data[0]);

  return (
    <section>
      <div className="container mx-auto px-6 py-10">
        <div className='flex flex-col w-full md:w-fit md:flex-row md:border-b'>
          <TabsItem data={data} isClicked={isClicked} setIsClicked={setIsClicked} />
        </div>
        <TabContent isClicked={isClicked} />
      </div>
    </section>
  )
}

export default Tab