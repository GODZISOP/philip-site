import React, { useState } from 'react';
import { Dumbbell, Activity, Compass, Flame, Moon, CalendarCheck, ChevronRight } from 'lucide-react';
import { PillarItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const PillarsSection: React.FC = () => {
  const pillars: PillarItem[] = [
    {
      id: 'strength',
      title: 'STRENGTH',
      category: 'BIOMECHANICAL FOUNDATION',
      metric: 'Relative Load & Joint Power',
      summary: 'Functional multi-planar power and joint integrity rather than ego-driven 1RM gym lifting.',
      description: 'Preserving and building dense skeletal muscle tissue is the number one biomarker for longevity, metabolic health, and physical autonomy in the second half of life.',
      executiveTake: 'Command your physical presence in any room; lift, carry, and move without hesitation.',
      kpis: ['Relative strength to body mass', 'Tendon & ligament structural tolerance', 'Postural spinal load capacity'],
    },
    {
      id: 'conditioning',
      title: 'CONDITIONING',
      category: 'CARDIOVASCULAR LONGEVITY',
      metric: 'Zone 2 Capacity & VO2 Max',
      summary: 'Mitochondrial density and cardiovascular stamina built through targeted energy systems.',
      description: 'Aerobic fitness without the joint destruction of endless pavement pounding. We program smart interval protocols that accelerate recovery and heighten cognitive stamina.',
      executiveTake: 'Sharp mental clarity through 14-hour business days and relentless executive travel.',
      kpis: ['Zone 2 baseline efficiency', 'Heart Rate Recovery (HRR) in 60s', 'Work-to-rest recovery ratios'],
    },
    {
      id: 'mobility',
      title: 'MOBILITY',
      category: 'FUNCTIONAL FREEDOM',
      metric: 'Active Articular Freedom',
      summary: 'Restoring rotational capacity, hip freedom, thoracic extension, and pain-free movement.',
      description: 'Years of boardrooms, desk work, and flights create restricted patterns. We systematically reclaim your natural mobility so every movement feels smooth and athletic.',
      executiveTake: 'Wake up without lower back stiffness; play sports and travel without nagging aches.',
      kpis: ['Thoracic spine rotation', 'Hip capsule extension', 'Scapular glide & overhead clearance'],
    },
    {
      id: 'body-comp',
      title: 'BODY COMPOSITION',
      category: 'LEAN MASS RETENTION',
      metric: 'Visceral Ratio & Muscle Mass',
      summary: 'Targeting visceral abdominal fat while defending lean athletic muscle tissue.',
      description: 'A lower scale weight means nothing if you lost five pounds of muscle. We prioritize visceral fat reduction, metabolic rate elevation, and lean muscular definition.',
      executiveTake: 'Clothes fit with tailored precision; looking lean, athletic, and formidable.',
      kpis: ['Waist-to-height ratio', 'Lean muscle retention index', 'Visceral fat biomarker progress'],
    },
    {
      id: 'recovery',
      title: 'RECOVERY',
      category: 'NEURO-AUTONOMIC BALANCE',
      metric: 'HRV & Sleep Architecture',
      summary: 'Tracking sleep architecture, HRV trends, and nervous system replenishment.',
      description: 'Training is merely the stimulus; growth and adaptation happen during recovery. We align stress management, sleep quality, and active restoration to ensure steady progress.',
      executiveTake: 'Sustained peak energy instead of relying on 4 cups of coffee to survive 3 PM meetings.',
      kpis: ['Heart Rate Variability (HRV) baseline', 'Deep & REM sleep consistency', 'Subjective morning readiness score'],
    },
    {
      id: 'consistency',
      title: 'CONSISTENCY',
      category: 'SUSTAINABLE EXECUTION',
      metric: 'Executive Friction Coefficient',
      summary: 'A protocol engineered around travel, deadlines, dinner meetings, and family life.',
      description: 'The best program on paper is useless if it cannot survive a sudden flight to Tokyo or a week of investor meetings. PrimeLaterFit adapts immediately to real life.',
      executiveTake: 'Never "fall off the wagon" again because the system bends with your schedule.',
      kpis: ['Hotel gym adaptation protocols', 'Weekly minimum effective dose lock', 'Zero-friction habit reinforcement'],
    },
  ];

  const [activePillar, setActivePillar] = useState<PillarItem>(pillars[0]);

  const icons = {
    strength: Dumbbell,
    conditioning: Activity,
    mobility: Compass,
    'body-comp': Flame,
    recovery: Moon,
    consistency: CalendarCheck,
  };

  return (
    <section id="how-it-works" className="py-24 bg-prime-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-3">
            <div className="inline-block text-xs font-mono tracking-widest text-gold-400 uppercase">
              MULTIDIMENSIONAL ASSESSMENT
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              PERFORMANCE OVER <span className="gold-gradient-text">THE SCALE.</span>
            </h2>
            <p className="text-prime-300 text-base sm:text-lg leading-relaxed">
              The fitness industry fixates on bathroom scale weight. We measure progress through six interconnected pillars of genuine physical capability.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Pillars Interactive Matrix */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pillar Selector Cards (Left 5 Cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {pillars.map((pillar) => {
                  const Icon = icons[pillar.id as keyof typeof icons] || Activity;
                  const isActive = activePillar.id === pillar.id;

                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(pillar)}
                      className={`text-left p-4 sm:p-5 rounded-sm border transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? 'bg-prime-900 border-gold-500/80 shadow-md shadow-gold-500/10'
                          : 'bg-prime-950/60 border-white/5 hover:border-white/15 hover:bg-prime-900/40'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`p-2.5 rounded-sm transition-colors ${
                            isActive
                              ? 'bg-gold-500 text-prime-950 font-bold'
                              : 'bg-prime-850 text-prime-300'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider block text-white">
                            {pillar.title}
                          </span>
                          <span className="text-[11px] font-mono text-prime-400 block mt-0.5">
                            {pillar.metric}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isActive ? 'text-gold-500 translate-x-1' : 'text-prime-500'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Active Pillar Deep-Dive Detail Card (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={250}>
              <div className="bg-prime-900/90 rounded-sm border border-gold-500/30 p-7 sm:p-9 shadow-2xl relative overflow-hidden">
            {/* Background gold watermarking */}
            <div className="absolute top-0 right-0 p-8 text-8xl font-black font-display text-white/[0.02] select-none pointer-events-none">
              {activePillar.title}
            </div>

            <div className="relative space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">
                  Pillar Architecture &bull; {activePillar.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                  {activePillar.title}
                </h3>
              </div>

              <p className="text-base text-prime-200 leading-relaxed font-medium">
                {activePillar.summary}
              </p>

              <div className="p-4 rounded-sm bg-prime-950/80 border border-white/8 space-y-2">
                <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider block font-bold">
                  The Executive Reality
                </span>
                <p className="text-sm text-prime-300 leading-relaxed">
                  {activePillar.executiveTake}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-prime-400 leading-relaxed">
                {activePillar.description}
              </p>

              {/* Key Diagnostic KPIs */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono text-prime-300 uppercase tracking-widest block">
                  Diagnostic Measurements
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activePillar.kpis.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-sm bg-prime-950 border border-white/5 text-xs text-prime-200 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </ScrollReveal>
        </div>

        </div>

      </div>
    </section>
  );
};
