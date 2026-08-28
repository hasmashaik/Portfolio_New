// Project data
const featuredProjects = [
  {
    id: 'bitrush-food',
    title: 'BitRush Food Website',
    description: 'A modern food ordering platform with a clean interface and responsive design.',
    technologies: ['React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://bit-rush-food-website.vercel.app/',
    githubUrl: 'https://github.com/hasmashaik',
    features: ['Responsive design', 'Food catalog', 'Order management']
  },
  {
    id: 'resume-analyzer',
    title: 'Resume Analyzer',
    description: 'An AI-powered tool to analyze and extract insights from resumes.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://resume-analyzer-hazel-psi.vercel.app/',
    githubUrl: 'https://github.com/hasmashaik/resume-analyzer.git',
    features: ['Resume parsing', 'Skill extraction', 'Keyword analysis']
  },
  {
    id: 'lamp',
    title: 'LAMP',
    description: 'A creative web application showcasing interactive lighting and visual effects.',
    technologies: ['React', 'Three.js', 'CSS3'],
    liveUrl: 'https://lamp-4pmn.vercel.app/',
    githubUrl: 'https://github.com/hasmashaik',
    features: ['3D lighting effects', 'Interactive controls']
  },
  {
    id: 'cognodb-benchmark',
    title: 'CognoDB Benchmark Suite',
    description: 'A comprehensive benchmarking suite for database performance testing.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://github.com/hasmashaik/cognodb-benchmark-suite.git',
    githubUrl: 'https://github.com/hasmashaik/cognodb-benchmark-suite.git',
    features: ['Performance testing', 'Database metrics', 'Benchmark reports']
  },
  {
    id: 'multiple-user-logins-redux',
    title: 'Multiple User Logins Redux',
    description: 'A user authentication system with role-based access using Redux state management.',
    technologies: ['React', 'Redux Toolkit', 'React Router'],
    liveUrl: 'https://multiple-user-logins-redux.vercel.app/',
    githubUrl: 'https://github.com/hasmashaik',
    features: ['Authentication', 'Redux state', 'Role-based access']
  },
  {
    id: 'artist-website',
    title: 'Artist Website',
    description: 'A portfolio website for an artist featuring a gallery and contact form.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://artist-website-zeta.vercel.app/',
    githubUrl: 'https://github.com/hasmashaik',
    features: ['Gallery', 'Animations', 'Responsive']
  }
];

// Get all projects
export const getProjects = (req, res) => {
  res.json(featuredProjects);
};

// Get single project by ID
export const getProjectById = (req, res) => {
  const { id } = req.params;
  const project = featuredProjects.find((p) => p.id === id);
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  res.json(project);
};

// Get GitHub projects
export const getGithubProjects = async (req, res) => {
  try {
    const username = process.env.GITHUB_USERNAME || 'hasmashaik';
    
    // Try to fetch from GitHub API
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`);
    
    if (!response.ok) {
      // Return static data if GitHub API fails
      return res.json({
        username: username,
        public_repos: 59,
        followers: 0,
        totalStars: 0,
        repos: featuredProjects.map((p) => ({ 
          name: p.title, 
          html_url: p.liveUrl || p.githubUrl, 
          stargazers_count: 0,
          description: p.description
        })),
      });
    }

    const repos = await response.json();
    const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);

    res.json({
      username: username,
      public_repos: repos.length,
      followers: 0,
      totalStars: totalStars,
      repos: repos.map((repo) => ({
        name: repo.name,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count || 0,
        description: repo.description || '',
      })),
    });
  } catch (error) {
    // Fallback if anything fails
    console.error('GitHub API Error:', error.message);
    res.json({
      username: process.env.GITHUB_USERNAME || 'hasmashaik',
      public_repos: 59,
      followers: 0,
      totalStars: 0,
      repos: featuredProjects.map((p) => ({ 
        name: p.title, 
        html_url: p.liveUrl || p.githubUrl, 
        stargazers_count: 0,
        description: p.description
      })),
    });
  }
};