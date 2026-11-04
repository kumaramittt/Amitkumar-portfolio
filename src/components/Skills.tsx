import React, { useState } from 'react';
import { Code2, Cpu, Palette, GitBranch, Layers, CheckCircle2 } from 'lucide-react';
import { skills, Skill } from '../data/portfolioData';
import { formatSkillLevel } from '../utils/portfolio';

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'web', label: 'Web & Core' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'programming', label: 'Programming' },
  { id: 'design', label: 'UI/UX & Design' },
  { id: 'tools', label: 'Tools & Git' },
];

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const getSkillIcon = (category: Skill['category']) => {
    switch (category) {
      case 'web':
        return <Code2 className="w-5 h-5 text-[#0066ff]" />;
      case 'frontend':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'programming':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'design':
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case 'tools':
        return <GitBranch className="w-5 h-5 text-blue-400" />;
      default:
        return <Code2 className="w-5 h-5 text-[#0066ff]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient background */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 text-[#0066ff] text-xs font-bold uppercase tracking-widest mb-3">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MY SKILLS
          </h2>
          <div className="w-16 h-1 bg-[#0066ff] rounded-full mt-3 mb-4 shadow-[0_0_10px_#0066ff]" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A realistic overview of technologies and concepts I actively practice and develop projects with.
          </p>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0066ff] text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => {
            const levelLabel = formatSkillLevel(skill.percentage);
            return (
              <div
                key={skill.name}
                className="group p-6 rounded-2xl bg-[#0d121e]/80 border border-white/10 hover:border-[#0066ff]/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 group-hover:border-[#0066ff]/30 transition-colors">
                        {getSkillIcon(skill.category)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-slate-400">{skill.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-base font-bold font-mono text-[#0066ff]">
                        {skill.percentage}%
                      </span>
                      <span className="text-[10px] uppercase font-semibold text-slate-500">
                        {levelLabel}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-white/5 p-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-[#0066ff] rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,102,255,0.6)]"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="capitalize">{skill.category} Development</span>
                  <span className="flex items-center gap-1 text-emerald-400/90 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified in projects
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
