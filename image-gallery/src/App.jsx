import { useState } from 'react';
import Nature from './components/Nature';
import Night from './components/Night';
import Galaxy from './components/Galaxy';
import Health from './components/Health';

function App() {
  const [toggle, setToggle] = useState(1);

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center px-5 space-y-1 mt-[60px] md:space-y-0 md:space-x-[10px]'>
        <button className={`duration-200 px-[20px] py-[10px] text-lg font-semibold rounded-full ${toggle === 1 ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => setToggle(1)}>Nature</button>
        <button className={`duration-200 px-[20px] py-[10px] text-lg font-semibold rounded-full ${toggle === 2 ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => setToggle(2)}>Night</button>
        <button className={`duration-200 px-[20px] py-[10px] text-lg font-semibold rounded-full ${toggle === 3 ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => setToggle(3)}>Galaxy</button>
        <button className={`duration-200 px-[20px] py-[10px] text-lg font-semibold rounded-full ${toggle === 4 ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={() => setToggle(4)}>Health</button>
      </div>
      {toggle === 1 ? <Nature /> : toggle === 2 ? <Night /> : toggle === 3 ? <Galaxy /> : <Health />}
    </div>
  )
}

export default App
