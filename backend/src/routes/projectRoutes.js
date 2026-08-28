import express from 'express';
import { getProjects, getProjectById, getGithubProjects } from '../controllers/projectController.js';

const router = express.Router();

// Get all projects
router.get('/', getProjects);

// Get GitHub projects - THIS MUST COME BEFORE /:id
router.get('/github', getGithubProjects);

// Get single project by ID (must be after /github)
router.get('/:id', getProjectById);

export default router;