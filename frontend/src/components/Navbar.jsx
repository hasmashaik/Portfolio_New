import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '#home', section: 'home' }, // Changed from '/' to '#home'
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Education', href: '#education', section: 'education' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Get all sections
      const sections = navLinks.map(link => ({
        id: link.section,
        element: document.getElementById(link.section)
      }));

      // Find which section is currently in view
      let currentSection = 'home';
      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href, section) => {
    e.preventDefault();
    
    if (href === '#home') {
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      setIsOpen(false);
    } else {
      // Scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(section);
        setIsOpen(false);
      }
    }
  };

  const handleResumeDownload = (e) => {
    e.preventDefault();
    window.open('/resume/Hasma-Shaik-Resume.pdf', '_blank');
    setIsOpen(false);
  };

  // Check if a link is active
  const isActive = (section) => {
    return activeSection === section;
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
          {/* Logo - Also scrolls to top */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold text-white tracking-wider"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
              setIsOpen(false);
            }}
          >
            <span className="text-neon">H</span>ASMA <span className="text-neon">S</span>HAIK
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.section) ? 'text-neon' : 'text-light-gray hover:text-neon'
                }`}
                onClick={(e) => handleLinkClick(e, link.href, link.section)}
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
              className={`block transition-colors ${
                isActive(link.section) ? 'text-neon' : 'text-light-gray hover:text-neon'
              }`}
              onClick={(e) => handleLinkClick(e, link.href, link.section)}
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