import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { featuredProjects } from '../data/projects.js'; // Added .js extension

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = featuredProjects.find((p) => p.id === id);
    setProject(found || null);
  }, [id]);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-light-gray">Project Not Found</h2>
          <Link to="/" className="mt-4 inline-block text-neon hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-light-gray hover:text-neon transition-colors mb-6">
          <FaArrowLeft /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-charcoal p-6 md:p-8 rounded-xl border border-gray-800"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
          <p className="text-light-gray mt-4 text-base md:text-lg">{project.description}</p>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-light-gray uppercase tracking-wider">Technologies</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-dark/50 text-light-gray rounded-full border border-gray-700 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.features && project.features.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-light-gray uppercase tracking-wider">Features</h3>
              <ul className="mt-2 list-disc list-inside text-light-gray">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neon text-dark font-semibold rounded-lg hover:bg-neon/80 transition-all"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neon text-neon font-semibold rounded-lg hover:bg-neon/10 transition-all"
              >
                <FaGithub /> GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;