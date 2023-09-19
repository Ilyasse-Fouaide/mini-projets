import Card from "./Card"
import Card2 from "./Card2"
import Card3 from "./Card3"

function App() {

  return (
    <div className="py-16 font-mono flex flex-col lg:flex-row justify-center items-center space-y-5 md:space-x-0 lg:space-y-0 lg:space-x-5">

      <Card />
      <Card2 />
      <Card3 />
    </div>
  )
}

export default App
