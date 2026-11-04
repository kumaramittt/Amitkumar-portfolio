import React, { useState } from 'react';
import { Copy, Check, FileText, Send, Sparkles } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';

interface AboutProps {
  onContactClick: () => void;
  onViewSkillsClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick, onViewSkillsClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Top highlight skills for the floating card in the reference
  const highlightSkills = skills.slice(0, 3);

  return (
    <section id="about" className="py-24 bg-[#080b11] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div
        className="absolute top-1/2 left-0 w-80 h-80 bg-[#0066ff]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Overlapping Floating Skills Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Main Image Frame */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#0e131f] border border-white/10 shadow-2xl">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_30%]"
                />
                
                {/* Subtle dark gradient overlay at base */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent opacity-70"
                  aria-hidden="true"
                />
              </div>

              {/* Floating "MY SKILLS" Glassmorphic Card (Direct reference feature!) */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 w-[85%] sm:w-80 bg-[#0c111c]/95 backdrop-blur-xl border border-white/15 rounded-xl p-4 sm:p-5 shadow-2xl shadow-black/80">
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0066ff]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      MY SKILLS
                    </span>
                  </div>
                  <button
                    onClick={onViewSkillsClick}
                    className="text-[11px] font-medium text-[#0066ff] hover:underline"
                  >
                    View All →
                  </button>
                </div>

                {/* Skill bars matching reference visual */}
                <div className="space-y-3">
                  {highlightSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 tracking-wide">
                          {skill.name}
                        </span>
                        <span className="px-1.5 py-0.5 rounded border border-[#0066ff]/40 text-[#0066ff] text-[10px] font-mono font-bold">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0066ff] rounded-full transition-all duration-1000 shadow-[0_0_8px_#0066ff]"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col items-start pt-6 lg:pt-0">
            
            {/* "ABOUT ME" speech-bubble badge with triangular notch matching reference PSD */}
            <div className="relative mb-6">
              <div className="px-6 py-2.5 rounded-lg border-2 border-white/90 bg-transparent inline-block">
                <h2 className="text-sm font-extrabold tracking-widest text-white uppercase">
                  ABOUT ME
                </h2>
              </div>
              {/* Speech bubble triangular notch */}
              <div
                className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/90"
                aria-hidden="true"
              />
            </div>

            {/* Professional Biography */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {personalInfo.aboutBio}
            </p>

            {/* Clean Personal Information Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-6 rounded-xl bg-slate-900/40 border border-white/5 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#0066ff] font-bold mb-1">
                  Name
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {personalInfo.name}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#0066ff] font-bold mb-1">
                  Education
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {personalInfo.education}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#0066ff] font-bold mb-1">
                  Role
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {personalInfo.role.split('|')[0].trim()}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#0066ff] font-bold mb-1">
                  Goal
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {personalInfo.goal}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#0066ff] font-bold mb-1">
                  Location
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {personalInfo.location}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#0066ff] font-bold mb-1">
                  Email
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-medium text-slate-200 hover:text-[#0066ff] truncate transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-semibold text-sm tracking-wide shadow-md shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Amit%20Kumar`}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm tracking-wide transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#0066ff]" />
                <span>Request Resume / CV</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
