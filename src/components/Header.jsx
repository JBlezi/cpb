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
    <header className="w-full z-50 transition-all">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-blue-950 hover:text-blue-600 text-4xl font-bold">
            <div className='flex flex-col'>
              <span>Charlotte Pfalz-Blezinger</span>
              <span className="block font-normal text-4xl"></span>
              <span className="block font-normal text-xl">Diplom-Psychologin</span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 -mt-4">
            <li><Link to="/" className="text-blue-950 text-xl hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/about" className="text-blue-950 text-xl hover:text-blue-600 transition">About</Link></li>
            <li><Link to="/services" className="text-blue-950 text-xl hover:text-blue-600 transition">Services</Link></li>
            <li><Link to="/blog" className="text-blue-950 text-xl hover:text-blue-600 transition">Blog</Link></li>
            <li><Link to="/contact" className="text-blue-950 text-xl hover:text-blue-600 transition">Contact</Link></li>
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