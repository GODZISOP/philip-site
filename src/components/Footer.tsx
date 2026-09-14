import React from 'react';
import { Logo } from './Logo';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-prime-950 text-prime-400 text-xs border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="full" size="md" />
            <p className="text-prime-400 text-xs leading-relaxed max-w-sm">
              PrimeLaterFit™ is an elite performance and longevity coaching brand helping ambitious men and women 40+ build strength, vitality, body composition, and sustainable physical capability for the second half of life.
            </p>
            <div className="text-[11px] font-mono text-gold-400">
              YOUR PRIME STARTS LATER.
            </div>
          </div>

          {/* Programs & Assessment (Col 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              ENGAGEMENTS
            </div>
            <ul className="space-y-2 text-prime-300">
              <li>
                <a href="#assessment" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>Performance Age™ Audit</span>
                  <ArrowUpRight className="w-3 h-3 text-prime-500" />
                </a>
              </li>
              <li>
                <a href="#prime12" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                  <span>PRIME 12™ Protocol</span>
                  <ArrowUpRight className="w-3 h-3 text-prime-500" />
                </a>
              </li>
              <li>
                <span className="text-prime-500 flex items-center gap-1.5 cursor-not-allowed">
                  <span>PRIME 25™ Membership</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-white/5 text-prime-400">Waitlist</span>
                </span>
              </li>
              <li>
                <span className="text-prime-500 flex items-center gap-1.5 cursor-not-allowed">
                  <span>1:1 Executive Performance</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-white/5 text-prime-400">Private</span>
                </span>
              </li>
              <li>
                <span className="text-prime-500 flex items-center gap-1.5 cursor-not-allowed">
                  <span>Corporate Leadership Offsites</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-white/5 text-prime-400">Q4</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Future Platform Roadmap (Col 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              FUTURE PLATFORM ECOSYSTEM
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-prime-400">
              <span className="p-2 rounded bg-prime-900/60 border border-white/5">PRIME INDEX™</span>
              <span className="p-2 rounded bg-prime-900/60 border border-white/5">Prime Profile™</span>
              <span className="p-2 rounded bg-prime-900/60 border border-white/5">Prime Review™</span>
              <span className="p-2 rounded bg-prime-900/60 border border-white/5">Prime Report™</span>
              <span className="p-2 rounded bg-prime-900/60 border border-white/5">Performance Age™</span>
              <span className="p-2 rounded bg-prime-900/60 border border-white/5">PrimeLaterFit App</span>
            </div>
            <p className="text-[10px] text-prime-500 pt-1">
              Architecture engineered for multi-tier executive digital integration.
            </p>
          </div>

        </div>

        {/* Legal & Trademark Notice */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-prime-500">
          <div>
            &copy; {new Date().getFullYear()} PrimeLaterFit LLC. All rights reserved. PRIMELATERFIT, YOUR PRIME STARTS LATER, PERFORMANCE AGE, and PRIME 12 are trademarks of PrimeLaterFit LLC.
          </div>
          <div className="flex items-center gap-4 text-prime-400">
            <a href="#about" className="hover:text-gold-400 transition-colors">About Philip</a>
            <a href="#brand-suite" className="hover:text-gold-400 transition-colors">Brand Assets</a>
            <a href="#home" className="hover:text-gold-400 transition-colors">Back to Top &uarr;</a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-[10px] text-prime-600 leading-relaxed border-t border-white/5 pt-4">
          Disclaimer: PrimeLaterFit™ provides physical performance, strength, and lifestyle coaching. It does not provide medical diagnosis, clinical treatment, or medical advice. Always consult your qualified physician before undertaking any demanding exercise or nutrition protocol.
        </div>

      </div>
    </footer>
  );
};
