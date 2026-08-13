import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  sendMessage: (data) => api.post('/api/contact', data),
};

export const projectService = {
  getProjects: () => api.get('/api/projects'),
  getGithubProjects: () => api.get('/api/projects/github'),
};