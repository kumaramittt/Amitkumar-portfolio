/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HireModal } from './components/HireModal';
import { InstructionsModal } from './components/InstructionsModal';

export default function App() {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  const handleOpenHireModal = (serviceTitle: string = '') => {
    setSelectedService(serviceTitle);
    setHireModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col font-sans selection:bg-[#0066ff] selection:text-white">
      {/* Top Navbar */}
      <Navbar onHireMeClick={() => handleOpenHireModal()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onHireMeClick={() => handleOpenHireModal()}
          onMyWorkClick={() => scrollToSection('portfolio')}
        />

        {/* Section Divider (Memphis & geometric accent from reference) */}
        <SectionDivider />

        {/* About Section */}
        <About
          onContactClick={() => scrollToSection('contact')}
          onViewSkillsClick={() => scrollToSection('skills')}
        />

        {/* Skills Section */}
        <Skills />

        {/* Services Section */}
        <Services onSelectService={(service) => handleOpenHireModal(service)} />

        {/* Portfolio / Projects Section */}
        <Portfolio />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenGuide={() => setGuideModalOpen(true)} />

      {/* Quick Hire Modal */}
      <HireModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
        preselectedService={selectedService}
      />

      {/* Developer Customization & Deployment Guide Modal */}
      <InstructionsModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </div>
  );
}
