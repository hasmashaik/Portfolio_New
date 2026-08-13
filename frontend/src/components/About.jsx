import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-neon">Me</span>
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-light-gray text-base md:text-lg leading-relaxed">
              I am a <span className="text-white font-semibold">Full Stack Developer</span> with around{' '}
              <span className="text-neon font-semibold">1.3 years of hands-on experience</span> through internships and project work.
            </p>
            <p className="text-light-gray text-base md:text-lg leading-relaxed mt-4">
              I specialize in building modern, responsive, and scalable web applications using{' '}
              <span className="text-white">React.js</span>, <span className="text-white">Java</span>,{' '}
              <span className="text-white">Spring Boot</span>, <span className="text-white">Node.js</span>, and{' '}
              <span className="text-white">REST APIs</span>. I am also proficient in PostgreSQL and MySQL for database management.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-dark/50 p-4 rounded-lg text-center neon-border">
                <FaCode className="text-3xl text-neon mx-auto mb-2" />
                <p className="text-sm text-light-gray">Frontend</p>
              </div>
              <div className="bg-dark/50 p-4 rounded-lg text-center neon-border">
                <FaServer className="text-3xl text-neon mx-auto mb-2" />
                <p className="text-sm text-light-gray">Backend</p>
              </div>
              <div className="bg-dark/50 p-4 rounded-lg text-center neon-border">
                <FaDatabase className="text-3xl text-neon mx-auto mb-2" />
                <p className="text-sm text-light-gray">Database</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-neon/20 shadow-2xl shadow-neon/5">
              <img
                src="/images/profile.jpg"
                alt="Hasma Shaik"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-dark/80 backdrop-blur-sm p-3 rounded-lg border border-neon/20">
                <p className="text-sm text-center text-light-gray">
                  <span className="text-neon font-semibold">1.3+</span> Years Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;