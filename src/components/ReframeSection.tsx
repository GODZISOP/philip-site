import React from 'react';
import { Check, X, Clock, Zap, Shield, Target } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ReframeSection: React.FC = () => {
  const comparisons = [
    {
      title: 'Schedule & Time Budget',
      oldWay: '2 hours in the gym, 6 days a week, endless junk volume.',
      primeWay: 'High-density, 45-minute structured sessions designed around executive calendars.',
      icon: Clock,
    },
    {
      title: 'Recovery & Joint Longevity',
      oldWay: 'Pushing through tendonitis, ignoring joint pain to hit ego lifts.',
      primeWay: 'Biomechanical optimization, tissue resiliency, sleep and autonomic recovery tracking.',
      icon: Shield,
    },
    {
      title: 'Metabolic Architecture',
      oldWay: 'Extreme caloric restriction, crash diets, exhaustion-inducing cardio.',
      primeWay: 'Nutrient timing for executive cognitive energy, preserving lean mass and metabolic rate.',
      icon: Zap,
    },
    {
      title: 'Success Metric',
      oldWay: 'Obsession with the bathroom scale; loss of functional power.',
      primeWay: 'True athletic performance, body composition, vitality, stamina, and capability.',
      icon: Target,
    },
  ];

  return (
    <section id="reframe" className="py-24 bg-prime-900/60 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-4">
            <div className="inline-block text-xs font-mono tracking-widest text-gold-400 uppercase">
              THE PARADIGM SHIFT
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              YOU HAVEN'T <span className="gold-gradient-text">PEAKED.</span>
            </h2>
            <p className="text-prime-300 text-lg sm:text-xl font-medium leading-relaxed">
              You may simply be using a strategy that no longer fits your life.
            </p>
            <div className="text-prime-400 text-base leading-relaxed space-y-2 border-l-2 border-gold-500/40 pl-4 py-1">
              <p>The training that worked at 25 may not work at 40.</p>
              <p className="text-white font-medium">Your schedule is different. Your responsibilities are different. Your recovery is different.</p>
              <p className="text-gold-400 font-semibold">Your strategy should be different too.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Strategic Comparison Matrix */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 120} direction="up">
                <div
                  className="rounded-sm bg-prime-950/80 border border-white/8 p-6 sm:p-7 space-y-5 executive-card-hover h-full"
                >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-gold-500/10 border border-gold-500/20 text-gold-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide uppercase font-display">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  {/* The Flawed 25-Year-Old Approach */}
                  <div className="flex items-start gap-3 p-3 rounded bg-red-950/20 border border-red-500/10">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider block font-bold">
                        Conventional Fitness Model
                      </span>
                      <p className="text-xs text-prime-300 mt-0.5 leading-relaxed">
                        {item.oldWay}
                      </p>
                    </div>
                  </div>

                  {/* The PrimeLaterFit Strategic Model */}
                  <div className="flex items-start gap-3 p-3 rounded bg-gold-500/5 border border-gold-500/25">
                    <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono text-gold-400 uppercase tracking-wider block font-bold">
                        PrimeLaterFit™ Strategic Architecture
                      </span>
                      <p className="text-xs text-white mt-0.5 leading-relaxed font-medium">
                        {item.primeWay}
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom takeaway quote */}
        <div className="mt-12 p-6 rounded-sm bg-prime-950 border border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base font-semibold text-prime-200">
            "We don't try to make you 25 again. We build your highest performing, most capable version at 40, 50, and beyond."
          </p>
        </div>

      </div>
    </section>
  );
};
