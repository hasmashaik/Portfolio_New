import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  const handleResumeDownload = (e) => {
    e.preventDefault();
    window.open('/resume/Hasma-Shaik-Resume.pdf', '_blank');
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-white tracking-wider">
            <span className="text-neon">H</span>ASMA <span className="text-neon">S</span>HAIK
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-neon ${
                  location.pathname === link.href && !link.href.startsWith('#')
                    ? 'text-neon'
                    : 'text-light-gray'
                }`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleResumeDownload}
              className="px-4 py-2 text-sm font-semibold text-dark bg-neon rounded-lg hover:bg-neon/80 transition-all neon-border"
            >
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-charcoal/95 backdrop-blur-md ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block text-light-gray hover:text-neon transition-colors"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleResumeDownload}
            className="w-full px-4 py-2 text-sm font-semibold text-dark bg-neon rounded-lg hover:bg-neon/80 transition-colors"
          >
            Download Resume
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;