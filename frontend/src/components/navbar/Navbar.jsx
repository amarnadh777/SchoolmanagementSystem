import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-purple-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Student Management</a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
    
    
          <Link to='/create/student' className="hover:text-gray-300 transition duration-200">  Create student</Link>
          <Link to='/create/fee' className="hover:text-gray-300 transition duration-200">Create a Fee Receipt</Link>
        
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none focus:text-gray-300"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar