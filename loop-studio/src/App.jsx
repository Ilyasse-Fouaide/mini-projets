import heroBg from "./images/desktop/image-hero.jpg";

function App() {

  return (
    <div className="bg-[url('./images/desktop/image-hero.jpg')] bg-no-repeat bg-cover bg-center">

      <div className={`container max-w-6xl mx-auto px-6 py-12`}>
        <nav className="flex justify-between items-center text-white font-bold">
          <div className="text-2xl"><a href="#">Meta<span className="text-blue-500 text-3xl">VERSE</span></a></div>
          <div className="hidden md:flex md:space-x-5">
            {['About', 'Carrer', 'Events', 'Products', 'Support'].map((items, index) =>
              <div className="px-2 py-1">
                <a href="#" className="relative group">
                  {items}
                  <div className="absolute w-0 left-1/2 -translate-x-1/2 h-[3px] bg-white group-hover:w-full duration-200"></div>
                </a>
              </div>
            )}
          </div>
        </nav>
        {/* // TODO Hamburgur button */}
        <div className="max-w-xl my-32 border-2 p-4 rounded-md text-left uppercase text-white text-6xl font-light md:p-10">
          Impressive Exepriences That Deliver
        </div>
      </div>
    </div>
  )
}

export default App
