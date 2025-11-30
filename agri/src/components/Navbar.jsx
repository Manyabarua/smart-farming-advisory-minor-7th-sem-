
import { Menu, Search, X } from 'lucide-react'
import {Link, useLocation} from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = useLocation()
      // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
    // Auto-close menu on route change
    useEffect(() => {
        setMenuOpen(false)
      }, [pathname])

      const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div>
              {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <h1 className='text-white text-2xl'>Smart Farming Advisory</h1>
        <a to="/" className={`text-2xl flex items-center font-light tracking-wider z-10 ${menuOpen ? 'text-black' : "text-white"}`}>
          <img src="./log.png" alt="" className='w-32' />
        </a>

        <div className="flex items-center space-x-6 text-white">
          {/* <button className="text-white">
            <Search className={`w-6 h-6 ${menuOpen ? 'text-black' : "text-white"}`} />
          </button> */}
          {/* <button className="text-white z-10 cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X className={`w-8 h-8 ${menuOpen ? 'text-black' : "text-white"}`} /> : <Menu className="w-8 h-8" />}
          </button> */}
  <h1 onClick={() => scrollToSection("home")} className="cursor-pointer">Home</h1>
  <h1 onClick={() => scrollToSection("crop-protection")} className="cursor-pointer">Crop Protection</h1>
  <h1 onClick={() => scrollToSection("crop-nutrition")} className="cursor-pointer">Crop Nutrition</h1>
  <h1 onClick={() => scrollToSection("organic-farming")} className="cursor-pointer">Organic Farming</h1>
        </div>
      </header>

         {/* Full-screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-100 py-12 px-8 z-40 flex items-center justify-center overflow-y-scroll">
          <div className="h-96">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* PROJECTS Column */}
        <div>
          <h2 className="text-sm font-medium text-gray-800 mb-4">PROJECTS</h2>
          <nav className="space-y-3">
            <a to={`/project/${"Multi-family Residential".replace(/\s+/g, '-').toLowerCase()}`} className="block text-xl text-gray-900 hover:text-gray-600">Multi-family Residential</a>
            <a to={`/project/${"Ultra Luxury Residential".replace(/\s+/g, '-').toLowerCase()}`} className="block text-xl text-gray-900 hover:text-gray-600">Ultra Luxury Residential</a>
            <a to={`/project/${"Public Infrastructure".replace(/\s+/g, '-').toLowerCase()}`} className="block text-xl text-gray-900 hover:text-gray-600">Public Infrastructure</a>
            <a to="#" className="block text-xl text-gray-900 hover:text-gray-600">Commercial</a>
            <a to={`/project/${"Institutional".replace(/\s+/g, '-').toLowerCase()}`} className="block text-xl text-gray-900 hover:text-gray-600">Institutional</a>
            <a to="#" className="block text-xl text-gray-900 hover:text-gray-600">Mixed Use</a>
            <a to={`/project/${"Hospitality".replace(/\s+/g, '-').toLowerCase()}`} className="block text-xl text-gray-900 hover:text-gray-600">Hospitality</a>
            <a to={`/project/${"Luxury High-rise Residential".replace(/\s+/g, '-').toLowerCase()}`}  className="block text-xl text-gray-900 hover:text-gray-600">Luxury High-rise Residential</a>
            <a to={`/project/${"Master Planning".replace(/\s+/g, '-').toLowerCase()}`}  className="block text-xl text-gray-900 hover:text-gray-600">Master Planning</a>
            <a to={`/project/${"Educational".replace(/\s+/g, '-').toLowerCase()}`} className="block text-xl text-gray-900 hover:text-gray-600">Educational</a>
            <a to={`/project/${"Midrise Residential".replace(/\s+/g, '-').toLowerCase()}`} className="block text-xl text-gray-900 hover:text-gray-600">Midrise Residential</a>
            {/* <a to="#" className="block text-xl text-gray-900 hover:text-gray-600">Products</a> */}
          </nav>
        </div>

        {/* PRACTICE Column */}
        <div>
          <h2 className="text-sm font-medium text-gray-800 mb-4">PRACTICE</h2>
          <nav className="space-y-3">
            <a to="/about" className="block text-xl text-gray-900 hover:text-gray-600">About Us</a>
            <a to="/history" className="block text-xl text-gray-900 hover:text-gray-600">Our History</a>
            <a to="/design" className="block text-xl text-gray-900 hover:text-gray-600">Design Approach</a>
            <a to="/culture" className="block text-xl text-gray-900 hover:text-gray-600">Our Culture</a>
            <a to="/contact" className="block text-xl text-gray-900 hover:text-gray-600">Contact</a>
            <a to="/project" className="block text-xl text-gray-900 hover:text-gray-600">Projects</a>
          </nav>
        </div>

        {/* PEOPLE Column */}
        <div>
          <h2 className="text-sm font-medium text-gray-800 mb-4">PEOPLE</h2>
          <nav className="space-y-3">
            <a to="/leadership" className="block text-xl text-gray-900 hover:text-gray-600">Leadership</a>
            {/* <a to="/team" className="block text-xl text-gray-900 hover:text-gray-600">Team</a> */}
          </nav>
        </div>
      </div>
    </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
