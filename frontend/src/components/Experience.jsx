import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience <span className="text-neon">Timeline</span>
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-neon/20" />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon rounded-full border-4 border-dark z-10" />

                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-dark/50 p-6 rounded-xl border border-gray-800 hover:border-neon/30 transition-all">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-neon text-sm font-semibold">{exp.company}</p>
                    <p className="text-light-gray text-xs mt-1">{exp.duration}</p>
                    <ul className="mt-3 space-y-2 text-sm text-light-gray list-disc list-inside">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block w-1/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;