import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import CropPro from './components/CropPro'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Hero'
import CropNut  from './components/CropNut'
import Organic from './components/Organic'
import Seeds from './components/Seeds'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <CropPro/>
      <CropNut/>
      <Organic/>
      {/* <Seeds/> */}
      
      </BrowserRouter>
      
    </div>
  )
}

export default App