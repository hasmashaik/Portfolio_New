import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleResumeDownload = (e) => {
    e.preventDefault();
    window.open('/resume/Hasma-Shaik-Resume.pdf', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-charcoal to-dark" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-neon/5 rounded-full blur-3xl" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-neon text-sm md:text-base font-mono tracking-widest">HELLO, I AM</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 leading-tight">
              HASMA <span className="text-neon">SHAIK</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-light-gray mt-2">
              Full Stack Developer
            </h2>
            <p className="mt-4 text-light-gray text-base md:text-lg max-w-lg">
              Building modern, responsive and scalable web applications with React, Java, Spring Boot and Node.js.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="#projects"
                className="px-6 py-3 bg-neon text-dark font-semibold rounded-lg hover:bg-neon/80 transition-all shadow-lg shadow-neon/20"
              >
                View My Projects
              </Link>
              <button
                onClick={handleResumeDownload}
                className="px-6 py-3 border border-neon text-neon font-semibold rounded-lg hover:bg-neon/10 transition-all"
              >
                Download Resume
              </button>
            </div>
            <div className="mt-8 flex gap-6">
              <a
                href="https://github.com/hasmashaik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-light-gray hover:text-neon transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hasma-shaik-a531b4280/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-light-gray hover:text-neon transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-neon/30 shadow-2xl shadow-neon/10">
              <img
                src="/images/profile.jpg"
                alt="Hasma Shaik"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;