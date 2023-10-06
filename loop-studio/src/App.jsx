import heroBg from "./images/desktop/image-hero.jpg";

function App() {

  return (
    <div className={`container max-w-6xl mx-auto px-6 py-12 lg:px-0 bg-[url('./images/desktop/image-hero.jpg')]`}>
      <nav className="flex justify-between items-center text-white font-bold">
        <div><a href="#">Meta<span className="text-blue-500">VERSE</span></a></div>
        <div className="hidden md:flex md:space-x-10">
          <div className="group">
            <a href="#" className="relative">
              Home
              <div className="absolute w-0 left-1/2 -translate-x-1/2 h-[2px] bg-blue-500 group-hover:w-full duration-200"></div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App
