// COUNTER APP WITH TS WITH INCREASE DECREASE AND RESET STATE 

import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState<number>(0)

  return (
    <>
    <div>
      <p>Clicked {count} times!</p><br />
      <button>+</button>
    </div>
    </>
  )
}

export default App
