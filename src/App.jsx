import { useState } from 'react'
import {Button, ButtonGroup} from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
import Home from './pages/Home'; 
import Events from './pages/Events';
import Settings from './pages/Settings';
import Onboarding from './pages/Onboarding';
import BusMap from './pages/BusMap';
import GroceryShopping from './pages/GroceryShopping';
import GroceryList from './pages/GroceryList';
import ScheduleVisit from './pages/ScheduleVisit';
import StoresNearMe from './pages/StoresNearMe';
import StoreDetails from './pages/StoreDetails';

function App() {

  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  return (
    <>
      <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="fixed bottom-0 w-full p-4 border-t border-gray-300">
          <ul className="flex justify-between w-full max-w-screen-lg mx-auto">
            <li>
              <Link to="/home" className="">Home</Link>
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
            <Route path="/" element={
                  hasCompletedOnboarding ? <Navigate to="/home" /> : <Onboarding setHasCompletedOnboarding={setHasCompletedOnboarding}/>
                } />
            <Route path="/home" element={<Home/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/home/grocery-shopping" element={<GroceryShopping/>} />
            <Route path="/home/grocery-shopping/make-grocery-list" element={<GroceryList/>} />
            <Route path="/home/grocery-shopping/schedule-visit" element={<ScheduleVisit/>} />
            <Route path="/home/grocery-shopping/find-stores" element={<StoresNearMe/>} />
            <Route path="/find-stores/:storeId" element={<StoreDetails />} />
            <Route path="/bus-schedule" element={<BusMap />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App