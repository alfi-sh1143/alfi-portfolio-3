/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import BeyondWeb from './components/BeyondWeb';
import Skills from './components/Skills';
import Education from './components/Education';
import DesignProcess from './components/DesignProcess';
import DesignSystem from './components/DesignSystem';
import CaseStudiesSection from './components/CaseStudiesSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Modals & Overlays
import CaseStudyModal from './components/CaseStudyModal';
import AboutModal from './components/AboutModal';
import CVModal from './components/CVModal';
import ImageLightbox from './components/ImageLightbox';

import { ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [caseStudyProject, setCaseStudyProject] = useState<ProjectItem | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  // Monitor active section for navigation highlight
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'research', 'skills', 'education', 'case-studies', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLightbox = (src: string, alt: string, caption?: string) => {
    setLightboxImage({ src, alt, caption });
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Fixed Navigation Bar */}
      <Navbar
        onOpenCV={() => setIsCVModalOpen(true)}
        activeSection={activeSection}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenCV={() => setIsCVModalOpen(true)}
          onOpenImage={handleOpenLightbox}
        />

        {/* 2. Editorial About Me */}
        <About
          onOpenAboutModal={() => setIsAboutModalOpen(true)}
          onOpenImage={handleOpenLightbox}
        />

        {/* 3. Selected Projects & Filter System */}
        <Projects
          onViewCaseStudy={(proj) => setCaseStudyProject(proj)}
          onOpenImage={handleOpenLightbox}
        />

        {/* 4. Research & Technology (Federated Learning & IDS) */}
        <Research
          onOpenImage={handleOpenLightbox}
        />

        {/* 5. Beyond the Web (Mobile, Visual Design, Interactive Game) */}
        <BeyondWeb />

        {/* 6. Skills & Tech Stack */}
        <Skills />

        {/* 7. Education, Academic Journey & Leadership */}
        <Education
          onOpenImage={handleOpenLightbox}
        />

        {/* 8. My Design Process (6 Phases) */}
        <DesignProcess />

        {/* 9. Interactive Design System Showcase */}
        <DesignSystem />

        {/* 10. UX Case Studies In-Depth Section */}
        <CaseStudiesSection
          onViewCaseStudy={(proj) => setCaseStudyProject(proj)}
          onOpenImage={handleOpenLightbox}
        />

        {/* 11. Contact & Outreach */}
        <Contact />
      </main>

      {/* Footer & Back to Top */}
      <Footer />

      {/* Global Modals */}
      <CaseStudyModal
        project={caseStudyProject}
        isOpen={caseStudyProject !== null}
        onClose={() => setCaseStudyProject(null)}
        onOpenImage={handleOpenLightbox}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <ImageLightbox
        isOpen={lightboxImage !== null}
        onClose={() => setLightboxImage(null)}
        imageSrc={lightboxImage?.src || ''}
        imageAlt={lightboxImage?.alt || ''}
        caption={lightboxImage?.caption}
      />
    </div>
  );
}
