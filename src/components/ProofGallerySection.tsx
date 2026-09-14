import React, { useState } from 'react';
import { ShieldCheck, Award, Zap, CheckCircle2, TrendingUp, Maximize2, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProofGallerySection: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const proofItems = [
    {
      img: '/images/philip/battle-ropes.png',
      title: '01 &bull; Athletic Work Capacity',
      subtitle: 'Conditioning & Power at 50+',
      description: 'High-power output without joint wear-and-tear. Aerobic stamina that powers through 14-hour business days and demanding executive travel.',
      tag: 'CONDITIONING',
    },
    {
      img: '/images/philip/source-brewing.png',
      title: '02 &bull; The Entrepreneur & Athlete',
      subtitle: 'Built While Scaling Companies',
      description: 'Built while launching and operating Source Farmhouse Brewery and scaling multi-million dollar consumer businesses.',
      tag: 'REAL LIFE DEMANDS',
    },
    {
      img: '/images/philip/dumbbell-back.png',
      title: '03 &bull; High-Density Strength',
      subtitle: 'Posterior Chain & Spinal Protection',
      description: 'Dense contractile muscle tissue protecting spinal health and eliminating executive desk posture stiffness.',
      tag: 'STRENGTH',
    },
    {
      img: '/images/philip/back-pose.png',
      title: '04 &bull; Structural Muscle Density',
      subtitle: 'Body Composition & Lat Spread',
      description: 'True athletic muscle retention and visceral fat reduction achieved sustainably through metabolic priming without crash diets.',
      tag: 'BODY COMPOSITION',
    },
    {
      img: '/images/philip/conditioning-legs.png',
      title: '05 &bull; Lower Body Engine',
      subtitle: 'Vascularity & Knee Joint Health',
      description: 'Leg density, tendon integrity, and athletic movement capacity maintained over decades of disciplined training.',
      tag: 'MOBILITY & RECOVERY',
    },
    {
      img: '/images/performance.jpg',
      title: '06 &bull; Biometric Recovery Architecture',
      subtitle: 'HRV & Central Nervous System Sync',
      description: 'Real-time autonomic tracking, sleep architecture analysis, and neural replenishment so every session builds rather than exhausts.',
      tag: 'BIOMETRIC DATA',
    },
  ];

  return (
    <section id="proof-gallery" className="py-24 bg-prime-950 relative border-t border-b border-white/5 overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-block text-xs font-mono tracking-widest text-gold-400 uppercase">
                THE COMPLETE VISUAL PROOF &bull; ALL 6 PILLARS
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
                NOT THEORY. <span className="gold-gradient-text">LIVING PROOF.</span>
              </h2>
              <p className="text-prime-300 text-sm sm:text-base leading-relaxed">
                Anyone can write workouts on paper. Philip demonstrates the real-world standard—balancing companies, leadership, and high-performance physical capability at 50+.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-gold-400 bg-prime-900/80 px-4 py-2.5 rounded-sm border border-gold-500/30 shrink-0">
              <Award className="w-4 h-4 text-gold-500" />
              <span>6/6 BENCHMARK GALLERY</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 Images Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofItems.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up" className="h-full">
              <div
                onClick={() => setActiveModalImage(item.img)}
                className="relative rounded-sm overflow-hidden border border-white/10 bg-prime-900 shadow-2xl group min-h-[380px] h-full flex flex-col justify-end p-6 cursor-pointer executive-card-hover"
              >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center filter contrast-105 brightness-90 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-prime-950 via-prime-950/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

              {/* Click to Expand Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-sm bg-prime-950/80 border border-white/10 text-prime-400 group-hover:text-gold-400 transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Content Card Overlay */}
              <div className="relative z-10 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/40 text-[10px] font-mono font-bold tracking-widest uppercase">
                  {item.tag}
                </span>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-gold-400">
                  {item.subtitle}
                </div>
                <p className="text-xs text-prime-300 leading-relaxed pt-1 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Banner below proof gallery */}
        <div className="mt-12 p-6 rounded-sm bg-prime-900 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-mono text-gold-400 uppercase tracking-wider font-bold">
              AUTHENTIC TRANSPARENCY
            </div>
            <div className="text-sm sm:text-base font-bold text-white">
              "No 20-year-old fitness models. No fake lighting tricks. Real capability at 50+."
            </div>
          </div>
          <a
            href="#assessment"
            className="inline-flex items-center px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm shadow-md transition-all shrink-0"
          >
            DISCOVER YOUR PERFORMANCE AGE™
          </a>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeModalImage && (
        <div
          onClick={() => setActiveModalImage(null)}
          className="fixed inset-0 z-50 bg-prime-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setActiveModalImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-prime-900 border border-white/10 text-white hover:text-gold-400 transition-colors z-10"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-sm border border-gold-500/40 shadow-2xl">
            <img
              src={activeModalImage}
              alt="High Resolution Preview"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};
