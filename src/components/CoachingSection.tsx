import React from 'react';
import { Cpu, UserCheck, Check, ArrowRight } from 'lucide-react';

export const CoachingSection: React.FC = () => {
  const techPoints = [
    { title: 'Workouts Delivery', desc: 'Precise exercise sequencing, video cues, and rest interval execution.' },
    { title: 'Biometric Tracking', desc: 'Continuous sync with smart wearables, HRV, step counts, and sleep stages.' },
    { title: 'Seamless Check-ins', desc: 'Asynchronous logs, weekly visual audits, and effortless weight/trend records.' },
    { title: 'Progress Data', desc: 'Interactive charts mapping strength volume, density metrics, and recovery curves.' },
    { title: 'Direct Communication', desc: 'Encrypted 1:1 message stream directly in your pocket at all times.' },
  ];

  const coachPoints = [
    { title: 'Human Judgment', desc: 'Interpreting nuance that algorithms miss—high work stress, sickness, or travel exhaustion.' },
    { title: 'Dynamic Adjustments', desc: 'Real-time pivot of exercises when a shoulder acts up or hotel equipment is limited.' },
    { title: 'Executive Accountability', desc: 'A dedicated partner who holds you to your highest standard without empty hype.' },
    { title: 'True Personalization', desc: 'Tailoring intensity, volume, and lifestyle strategies to your specific biology and career.' },
    { title: 'Long-term Strategy', desc: 'Steering the macro view for the next 10, 20, and 30 years of your physical prime.' },
  ];

  return (
    <section className="py-24 bg-prime-900/60 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-block text-xs font-mono tracking-widest text-gold-400 uppercase">
            THE COACHING PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase leading-tight">
            TECHNOLOGY DELIVERS THE PLAN. <br />
            <span className="gold-gradient-text">YOUR COACH MAKES THE DECISIONS.</span>
          </h2>
          <p className="text-prime-300 text-base sm:text-lg leading-relaxed">
            Apps don't build champions, and spreadsheets don't hold you accountable. PrimeLaterFit unites frictionless software with seasoned human executive mentorship.
          </p>
        </div>

        {/* Dual Architecture Comparison */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: The Technology */}
          <div className="p-8 rounded-sm bg-prime-950 border border-white/8 space-y-6">
            <div className="flex items-center gap-3.5 pb-4 border-b border-white/5">
              <div className="p-3 rounded-sm bg-prime-850 text-prime-300 border border-white/5">
                <Cpu className="w-6 h-6 text-prime-300" />
              </div>
              <div>
                <span className="text-xs font-mono text-prime-400 uppercase tracking-widest block">
                  The Platform
                </span>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">
                  What Technology Provides
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {techPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-prime-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-prime-300" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      {item.title}
                    </span>
                    <span className="text-xs text-prime-400 leading-relaxed block mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 text-xs font-mono text-prime-400">
              ROLE: Zero-friction friction-free infrastructure and data collection.
            </div>
          </div>

          {/* Right Column: The Human Coach */}
          <div className="p-8 rounded-sm bg-prime-950 border border-gold-500/40 shadow-xl shadow-gold-500/5 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3.5 pb-4 border-b border-white/5">
              <div className="p-3 rounded-sm bg-gold-500 text-prime-950 font-bold">
                <UserCheck className="w-6 h-6 text-prime-950" />
              </div>
              <div>
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block font-bold">
                  The Master Key
                </span>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">
                  What Your Coach Provides
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {coachPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      {item.title}
                    </span>
                    <span className="text-xs text-prime-300 leading-relaxed block mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 text-xs font-mono text-gold-400 font-semibold">
              ROLE: Critical strategic judgment, psychological mastery, and accountability.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
