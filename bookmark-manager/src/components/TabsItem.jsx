import React from 'react'

function TabsItem({ data, isClicked, setIsClicked }) {
  return (
    <>
      {data.map((item, key) => (
        <div className={`relative border-b py-6 text-center md:p-6 hover:text-softRed ${isClicked.tab === item.tab ? 'text-softRed border-b-2 border-b-softRed' : 'text-gray-700'} font-medium cursor-pointer`} key={key} onClick={() => setIsClicked(item)}>
          {item.tab}
        </div>
      ))}
    </>
  )
}

export default TabsItem