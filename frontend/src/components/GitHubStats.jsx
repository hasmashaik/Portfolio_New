import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from 'react-icons/fa';
import axios from 'axios';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects/github`);
        setStats(response.data);
        setLoading(false);
      } catch (err) {
        console.error('GitHub API Error:', err);
        setError(true);
        setLoading(false);
        // Fallback data
        setStats({
          username: 'hasmashaik',
          public_repos: 59,
          followers: 0,
          totalStars: 0
        });
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center text-light-gray">
        <div className="w-12 h-12 border-4 border-neon/20 border-t-neon rounded-full animate-spin mx-auto" />
        <p className="mt-4">Loading GitHub stats...</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold">
            GitHub <span className="text-neon">Statistics</span>
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-dark/50 p-6 rounded-xl text-center border border-gray-800 hover:border-neon/30 transition-all">
            <FaGithub className="text-3xl text-neon mx-auto mb-2" />
            <p className="text-2xl font-bold">{stats?.public_repos || '59+'}</p>
            <p className="text-sm text-light-gray">Repositories</p>
          </div>
          <div className="bg-dark/50 p-6 rounded-xl text-center border border-gray-800 hover:border-neon/30 transition-all">
            <FaStar className="text-3xl text-neon mx-auto mb-2" />
            <p className="text-2xl font-bold">{stats?.totalStars || 'N/A'}</p>
            <p className="text-sm text-light-gray">Stars</p>
          </div>
          <div className="bg-dark/50 p-6 rounded-xl text-center border border-gray-800 hover:border-neon/30 transition-all">
            <FaUsers className="text-3xl text-neon mx-auto mb-2" />
            <p className="text-2xl font-bold">{stats?.followers || 'N/A'}</p>
            <p className="text-sm text-light-gray">Followers</p>
          </div>
          <div className="bg-dark/50 p-6 rounded-xl text-center border border-gray-800 hover:border-neon/30 transition-all">
            <FaGithub className="text-3xl text-neon mx-auto mb-2" />
            <p className="text-sm font-medium text-white">@{stats?.username || 'hasmashaik'}</p>
            <a
              href="https://github.com/hasmashaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neon hover:underline"
            >
              View Profile
            </a>
          </div>
        </div>

        {error && (
          <p className="text-center text-light-gray text-sm mt-4">
            ⚠️ Using fallback data. <a href="https://github.com/hasmashaik" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline">Visit GitHub directly</a>
          </p>
        )}
      </div>
    </section>
  );
};

export default GitHubStats;