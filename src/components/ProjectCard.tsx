import React from 'react';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  // Generates a domain-authentic interactive SVG mockup banner when no external screenshot is provided
  const renderMockupBanner = () => {
    if (project.image && project.image.trim() !== '') {
      return (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      );
    }

    // Modern styled vector interface preview based on project title
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#0e1626] via-[#090d16] to-[#06080d] p-5 flex flex-col justify-between border-b border-white/5 relative overflow-hidden group-hover:bg-[#10192b] transition-colors">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

        {/* Browser Mockup Top Bar */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/5 truncate max-w-[140px]">
            {project.title.toLowerCase().replace(/\s+/g, '-')}.dev
          </span>
        </div>

        {/* Mockup Center Graphic */}
        <div className="my-auto py-4 flex flex-col items-center justify-center text-center z-10">
          <div className="w-12 h-12 rounded-2xl bg-[#0066ff]/15 border border-[#0066ff]/30 flex items-center justify-center mb-3 text-[#0066ff] shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-sm font-bold text-white tracking-wide">
            {project.title}
          </span>
          <span className="text-xs text-slate-400 mt-1 line-clamp-1">
            {project.technologies.join(' · ')}
          </span>
        </div>

        {/* Mockup Bottom Pill */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 z-10 pt-2 border-t border-white/5">
          <span>Interactive Prototype</span>
          <span className="text-[#0066ff] font-medium group-hover:underline flex items-center gap-1">
            View Stack →
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="group rounded-2xl bg-[#0c101a] border border-white/10 hover:border-[#0066ff]/50 overflow-hidden shadow-xl hover:shadow-[0_12px_32px_rgba(0,102,255,0.15)] transition-all duration-300 flex flex-col justify-between">
      
      {/* Project Visual / Mockup Preview Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        {renderMockupBanner()}

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-[#080b11]/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 flex items-center justify-center gap-3">
          <button
            onClick={() => onViewDetails(project)}
            className="p-2.5 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-transform hover:scale-110 shadow-lg cursor-pointer"
            title="Inspect project details"
            aria-label={`Inspect ${project.title} details`}
          >
            <Eye className="w-4 h-4" />
          </button>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#0066ff] text-white hover:bg-[#0052cc] transition-transform hover:scale-110 shadow-lg"
              title="Open Live Preview"
              aria-label={`Open Live Preview of ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-transform hover:scale-110 shadow-lg"
              title="View Source on GitHub"
              aria-label={`View Source code of ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tech Stack List (Clean unboxed style per frontend design guidelines) */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#0066ff] font-medium mb-2.5">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span className="text-slate-600" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Card Action Buttons: Live Demo and GitHub */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
          <button
            onClick={() => onViewDetails(project)}
            aria-label={`View ${project.title} details`}
            className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#0066ff]" />
            <span>Details</span>
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-white/5 flex items-center gap-1.5 transition-colors"
                aria-label={`GitHub code for ${project.title}`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-blue-600/30 transition-all"
              aria-label={`Live Demo of ${project.title}`}
            >
              <span>Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
