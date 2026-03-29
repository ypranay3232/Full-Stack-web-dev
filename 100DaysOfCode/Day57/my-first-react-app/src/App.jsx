import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1>Basic Counter</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c - 1)}>
          Decrease
        </button>
        <span className="count-display">{count}</span>
        <button onClick={() => setCount((c) => c + 1)}>
          Increase
        </button>
      </div>
    </div>
  )
}

export default App
