import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setIsScrolled(currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`${
        isScrolled 
          ? 'bg-[#2C1810]/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      } fixed top-0 left-0 w-full text-white py-4 px-8 transition-all duration-300 z-50`}
    >
      <div className="lato max-w-7xl mx-auto flex items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold hover:text-[#E6B17E] transition-colors"
        >
          Coffee
        </Link>
        <div className="flex-grow flex justify-center items-center space-x-8">
          {['HOME', 'COFFEE', 'BAKERY', 'SHOP', 'ABOUT'].map((item) => (
            <Link
              key={item}
              to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
              className="hover:text-[#E6B17E] transition-colors tracking-wider text-sm relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6B17E] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#E6B17E] transition-colors" />
          <Link 
            to="/login" 
            className="px-4 py-1.5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 text-sm"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
