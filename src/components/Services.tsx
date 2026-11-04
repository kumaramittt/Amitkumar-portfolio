import React from 'react';
import { Code, Layout, Smartphone, Briefcase, ArrowRight, Check } from 'lucide-react';
import { services, Service } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: Service['iconName']) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-[#0066ff]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#0066ff]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#0066ff]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#0066ff]" />;
      default:
        return <Code className="w-6 h-6 text-[#0066ff]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#080b11] relative overflow-hidden border-t border-white/5">
      {/* Decorative ambient glow */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0066ff]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 text-[#0066ff] text-xs font-bold uppercase tracking-widest mb-3">
            What I Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MY SERVICES
          </h2>
          <div className="w-16 h-1 bg-[#0066ff] rounded-full mt-3 mb-4 shadow-[0_0_10px_#0066ff]" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Specialized solutions focused on clean code, seamless user interfaces, and mobile responsiveness.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-2xl bg-[#0c101a] border border-white/10 hover:border-[#0066ff]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_12px_30px_rgba(0,102,255,0.15)] flex flex-col justify-between"
            >
              {/* Subtle top indicator number */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-slate-900 border border-white/5 text-[#0066ff] group-hover:bg-[#0066ff] group-hover:text-white transition-all duration-300 shadow-md">
                  {getIcon(service.iconName)}
                </div>
                <span className="text-2xl font-black font-mono text-slate-700/80 group-hover:text-[#0066ff]/40 transition-colors">
                  {service.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Feature checklist */}
                <ul className="space-y-2">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#0066ff] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full mt-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[#0066ff] text-slate-300 hover:text-white text-xs font-semibold tracking-wide border border-white/5 group-hover:border-transparent transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Inquire Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
