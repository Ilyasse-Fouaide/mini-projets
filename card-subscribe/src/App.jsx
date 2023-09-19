import image from "./img/testimage.jpg"

function App() {

  return (
    <div className="h-screen bg-zinc-100 dark:bg-zinc-800 flex justify-center items-center font-mono">
      <div className="w-[800px] bg-zinc-200 dark:bg-zinc-900 flex flex-col md:flex-row rounded-lg p-2 m-6 shadow-2xl">
        <img src={image} className="w-full md:w-1/3 md:rounded-l-md md:rounded-r-none rounded-t-md rounded-b-none" />
        <div className="p-10 flex flex-col justify-center">
          <h1 className="block font-bold text-xl mb-5 text-slate-900 dark:text-slate-300 md:text-left text-center">Lorem ipsum dolor sit amet.</h1>
          <p className="text-slate-800 dark:text-slate-400 mb-5 md:text-base sm:text-base text-sm md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, necessitatibus exercitationem quaerat molestias possimus enim. Optio non consequuntur vel quis in delectus enim ullam, est odit ut quas ad corrupti.</p>
          <div className="flex flex-col md:space-y-0 space-y-2 md:flex-row">
            <input type="text" placeholder="Enter you email" className="bg-zinc-200 dark:bg-zinc-900 w-full h-12 md:h-11 border px-5 rounded-lg md:rounded-l-lg md:rounded-r-none focus:outline-none placeholder:text-slate-700 dark:placeholder:text-slate-400 border-slate-500 dark:border-slate-400 dark:text-white" />
            <button className="bg-orange-500 py-2 px-5 rounded-lg text-slate-100 md:rounded-r-lg md:rounded-l-none hover:bg-orange-600 duration-200">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
