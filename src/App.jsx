import { useState } from 'react'
import {Button, ButtonGroup} from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
import Home from './Home'; 
import Events from './Events';
import Settings from './Settings';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div className="">
        <nav className="">
          <ul className="">
            <li>
              <Link to="/" className="">Home</Link>
            </li>
            <li>
              <Link to="/events" className="">Events</Link>
            </li>
            <li>
              <Link to="/settings" className="">Settings</Link>
            </li>
          </ul>
        </nav>

        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
