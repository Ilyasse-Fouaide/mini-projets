import React from 'react'

function Card() {
  return (
    <div className="border border-slate-300 dark:border-slate-500 p-7 bg-white dark:bg-slate-800 w-[360px] rounded-sm hover:shadow-xl">
      <div className="font-bold text-slate-900 dark:text-slate-200 text-lg text-center">Premium</div>
      <div className="text-center text-slate-700 dark:text-slate-300 mt-5 text-sm">Everything you need to create your website</div>
      <div className="flex items-center justify-center space-x-2 mt-5">
        <span className="line-through text-sm text-slate-500 dark:text-slate-300">$11.99</span>
        <span className="py-1 px-3 rounded-full bg-purple-200 text-purple-800 font-extrabold">SAVE 75%</span>
      </div>
      <div className="mt-5 text-center text-slate-700 dark:text-slate-300 text-lg">$<span className="text-slate-900 dark:text-slate-100 text-6xl font-bold">2.99</span>/mo</div>
      <div className="mt-5 text-center text-purple-500 dark:text-purple-300 font-bold text-lg">+2 months FREE</div>
      <button className="mt-5 w-full py-3 bg-purple-500 text-slate-100 font-extrabold rounded-md shadow-md">Add to cart</button>
      <p className="mt-5 text-center text-slate-400 dark:text-slate-300 text-sm">$6.99/mo when you renew</p>
      <div className="mt-9 h-[1px] bg-slate-400"></div>
      <h3 className="mt-8 text-xl slate-800 dark:text-slate-100 font-bold">Top Features</h3>

      <div className="flex space-x-2 mt-5 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-900 dark:text-slate-200 font-bold">Standard</span> <span className="text-slate-600 dark:text-slate-300">Performance</span>
      </div>

      <div className="flex space-x-2 mt-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-900 dark:text-slate-200 font-bold">100</span> <span className="text-slate-600 dark:text-slate-300">Websites</span>
      </div>

      <div className="flex space-x-2 mt-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-900 dark:text-slate-200 font-bold">100 GB</span> <span className="text-slate-600 dark:text-slate-300">SSD Storage</span>
      </div>

      <div className="flex space-x-2 mt-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-900 dark:text-slate-200 font-bold">Unlimited</span> <span className="text-slate-600 dark:text-slate-300">Free SSL</span>
      </div>

      <div className="flex space-x-2 mt-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-900 dark:text-slate-200 font-bold">Unlimited</span> <span className="text-slate-600 dark:text-slate-300">Bandwidth</span>
      </div>

      <div className="flex space-x-2 mt-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-900 dark:text-slate-200 font-bold">Free</span> <span className="text-slate-600 dark:text-slate-300">Email</span>
      </div>

      <div className="flex space-x-2 mt-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-900 dark:text-slate-200 font-bold">Free</span> <span className="text-slate-600 dark:text-slate-300">CDN</span>
      </div>

      <div className="flex space-x-2 mt-3 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-slate-900 dark:text-slate-200 font-bold">Dedicated </span> <span className="text-slate-600 dark:text-slate-300">IP Address</span>
      </div>

    </div>
  )
}

export default Card