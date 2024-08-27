import React from "react"
import { useState } from 'react'
import './App.css'
import Calculator from '../componenets/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="App">
        <Calculator></Calculator>
      </div>
    )
}

export default App
