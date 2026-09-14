import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReframeSection } from './components/ReframeSection';
import { PillarsSection } from './components/PillarsSection';
import { Prime12Section } from './components/Prime12Section';
import { PersonalizationSection } from './components/PersonalizationSection';
import { CoachingSection } from './components/CoachingSection';
import { FounderSection } from './components/FounderSection';
import { ProofGallerySection } from './components/ProofGallerySection';
import { PerformanceAgeAssessment } from './components/PerformanceAgeAssessment';
import { LogoSuiteSection } from './components/LogoSuiteSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Prime12Modal } from './components/Prime12Modal';

export function App() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [isPrime12ModalOpen, setIsPrime12ModalOpen] = useState(false);

  const handleOpenAssessment = () => {
    setIsAssessmentModalOpen(true);
  };

  const handleOpenPrime12 = () => {
    setIsPrime12ModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-prime-950 text-prime-100 flex flex-col font-sans selection:bg-gold-500 selection:text-prime-950">
      {/* Executive Navbar */}
      <Navbar
        onOpenAssessment={handleOpenAssessment}
        onOpenPrime12={handleOpenPrime12}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenAssessment={handleOpenAssessment}
          onExplorePrime12={() => {
            const el = document.getElementById('prime12');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 2: Reframe (You Haven't Peaked) */}
        <ReframeSection />

        {/* Section 3: Performance Over the Scale (6 Pillars) */}
        <PillarsSection />

        {/* Section 4: Flagship 12-Week Protocol (Prime 12) */}
        <Prime12Section onApply={handleOpenPrime12} />

        {/* Section 5: Adaptive Architecture (Program Fits Life) */}
        <PersonalizationSection />

        {/* Section 6: Technology + Human Coach */}
        <CoachingSection />

        {/* Section 7: Founder Philip Petracca Story & Credibility */}
        <FounderSection />

        {/* Real Physical Proof Gallery (All 5 Authentic Images) */}
        <ProofGallerySection />

        {/* Section 8: Interactive Performance Age Assessment (Embedded) */}
        <PerformanceAgeAssessment onApplyForPrime12={handleOpenPrime12} />

        {/* Section 9: Official Brand & Logo Studio Suite */}
        <LogoSuiteSection />

        {/* Section 10: Final Heroic Call to Action */}
        <FinalCTA
          onOpenAssessment={handleOpenAssessment}
          onExplorePrime12={handleOpenPrime12}
        />
      </main>

      {/* Minimal Executive Footer */}
      <Footer />

      {/* Pop-up Assessment Modal */}
      {isAssessmentModalOpen && (
        <PerformanceAgeAssessment
          isModal={true}
          onClose={() => setIsAssessmentModalOpen(false)}
          onApplyForPrime12={() => {
            setIsAssessmentModalOpen(false);
            setIsPrime12ModalOpen(true);
          }}
        />
      )}

      {/* Pop-up Prime 12 Application Modal */}
      <Prime12Modal
        isOpen={isPrime12ModalOpen}
        onClose={() => setIsPrime12ModalOpen(false)}
      />
    </div>
  );
}

export default App;
