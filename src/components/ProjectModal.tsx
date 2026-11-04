import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Check, Layers, Code, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c101a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-slate-100 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080b11]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066ff]" />
            <h3 className="font-bold text-lg text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Visual Banner Preview */}
          {project.image && project.image.trim() !== '' ? (
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-video w-full bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="rounded-xl overflow-hidden border border-white/10 aspect-video w-full bg-gradient-to-br from-[#0e172a] via-[#0b101c] to-[#070a12] p-6 flex flex-col items-center justify-center text-center">
              <Sparkles className="w-10 h-10 text-[#0066ff] mb-2" />
              <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
              <p className="text-xs text-slate-400 max-w-md">
                Production-grade architecture featuring modular components and responsive layouts.
              </p>
            </div>
          )}

          {/* About Project */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0066ff] mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Project Overview</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0066ff] mb-3 flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>Key Features</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-white/5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] shrink-0 mt-1.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0066ff] mb-2 flex items-center gap-1.5">
              <Code className="w-4 h-4" />
              <span>Built With</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-slate-900 text-slate-200 border border-white/10 text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#080b11] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-xs font-semibold"
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-white/10 flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/30"
            >
              <span>Launch Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
