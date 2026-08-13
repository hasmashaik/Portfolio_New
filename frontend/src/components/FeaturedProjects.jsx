import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { featuredProjects } from '../data/projects';

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-neon">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mt-3 rounded-full" />
          <p className="text-light-gray mt-4 max-w-2xl mx-auto">
            A selection of my recent work showcasing full stack development skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-charcoal rounded-xl overflow-hidden border border-gray-800 hover:border-neon/40 transition-all hover:shadow-xl hover:shadow-neon/5"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-light-gray text-sm mt-2 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-dark/50 text-light-gray rounded-full border border-gray-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs text-light-gray">+{project.technologies.length - 4}</span>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-gray hover:text-neon transition-colors"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-gray hover:text-neon transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-sm text-neon hover:text-white transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/hasmashaik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neon text-neon font-semibold rounded-lg hover:bg-neon/10 transition-all"
          >
            <FaGithub /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;