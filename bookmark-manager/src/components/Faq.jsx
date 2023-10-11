import React from 'react'
import { HiChevronUp } from "react-icons/hi";

const data = [
  {
    heading: "What is Bookmark?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sapiente perspiciatis laboriosam beatae veritatis exercitationem, quis magni optio quibusdam eum eius fugiat esse excepturi reprehenderit harum magnam vitae quae sit."
  },
  {
    heading: "how can i request a new browser?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sapiente perspiciatis laboriosam beatae veritatis exercitationem, quis magni optio quibusdam eum eius fugiat esse excepturi reprehenderit harum magnam vitae quae sit."
  },
  {
    heading: "Is there a mobile app?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sapiente perspiciatis laboriosam beatae veritatis exercitationem, quis magni optio quibusdam eum eius fugiat esse excepturi reprehenderit harum magnam vitae quae sit."
  },
  {
    heading: "What about other Chrominium?",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sapiente perspiciatis laboriosam beatae veritatis exercitationem, quis magni optio quibusdam eum eius fugiat esse excepturi reprehenderit harum magnam vitae quae sit."
  },
];

function Faq() {
  return (
    <>
      <section>
        <div className="container mx-auto px-6 py-10 space-y-10 mt-6">
          <h2 className='font-semibold text-4xl text-center'>Frequently Asked Questions</h2>
          <p className='max-w-xl mx-auto text-md md:text-lg text-center text-grayishBlue'>
            Here are some of our FAQs. If you have any other questions you'd like answered feel to email us.
          </p>
        </div>
      </section>
      {/* FAQs-According */}

      <section>
        <div className="container mx-auto px-6 py-10 divide-y-2">
          {data.map((item, index) => (
            <div className='group overflow-hidden' key={index}>
              <div className='flex justify-between items-center py-3 text-gray-600 text-md hover:text-softRed cursor-pointer transition-colors duration-200'>
                <div>{item.heading}</div>
                <HiChevronUp className='text-3xl rotate-0 transition-transform duration-200 group-hover:rotate-180' />
              </div>
              <p className='pb-3 opacity-0 transition-all duration-200 -translate-y-full text-grayishBlue group-hover:translate-y-0 group-hover:opacity-100 hidden group-hover:block '>{item.text}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default Faq