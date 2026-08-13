import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">
              <span className="text-neon">H</span>ASMA <span className="text-neon">S</span>HAIK
            </h3>
            <p className="text-sm text-light-gray mt-1">Full Stack Developer</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/hasmashaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-neon transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hasma-shaik-a531b4280/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-neon transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:hasma@example.com"
              className="text-light-gray hover:text-neon transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-light-gray">
          <p>© 2026 Hasma Shaik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;