import React, { useState, useEffect } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SocialLinks } from './SocialLinks';

interface HeroProps {
  onHireMeClick: () => void;
  onMyWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onHireMeClick, onMyWorkClick }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = personalInfo.rotatingTitles;

  // Auto rotate titles every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [titles.length]);

  const handlePrevTitle = () => {
    setTitleIndex((prev) => (prev === 0 ? titles.length - 1 : prev - 1));
  };

  const handleNextTitle = () => {
    setTitleIndex((prev) => (prev + 1) % titles.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden bg-gradient-to-b from-[#080b11] via-[#090d16] to-[#080b11]"
    >
      {/* Decorative Dot Matrix in background (left side matching reference) */}
      <div
        className="absolute top-1/4 left-6 sm:left-12 hidden sm:grid grid-cols-4 gap-4 pointer-events-none opacity-25 z-0"
        aria-hidden="true"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i % 3 === 0 ? 'bg-[#0066ff]' : 'bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* Subtle radial ambient blue glow behind right image */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Column: Content (55% on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center pt-8 lg:pt-0">
            {/* Social media icons pill bar */}
            <div className="mb-6">
              <SocialLinks variant="hero" />
            </div>

            {/* Small Kicker */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0066ff]">
                HELLO, I'M
              </span>
            </div>

            {/* Main Heading with dynamic rotating title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              <span>I'm a </span>
              <span className="text-white relative inline-block">
                <span className="text-[#0066ff]">{titles[titleIndex]}</span>
                <span className="inline-block w-1 h-8 sm:h-10 lg:h-12 bg-[#0066ff] ml-1.5 align-middle animate-pulse" />
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              {personalInfo.heroSupportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              <button
                onClick={onMyWorkClick}
                className="px-8 py-3.5 rounded-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-semibold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                MY WORK
              </button>
              <button
                onClick={onHireMeClick}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm tracking-wide shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                HIRE ME
              </button>
            </div>

            {/* Carousel / Indicator bar matching reference image (← 1/3 →) */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 select-none">
              <button
                onClick={handlePrevTitle}
                aria-label="Previous role highlight"
                className="p-1 rounded hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="tracking-wider text-slate-300">
                {titleIndex + 1} / {titles.length}
              </span>
              <button
                onClick={handleNextTitle}
                aria-label="Next role highlight"
                className="p-1 rounded hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 text-xs hidden sm:inline">
                {titles[titleIndex]}
              </span>
            </div>
          </div>

          {/* Right Column: Amit Kumar's Photograph (45% on desktop) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-[#0066ff]/20 to-transparent rounded-3xl blur-xl opacity-70"
                aria-hidden="true"
              />

              {/* Image Container with smooth dark vignette blending */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0d131f] border border-white/10 shadow-2xl">
                
                {/* Amit's Photo with monochrome cinematic grade matching reference */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={personalInfo.photoUrl}
                    alt="Amit Kumar — Web Developer"
                    className="w-full h-full object-cover object-[center_30%] hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Gradient Scrims: Blends bottom and sides seamlessly into dark background */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent opacity-80 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#080b11]/50 via-transparent to-[#080b11]/40 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Subtle corner badge for identity verification */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#080b11]/80 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm tracking-wide">Amit Kumar</p>
                    <p className="text-xs text-slate-400">B.Tech CSE · 3rd Year</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#0066ff] shadow-[0_0_8px_#0066ff]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="flex flex-col items-center text-xs tracking-wider uppercase text-slate-400 hover:text-white"
        >
          <span className="text-[10px] tracking-widest text-slate-400 mb-1">SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#0066ff]" />
        </a>
      </div>
    </section>
  );
};
