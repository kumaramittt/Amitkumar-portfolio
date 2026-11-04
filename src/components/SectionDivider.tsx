import React from 'react';

export const SectionDivider: React.FC = () => {
  return (
    <div className="w-full h-12 bg-slate-900/40 border-y border-white/5 relative overflow-hidden flex items-center justify-center">
      {/* Subtle memphis / geometric pattern elements inspired by the reference image */}
      <div className="absolute inset-0 opacity-15 flex items-center justify-around text-slate-400 select-none text-xs font-mono">
        <span>▲</span>
        <span>●</span>
        <span>~ ~ ~</span>
        <span>■</span>
        <span>+ +</span>
        <span className="hidden sm:inline">▲</span>
        <span className="hidden sm:inline">●</span>
        <span className="hidden md:inline">~ ~ ~</span>
        <span className="hidden md:inline">■</span>
        <span className="hidden lg:inline">+ +</span>
      </div>
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#0066ff] to-transparent" />
    </div>
  );
};
