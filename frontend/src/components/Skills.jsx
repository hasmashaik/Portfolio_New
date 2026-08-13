import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-neon">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mt-3 rounded-full" />
          <p className="text-light-gray mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-charcoal p-6 rounded-xl border border-gray-800 hover:border-neon/40 transition-all hover:shadow-lg hover:shadow-neon/5"
            >
              <h3 className="text-lg font-semibold text-neon mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 text-sm bg-dark/50 border border-gray-700 rounded-full text-light-gray hover:text-white hover:border-neon/30 transition-all"
                  >
                    {skill.name}
                    {skill.level && (
                      <span className="ml-1 text-xs text-neon/60">({skill.level})</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;