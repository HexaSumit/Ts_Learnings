// COUNTER APP WITH TS WITH INCREASE DECREASE AND RESET STATE 

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0) //typed as number 
  

  const handleIncrease=()=>{
    setCount(count+1)
  }
  const handleDecrease=()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  return (
    <>
      <div>
        <p>Clicked {count} times!</p><br />
        <div >
          <button className=' mr-10' onClick={handleIncrease}>Increase +</button>
          <button onClick={handleDecrease}>Decrease -</button>
        </div>
      </div>
    </>
  )
}

export default App
