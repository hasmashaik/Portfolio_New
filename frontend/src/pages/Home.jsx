import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import FeaturedProjects from '../components/FeaturedProjects';
import GitHubStats from '../components/GitHubStats';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <GitHubStats />
      <Education />
      <Contact />
    </main>
  );
};

export default Home;