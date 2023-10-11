import React from 'react'
import Button from './Button'

function CardsItem({ item }) {
  return (
    <div className={`shadow-lg rounded-xl p-6 w-full lg:w-[300px]`}>
      <div className='w-fit mx-auto'><img src={item.image} alt={item.title} /></div>
      <h2 className='font-semibold text-xl text-center mt-10'>{item.title}</h2>
      <p className='mt-5 text-md text-center text-grayishBlue'>{item.content}</p>
      <div className='mt-5 border-t-2 rounded-full'></div>
      <Button
        link={"#"}
        bgColor={"bg-softBlue"}
        className={"mt-5 block text-center"}
        borderColor={"border-softBlue"}
        content={"Add & Install Extension"}
      />
    </div>
  )
}

export default CardsItem