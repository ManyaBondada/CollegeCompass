import { useState } from 'react'
import {Button, ButtonGroup} from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
import './Home'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">

        <Button onClick={() => setCount((count) => count + 1)} color="primary"
                style={{ backgroundColor: '#9747FF', color: 'white' }}
        >
          Button count is {count}
        </Button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
