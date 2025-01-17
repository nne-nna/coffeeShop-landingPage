import React from 'react'
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-black/90 text-white py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">Coffee</Link>
            <div className="flex items-center space-x-8">
                <Link to="/" className="hover:text-brown-300">HOME</Link>
                <Link to="/coffee" className="hover:text-brown-300">COFFEE</Link>
                <Link to="/bakery" className="hover:text-brown-300">BAKERY</Link>
                <Link to="/shop" className="hover:text-brown-300">SHOP</Link>
                <Link to="/about" className="hover:text-brown-300">ABOUT</Link>
                <Link to="/login" className="hover:text-brown-300">LOGIN</Link>
                <Search className="w-5 h-5 cursor-pointer" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar