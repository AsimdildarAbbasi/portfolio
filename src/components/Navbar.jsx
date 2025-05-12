
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-sm shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-bold text-navy">
          <span className="text-coral">Asim</span>Abbasi
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
          <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
          <Button asChild className="bg-coral hover:bg-coral/90 text-white rounded-full">
            <a href="AsimAbbasi_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 py-4' : 'max-h-0 py-0 overflow-hidden'
        }`}
      >
        <div className="container-custom flex flex-col space-y-4">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/')}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about')}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${isActive('/projects')}`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact')}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button 
            asChild 
            className="bg-coral hover:bg-coral/90 text-white w-full rounded-full"
          >
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
