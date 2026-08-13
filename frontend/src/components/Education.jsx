import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'Krishna Degree College (VSU)',
      year: '2022',
      cgpa: '9.1',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      year: '2019',
      cgpa: '9.4',
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Education & <span className="text-neon">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-charcoal p-6 rounded-xl border border-gray-800 hover:border-neon/30 transition-all"
            >
              <FaGraduationCap className="text-3xl text-neon mb-3" />
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-light-gray text-sm">{edu.institution}</p>
              <p className="text-light-gray text-sm mt-1">Year: {edu.year}</p>
              <p className="text-neon font-semibold text-sm">CGPA: {edu.cgpa}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-charcoal p-4 rounded-xl border border-gray-800">
            <p className="text-sm text-light-gray">Certifications</p>
            <div className="flex flex-wrap gap-3 mt-2 justify-center">
              <span className="px-3 py-1 bg-dark/50 text-neon text-sm rounded-full border border-neon/20">Java Full Stack Development</span>
              <span className="px-3 py-1 bg-dark/50 text-neon text-sm rounded-full border border-neon/20">Certified Java (HackerRank)</span>
              <span className="px-3 py-1 bg-dark/50 text-neon text-sm rounded-full border border-neon/20">Certified SQL (HackerRank)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;