import React from 'react';
import { ArrowRight, ChevronDown, Award, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onOpenAssessment: () => void;
  onExplorePrime12: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment, onExplorePrime12 }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background ambient luxury lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-gold-500/10 via-gold-500/2 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-prime-800/20 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & Call To Actions */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={100} className="space-y-7 text-left">
              {/* Category Definition Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-[11px] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping" />
              <span>EXECUTIVE PERFORMANCE &bull; LONGEVITY FOR 40+</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight text-white leading-[1.05] uppercase">
              YOUR PRIME <br />
              <span className="gold-gradient-text">STARTS LATER.</span>
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-3 max-w-2xl text-prime-300 text-base sm:text-lg leading-relaxed">
              <p className="font-semibold text-white/95">
                Performance, strength and confidence don't have an expiration date.
              </p>
              <p className="text-prime-400 text-sm sm:text-base leading-relaxed">
                PrimeLaterFit helps ambitious men and women 40+ build their next level of physical
                performance through personalized coaching designed around real life.
              </p>
            </div>

            {/* Core Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenAssessment}
                id="hero-cta-assessment"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm transition-all duration-200 shadow-lg hover:shadow-gold-glow active:scale-95"
              >
                <span>DISCOVER YOUR PERFORMANCE AGE™</span>
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={onExplorePrime12}
                id="hero-cta-prime12"
                className="inline-flex items-center justify-center px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:text-gold-400 bg-prime-900/80 hover:bg-prime-850 border border-white/10 hover:border-gold-500/40 rounded-sm transition-all duration-200"
              >
                <span>EXPLORE PRIME 12™</span>
              </button>
            </div>

            {/* Anti-Generic Fitness Distinctions */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-prime-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Zero Gimmicks / Clichés</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Performance &gt; Scale</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Executive Lifestyle Fit</span>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Founder Authentic Action Visual */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={250}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gold Framing Edge */}
              <div className="absolute -inset-1.5 rounded-sm bg-gradient-to-b from-gold-500/30 via-transparent to-white/5 blur-sm opacity-70" />
              
              {/* Image Container */}
              <div className="relative rounded-sm overflow-hidden border border-white/10 bg-prime-900 aspect-[4/5] shadow-2xl">
                <img
                  src="/images/philip/battle-ropes.png"
                  onError={(e) => {
                    // Fallback to generated hero if not yet copied
                    (e.target as HTMLImageElement).src = '/images/hero.jpg';
                  }}
                  alt="Philip Petracca - Authentic Performance at 50+"
                  className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-prime-950 via-transparent to-transparent opacity-80" />

                {/* Live Performance Credibility Overlay Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-sm bg-prime-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                      FOUNDER &bull; PHILIP PETRACCA
                    </div>
                    <div className="text-xs font-bold text-white tracking-wide mt-0.5">
                      "I've been there. You can accomplish the same."
                    </div>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-gold-500" />
                  </div>
                </div>
              </div>

              {/* Decorative Accent Marks */}
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold-500/60" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold-500/60" />
            </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="max-w-7xl mx-auto px-4 w-full pt-12 flex justify-start">
        <a
          href="#reframe"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-prime-400 hover:text-gold-500 transition-colors"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
