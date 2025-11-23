import React from 'react';
import Hero from './components/Hero';
import ProjectCarousel from './components/ProjectCarousel';
import SkillsSection from './components/SkillsSection';
import Publications from './components/Publications';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <main>
        <Hero />
        <ProjectCarousel />
        <SkillsSection />
        <Publications />
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default App;