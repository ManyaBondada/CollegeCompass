import { useState } from 'react'
import {Button, ButtonGroup} from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
import Home from './pages/Home'; 
import Events from './pages/Events';
import Settings from './pages/Settings';

function App() {

  return (
    <>
      <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="fixed bottom-0 w-full p-4 border-t border-gray-300">
          <ul className="flex justify-between w-full max-w-screen-lg mx-auto">
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

        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
