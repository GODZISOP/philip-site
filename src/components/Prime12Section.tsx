import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Calendar, Target, Layers, ShieldCheck } from 'lucide-react';
import { PhaseItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface Prime12Props {
  onApply: () => void;
}

export const Prime12Section: React.FC<Prime12Props> = ({ onApply }) => {
  const phases: PhaseItem[] = [
    {
      phase: 'PHASE 01',
      weeks: 'WEEKS 1–4',
      title: 'REBUILD',
      subtitle: 'Establish the foundation',
      focus: 'Joint de-loading, movement mechanics audit, baseline aerobic conditioning, and circadian sleep alignment.',
      deliverables: [
        'Full structural movement screen & range-of-motion baseline',
        'Metabolic priming: protein distribution & executive nutrient timing',
        'Initial strength restoration without joint wear-and-tear',
        'HRV & recovery tracking calibration',
      ],
      mindset: 'Eliminate friction. Prove consistency without fatigue.',
    },
    {
      phase: 'PHASE 02',
      weeks: 'WEEKS 5–8',
      title: 'IMPROVE',
      subtitle: 'Build capacity and performance',
      focus: 'Progressive overload, high-density resistance training, VO2 max capacity, and body composition optimization.',
      deliverables: [
        'Density training: maximizing muscular hypertrophy in under 45 mins',
        'Zone 2 cardiovascular conditioning intervals',
        'Travel-proof workout adaptation systems for hotels and flights',
        'Weekly video technique review and load adjustments',
      ],
      mindset: 'Increase physical capacity while daily energy spikes.',
    },
    {
      phase: 'PHASE 03',
      weeks: 'WEEKS 9–12',
      title: 'MAXIMIZE',
      subtitle: 'Peak performance and sustainable habits',
      focus: 'Consolidating athletic output, peak strength benchmarks, and building a self-sustaining lifelong operating system.',
      deliverables: [
        'Peak capability tests across all 6 performance pillars',
        'Autonomic stress resilience: handling high-stakes business stress',
        'Long-term nutrition and lifestyle playbook for the next decade',
        'Post-12-week maintenance and progression architecture',
      ],
      mindset: 'Your prime is no longer a temporary project. It is your standard.',
    },
  ];

  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  return (
    <section id="prime12" className="py-24 bg-prime-900/80 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-block text-xs font-mono tracking-widest text-gold-400 uppercase">
                THE FLAGSHIP 12-WEEK EXECUTIVE PROTOCOL
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase leading-tight">
                12 WEEKS. ONE OBJECTIVE. <br />
                <span className="gold-gradient-text">BUILD YOUR NEXT PRIME.</span>
              </h2>
              <p className="text-prime-300 text-base sm:text-lg leading-relaxed">
                Not a boot camp. Not a crash diet. A methodical 3-phase athletic development system specifically built for executives over 40.
              </p>
            </div>

            <button
              onClick={onApply}
              className="self-start lg:self-auto inline-flex items-center px-7 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm shadow-md hover:shadow-gold-glow transition-all duration-200"
            >
              <span>APPLY FOR PRIME 12™</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </ScrollReveal>

        {/* Phase Selector Tabs */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {phases.map((phase, idx) => {
            const isSelected = activePhaseIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 100} direction="up" className="h-full">
                <button
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`text-left p-6 rounded-sm border transition-all duration-200 relative overflow-hidden w-full h-full ${
                    isSelected
                      ? 'bg-prime-950 border-gold-500 shadow-lg shadow-gold-500/10'
                      : 'bg-prime-950/40 border-white/5 hover:border-white/20 hover:bg-prime-950/70'
                  }`}
                >
                  {/* Active Indicator Top Bar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
                  )}

                  <div className="flex items-center justify-between text-xs font-mono text-prime-400 mb-2">
                    <span>{phase.phase}</span>
                    <span className="text-gold-400 font-semibold">{phase.weeks}</span>
                  </div>

                  <div className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">
                    {phase.title}
                  </div>
                  <div className="text-xs text-prime-300 mt-1 font-medium">
                    {phase.subtitle}
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Active Phase Deep-Dive Card */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-6 bg-prime-950 rounded-sm border border-gold-500/30 p-8 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">
                    Detailed Phase Breakdown &bull; {phases[activePhaseIndex].weeks}
                  </span>
                  <h3 className="text-3xl font-display font-black text-white uppercase tracking-tight">
                    {phases[activePhaseIndex].title}: {phases[activePhaseIndex].subtitle}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-prime-200 leading-relaxed font-medium">
                  {phases[activePhaseIndex].focus}
                </p>

                <div className="p-4 rounded-sm bg-prime-900 border border-white/5">
                  <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider block font-bold">
                    Phase Mindset Standard
                  </span>
                  <p className="text-xs sm:text-sm text-white italic mt-1 font-medium">
                    "{phases[activePhaseIndex].mindset}"
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono text-prime-300 uppercase tracking-widest block">
                  Key Deliverables & Protocols
                </span>
                <div className="space-y-3">
                  {phases[activePhaseIndex].deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-3 p-3.5 rounded-sm bg-prime-900/70 border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-prime-200 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* What Prime 12 Includes Feature Strip */}
        <ScrollReveal direction="up" delay={250}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-sm bg-prime-950 border border-white/5 space-y-2">
              <div className="text-2xl sm:text-3xl font-black font-display text-gold-400">1:1</div>
              <div className="text-xs font-bold uppercase text-white tracking-wider">Coach Access</div>
              <div className="text-[11px] text-prime-400 font-mono">Real-time decisions</div>
            </div>
            <div className="p-5 rounded-sm bg-prime-950 border border-white/5 space-y-2">
              <div className="text-2xl sm:text-3xl font-black font-display text-gold-400">100%</div>
              <div className="text-xs font-bold uppercase text-white tracking-wider">Adaptive Plans</div>
              <div className="text-[11px] text-prime-400 font-mono">Bends to travel</div>
            </div>
            <div className="p-5 rounded-sm bg-prime-950 border border-white/5 space-y-2">
              <div className="text-2xl sm:text-3xl font-black font-display text-gold-400">6 Dim</div>
              <div className="text-xs font-bold uppercase text-white tracking-wider">Metric Matrix</div>
              <