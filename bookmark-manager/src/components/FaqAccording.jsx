import React from 'react'
import { HiChevronUp } from 'react-icons/hi'

function FaqAccording({ data }) {
  return (
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
  )
}

export default FaqAccording