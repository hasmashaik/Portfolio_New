import prisma from '../config/database.js';
import { featuredProjects } from '../../../frontend/src/data/projects.js';

export const getProjects = async (req, res, next) => {
  try {
    // Could fetch from DB if we store projects there, for now return static
    res.json(featuredProjects);
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = featuredProjects.find((p) => p.id === id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    next(error);
  }
};

export const getGithubProjects = async (req, res, next) => {
  try {
    const username = process.env.GITHUB_USERNAME || 'hasmashaik';
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`);
    
    if (!response.ok) {
      // Fallback: return static data
      return res.json({
        username,
        public_repos: 59,
        followers: 0,
        totalStars: 0,
        repos: featuredProjects.map((p) => ({ name: p.title, html_url: p.liveUrl, stargazers_count: 0 })),
      });
    }

    const repos = await response.json();
    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

    res.json({
      username,
      public_repos: repos.length,
      followers: 0, // Could fetch followers separately
      totalStars,
      repos: repos.map((repo) => ({
        name: repo.name,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        description: repo.description,
      })),
    });
  } catch (error) {
    // Fallback
    res.json({
      username: process.env.GITHUB_USERNAME || 'hasmashaik',
      public_repos: 59,
      followers: 0,
      totalStars: 0,
      repos: featuredProjects.map((p) => ({ name: p.title, html_url: p.liveUrl, stargazers_count: 0 })),
    });
  }
};