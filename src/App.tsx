// COUNTER APP WITH TS WITH INCREASE DECREASE AND RESET STATE 

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0) //typed as number 
  
  const [status,setStatus]=useState<'Loading'|'Success'|'Error'>('Success')

  const handleIncrease=()=>{
    setCount(count+1)
  }
  const handleDecrease=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  const handleReset=()=>{
    setCount(0)
  }
  return (
    <>
      <div>
        <p>Clicked {count} times!</p><br />
        <div className=' flex gap-10'>
          <button onClick={handleIncrease}>Increase +</button>
          <button onClick={handleDecrease}>Decrease -</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <br />
        <p className=' text-black font-bold'>status: {status}</p>
      </div>
    </>
  )
}

export default App
