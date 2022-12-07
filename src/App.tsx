import CircleProgress from './CircleProgress';

import React, { useState } from 'react'

function App() {
  const [ value, setValue ] = useState<number>(50);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue =  Number(event.target.value)
    setValue(newValue)
  }

  return (
    <div className="flex h-full justify-center bg-stone-100/50 py-20">
      <div className='space-y-5'> 
        <p className='text-3xl'>Circle progress</p>
        <CircleProgress  progress={value} sqSize={300} />
        <label className="relative block">
        <span className="block text-sm font-medium text-slate-700">Change the value below</span>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" id="input" type="number" value={value} onChange={handleChange}/>
        </label>
        
      </div>
    </div>
  );
}

export default App;
