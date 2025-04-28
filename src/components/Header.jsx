import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-blue-800 shadow-md' : 'bg-blue-900'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-white text-2xl font-bold">
            Dr. Sarah Johnson
            <span className="block text-sm font-normal">Psychology Practice</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-white hover:text-blue-200 transition">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-blue-200 transition">About</Link></li>
            <li><Link to="/services" className="text-white hover:text-blue-200 transition">Services</Link></li>
            <li><Link to="/blog" className="text-white hover:text-blue-200 transition">Blog</Link></li>
            <li><Link to="/contact" className="text-white hover:text-blue-200 transition">Contact</Link></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 py-4">
          <ul className="flex flex-col space-y-4 px-4">
            <li><Link to="/" className="text-white block" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="text-white block" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" className="text-white block" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to="/blog" className="text-white block" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contact" className="text-white block" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;