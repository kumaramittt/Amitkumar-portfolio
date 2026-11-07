import React, { useEffect } from 'react';
import { X, BookOpen, Image, User, Rocket, Mail, FolderTree, Code } from 'lucide-react';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0c101a] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#0066ff]/15 text-[#0066ff]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Developer & Customization Guide
              </h3>
              <p className="text-xs text-slate-400">
                Instructions for editing content, images, and deploying your portfolio
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close guide"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable instructions content */}
        <div className="overflow-y-auto space-y-6 pr-1 text-sm text-slate-300">
          
          {/* Section 1: Personal Info */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2 text-sm text-[#0066ff]">
              <User className="w-4 h-4" />
              <span>1. Changing Personal Information & Social Links</span>
            </h4>
            <p className="text-xs leading-relaxed text-slate-300">
              Open <code className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-[11px]">src/data/portfolioData.ts</code>. You will find:
            </p>
            <ul className="text-xs space-y-1 list-disc list-inside text-slate-400">
              <li><strong className="text-slate-200">personalInfo:</strong> Update your name, role, education, email, biography, or hero titles.</li>
              <li><strong className="text-slate-200">socialLinks:</strong> Update your profile URLs or add new platforms (GitHub, LeetCode, etc.).</li>
              <li><strong className="text-slate-200">skills:</strong> Adjust your skill proficiencies and percentages.</li>
            </ul>
          </div>

          {/* Section 2: Project Images */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2 text-sm text-[#0066ff]">
              <Image className="w-4 h-4" />
              <span>2. Replacing Project Images & Adding New Projects</span>
            </h4>
            <p className="text-xs leading-relaxed text-slate-300">
              To add your own project screenshots:
            </p>
            <ol className="text-xs space-y-1.5 list-decimal list-inside text-slate-400">
              <li>Place your screenshot inside the <code className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-[11px]">public/projects/</code> folder (e.g. <code className="text-slate-200">my-app.png</code>).</li>
              <li>In <code className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-[11px]">src/data/portfolioData.ts</code>, update the <code className="text-slate-200">image</code> field in the <code className="text-slate-200">projects</code> array: <code className="text-emerald-400">image: '/projects/my-app.png'</code>.</li>
              <li>If left empty, a sleek interactive vector preview banner is rendered automatically!</li>
            </ol>
          </div>

          {/* Section 3: Connecting Form to Real Backend */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2 text-sm text-[#0066ff]">
              <Mail className="w-4 h-4" />
              <span>3. Connecting Form to Email (Formspree / EmailJS)</span>
            </h4>
            <p className="text-xs leading-relaxed text-slate-300">
              The contact form features active client-side validation and a prefilled mailto launcher. To receive form entries directly:
            </p>
            <p className="text-xs text-slate-400">
              Sign up at <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-[#0066ff] underline">Formspree.io</a> (free tier), obtain your Form ID endpoint, and in <code className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-[11px]">src/components/Contact.tsx</code> simply POST the data with <code className="text-slate-200 font-mono">fetch('https://formspree.io/f/YOUR_FORM_ID', &#123; method: 'POST', body: ... &#125;)</code>.
            </p>
          </div>

          {/* Section 4: Deploying */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2 text-sm text-[#0066ff]">
              <Rocket className="w-4 h-4" />
              <span>4. Deploying Your Portfolio</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
              <div className="p-3 rounded-lg bg-slate-950/70 border border-white/5">
                <p className="font-bold text-white mb-1">Vercel (Recommended)</p>
                <p>Push your repository to GitHub, link with Vercel, and click Deploy. Framework is detected automatically as Vite. A pre-configured <code className="text-sky-300 font-mono">.npmrc</code> file is included to ensure clean dependency installation.</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/70 border border-white/5">
                <p className="font-bold text-white mb-1">GitHub Pages</p>
                <p>Run <code className="text-sky-300 font-mono">npm run build</code>, and configure GitHub Pages to deploy from the build output directory.</p>
              </div>
            </div>
          </div>

          {/* Section 5: Structure */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
            <h4 className="font-bold text-white flex items-center gap-2 text-sm text-[#0066ff]">
              <FolderTree className="w-4 h-4" />
              <span>5. Clean Architecture</span>
            </h4>
            <pre className="p-3 rounded-lg bg-slate-950 text-[11px] font-mono text-slate-400 overflow-x-auto">
{`src/
├── data/
│   └── portfolioData.ts    # Single place to customize your content & projects
├── utils/
│   ├── portfolio.ts        # Pure logic functions (validation, filtering)
│   └── portfolio.test.ts   # Node unit tests
├── components/
│   ├── Navbar.tsx          # Sticky glass navigation & mobile drawer
│   ├── Hero.tsx            # Full hero with monochrome photo & rotating role
│   ├── SectionDivider.tsx  # Geometric transition ribbon
│   ├── About.tsx           # Speech-bubble badge & floating skills card
│   ├── Skills.tsx          # Progress meters with category filters
│   ├── Services.tsx        # Modern service cards & checklist
│   ├── Portfolio.tsx       # Projects gallery & category selector
│   ├── ProjectCard.tsx     # Card with preview, tech stack, and links
│   ├── ProjectModal.tsx    # Detailed project inspection modal
│   ├── Contact.tsx         # Validated contact form & quick email copy
│   ├── SocialLinks.tsx     # SVG icons for Facebook, X, Instagram, LinkedIn
│   ├── HireModal.tsx       # Quick hire inquiry modal
│   └── Footer.tsx          # Dark footer & back-to-top
└── App.tsx                 # Root layout assembling all components`}
            </pre>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-bold uppercase tracking-wider"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};
