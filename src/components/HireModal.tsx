import React, { useState, useEffect } from 'react';
import { X, Send, Check, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const HireModal: React.FC<HireModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [projectType, setProjectType] = useState(preselectedService || 'Website Development');
  const [timeline, setTimeline] = useState('Within 1-2 weeks');
  const [clientEmail, setClientEmail] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setProjectType(preselectedService);
    }
  }, [preselectedService]);

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

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${projectType} (${timeline})`
  )}&body=${encodeURIComponent(
    `Hi Amit,\n\nI am interested in hiring you for ${projectType}.\nTimeline: ${timeline}\n\nProject details:\n${clientMessage}\n\nYou can reach me at: ${clientEmail}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0c101a] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#0066ff] font-bold">
              Available For Work
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Hire Amit Kumar
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSent ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white">Inquiry Details Ready!</h4>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              You can now launch your email client with your prefilled inquiry to send it straight to Amit.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={mailtoUrl}
                className="px-6 py-3 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Send to {personalInfo.email}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  setIsSent(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Project Category
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              >
                <option value="Web Development">Web Development</option>
                <option value="Frontend Development">Frontend Development (React)</option>
                <option value="Responsive Design">Responsive Design & Mobile Optimization</option>
                <option value="Portfolio Websites">Personal Portfolio Website</option>
                <option value="Internship / Full-time">Internship / Student Opportunity</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Timeline
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              >
                <option value="Urgent (1-3 days)">Urgent (1-3 days)</option>
                <option value="Within 1-2 weeks">Within 1-2 weeks</option>
                <option value="Within a month">Within a month</option>
                <option value="Flexible">Flexible schedule</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                required
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="client@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Brief Description
              </label>
              <textarea
                rows={3}
                required
                value={clientMessage}
                onChange={(e) => setClientMessage(e.target.value)}
                placeholder="Tell me a bit about what you need built..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0066ff] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#0066ff]" />
                <span>Or email directly</span>
              </a>

              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <span>Continue</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
