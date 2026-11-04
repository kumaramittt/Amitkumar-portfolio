import React, { useState } from 'react';
import { projects, Project } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-apps', label: 'Web Apps' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
];

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const displayedProjects = filterProjects(projects, selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient lighting */}
      <div
        className="absolute top-1/4 right-10 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 text-[#0066ff] text-xs font-bold uppercase tracking-widest mb-3">
            Featured Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MY PROJECTS
          </h2>
          <div className="w-16 h-1 bg-[#0066ff] rounded-full mt-3 mb-4 shadow-[0_0_10px_#0066ff]" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Selected web applications and responsive interfaces showcasing modern code quality, performance, and UI design.
          </p>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0066ff] text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
