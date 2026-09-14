import React from 'react';
import { Clock, Dumbbell, Plane, HeartPulse, Gauge, Award, ShieldAlert, Sliders } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const PersonalizationSection: React.FC = () => {
  const dimensions = [
    {
      title: 'Schedule',
      icon: Clock,
      desc: 'Whether you have 30 minutes between Zoom calls or 60 minutes on Saturday morning, workouts dynamically scale without losing training stimulus.',
    },
    {
      title: 'Training Experience',
      icon: Award,
      desc: 'Calibrated for former college athletes who need smart joint management, or professionals returning to serious training after a 15-year career push.',
    },
    {
      title: 'Equipment',
      icon: Dumbbell,
      desc: 'Full private gym, commercial fitness center, home dumbbells, or minimal hotel gym setup. We build around your exact gear.',
    },
    {
      title: 'Goals',
      icon: Sliders,
      desc: 'Hypertrophy, rotational power for golf, mountain endurance, or dropping 15 lbs of visceral fat while keeping full athletic strength.',
    },
    {
      title: 'Travel',
      icon: Plane,
      desc: 'Cross-country flights and European time zones. On-the-fly hotel protocols, circadian realignment, and dining strategies for business dinners.',
    },
    {
      title: 'Recovery',
      icon: HeartPulse,
      desc: 'Real-time sync with your sleep architecture, HRV trends, and central nervous system readiness. No blind grinding.',
    },
    {
      title: 'Readiness',
      icon: Gauge,
      desc: 'Had 4 hours of fragmented sleep before a board meeting? The session volume auto-adjusts from high-intensity to neural replenishment.',
    },
    {
      title: 'Progress',
      icon: ShieldAlert,
      desc: 'Continuous micro-adjustments every 7 days based on real biomechanical feedback, strength milestones, and visual physique audits.',
    },
  ];

  return (
    <section className="py-24 bg-prime-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-3">
            <div className="inline-block text-xs font-mono tracking-widest text-gold-400 uppercase">
              ADAPTIVE ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              YOUR PROGRAM SHOULD <span className="gold-gradient-text">FIT YOUR LIFE.</span>
            </h2>
            <p className="text-prime-300 text-base sm:text-lg leading-relaxed">
              Generic cookie-cutter templates demand that you fit your life around an arbitrary workout plan. PrimeLaterFit adapts immediately to the reality of your calendar.
            </p>
          </div>
        </ScrollReveal>

        {/* 8 Adaptive Dimensions Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dimensions.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 70} direction="up" className="h-full">
                <div
                  className="p-6 rounded-sm bg-prime-900/60 border border-white/5 hover:border-gold-500/30 transition-all duration-200 executive-card-hover group space-y-4 h-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-sm bg-prime-850 text-gold-400 border border-white/5 group-hover:border-gold-500/30 group-hover:bg-gold-500 group-hover:text-prime-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-prime-500">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-white uppercase tracking-wider font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-prime-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
