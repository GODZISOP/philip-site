import React from 'react';
import { ArrowRight, Shield, Award } from 'lucide-react';

interface FinalCTAProps {
  onOpenAssessment: () => void;
  onExplorePrime12: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAssessment, onExplorePrime12 }) => {
  return (
    <section className="py-28 bg-prime-950 relative overflow-hidden border-t border-white/5">
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-mono uppercase tracking-widest">
          <span>THE DECISION POINT</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tight leading-[1.05]">
          YOUR PRIME ISN'T BEHIND YOU. <br />
          <span className="gold-gradient-text">IT'S WHAT YOU BUILD NEXT.</span>
        </h2>

        <p className="text-prime-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Age is not the limit. Your strategy is. Take the first step by discovering where your physical performance truly stands today.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAssessment}
            className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm shadow-xl hover:shadow-gold-glow transition-all active:scale-95"
          >
            <span>DISCOVER YOUR PERFORMANCE AGE™</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <button
            onClick={onExplorePrime12}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white hover:text-gold-400 bg-prime-900 border border-white/10 hover:border-gold-500/40 rounded-sm transition-all"
          >
            <span>EXPLORE PRIME 12™ PROTOCOL</span>
          </button>
        </div>

        <div className="pt-8 flex items-center justify-center gap-8 text-xs font-mono text-prime-500">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-gold-500" />
            Zero Spam Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-gold-500" />
            Executive Confidentiality
          </span>
        </div>

      </div>
    </section>
  );
};
