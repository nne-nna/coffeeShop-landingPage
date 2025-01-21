import React, { useState, useEffect } from 'react';
import { Search, Coffee, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navClasses = twMerge(
    'fixed top-0 left-0 w-full text-white py-4 px-8 transition-all duration-300 z-50',
    isScrolled ? 'bg-[#2C1810]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent',
    !visible && '-translate-y-full'
  );

  return (
    <nav className={navClasses}>
      <div className="lato max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-2xl font-bold hover:text-[#E6B17E] transition-colors"
        >
          <Coffee className="w-8 h-8" />
          <span className="bg-gradient-to-r from-white to-[#E6B17E] bg-clip-text text-transparent">
            Coffee
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center space-x-8">
          {['HOME', 'COFFEE', 'BAKERY', 'SHOP', 'ABOUT'].map((item) => (
            <Link
              key={item}
              to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
              className="group relative px-2 py-1"
            >
              <span className="relative z-10 text-sm tracking-wider transition-colors group-hover:text-[#E6B17E]">
                {item}
              </span>
              <motion.span
                className="absolute inset-0 bg-white/10 rounded-lg z-0"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Search className="w-5 h-5 cursor-pointer hover:text-[#E6B17E] transition-colors" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/login" 
              className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 
                       transition-all duration-300 text-sm relative overflow-hidden group"
            >
              <span className="relative z-10">LOGIN</span>
              <motion.div
                className="absolute inset-0 bg-[#E6B17E]/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#2C1810] shadow-lg md:hidden"
          >
            <div className="px-8 py-6 space-y-4">
              {['HOME', 'COFFEE', 'BAKERY', 'SHOP', 'ABOUT'].map((item) => (
                <Link
                  key={item}
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  className="block py-2 text-sm tracking-wider hover:text-[#E6B17E] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link 
                to="/login" 
                className="block py-2 text-sm hover:text-[#E6B17E] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LOGIN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 