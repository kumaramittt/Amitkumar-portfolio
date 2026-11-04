import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SocialLinks } from './SocialLinks';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070b] border-t border-white/10 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Brand & Identity */}
          <div className="text-center md:text-left space-y-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 text-xl font-extrabold text-white tracking-wider uppercase group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066ff] shadow-[0_0_10px_#0066ff] group-hover:scale-125 transition-transform" />
              <span>{personalInfo.name}</span>
            </a>
            <p className="text-sm text-slate-400 max-w-md">
              B.Tech CSE Student | Web Developer | Aspiring Software Engineer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
              Follow & Connect
            </span>
            <SocialLinks variant="footer" />
          </div>

        </div>

        {/* Bottom bar with copyright and guide modal button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenGuide}
              className="text-slate-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              Customization & Deployment Guide
            </button>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="p-2.5 rounded-full bg-slate-900 hover:bg-[#0066ff] text-slate-400 hover:text-white border border-white/10 transition-all transform hover:-translate-y-1 shadow-md cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
