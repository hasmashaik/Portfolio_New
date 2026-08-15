import express from 'express';
import { getProjects, getProjectById, getGithubProjects } from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.get('/github', getGithubProjects); // Make sure this exists!

export default router;