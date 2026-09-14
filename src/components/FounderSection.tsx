import React from 'react';
import { Award, Briefcase, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FounderSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-prime-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-3">
            <div className="inline-block text-xs font-mono tracking-widest text-gold-400 uppercase">
              FOUNDER & ARCHITECT
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
              BUILT FOR THE <span className="gold-gradient-text">NEXT HALF OF LIFE.</span>
            </h2>
            <p className="text-prime-300 text-base sm:text-lg leading-relaxed">
              Not designed by a 23-year-old personal trainer who doesn't understand board meetings, family obligations, or 4 AM flight schedules.
            </p>
          </div>
        </ScrollReveal>

        {/* Founder Story Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Authentic Imagery Grid (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="right" delay={150}>
            
            {/* Primary Image: Philip at Source Brewing gym */}
            <div className="relative rounded-sm overflow-hidden border border-white/10 bg-prime-900 aspect-[4/5] shadow-2xl group">
              <img
                src="/images/philip/source-brewing.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/founder.jpg';
                }}
                alt="Philip Petracca - Founder of Fizzics & Source Brewing"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-prime-950 via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-prime-950/85 backdrop-blur-md border border-white/10">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Philip Petracca
                </div>
                <div className="text-[11px] font-mono text-gold-400 mt-0.5">
                  Founder &bull; Serial Tech & Consumer Entrepreneur
                </div>
              </div>
            </div>

            {/* Credibility Snapshot Strip */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-sm bg-prime-900 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-gold-400 font-mono text-xs font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>SHARK TANK</span>
                </div>
                <div className="text-xs text-white font-bold">$2,000,000 Deal</div>
                <div className="text-[10px] text-prime-400">Mark Cuban & Lori Greiner</div>
              </div>

              <div className="p-4 rounded-sm bg-prime-900 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-gold-400 font-mono text-xs font-bold">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>20+ YEARS</span>
                </div>
                <div className="text-xs text-white font-bold">Tech & Leadership</div>
                <div className="text-[10px] text-prime-400">Fizzics &bull; Source Brewing</div>
              </div>
            </div>

            {/* Secondary Proof Photo Thumbnail */}
            <div className="relative rounded-sm overflow-hidden border border-white/5 bg-prime-900 aspect-[16/9] hidden sm:block">
              <img
                src="/images/philip/dumbbell-back.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/hero.jpg';
                }}
                alt="Philip training in private facility"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
              <div className="absolute bottom-2 left-3 text-[10px] font-mono text-white/80 bg-prime-950/80 px-2 py-0.5 rounded">
                Physical Capability at 50+
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Founder Story Manifesto Text (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={250}>
              <div className="space-y-6 text-prime-300 text-sm sm:text-base leading-relaxed">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-gold-400 tracking-widest uppercase font-bold">
                BUILT BY SOMEONE WHO UNDERSTANDS WHAT YOU’RE UP AGAINST
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                "I've spent my career building companies in demanding, high-performance environments."
              </h3>
            </div>

            <p>
              I spent more than 20 years in technology and senior leadership positions before becoming a serial entrepreneur. I founded <span className="text-white font-semibold">Fizzics</span>, took the company to <span className="text-gold-400 font-semibold">Shark Tank</span>, securing a 2 million dollar deal with <span className="text-white font-semibold">Mark Cuban and Lori Greiner</span>, and built it into a nationally distributed consumer brand. I later founded <span className="text-white font-semibold">Source Brewing</span>, building another successful consumer business from the ground up.
            </p>

            <p className="text-white font-medium italic border-l-2 border-gold-500/50 pl-4 py-1">
              "But PrimeLaterFit™ comes from something much more personal."
            </p>

            <p>
              I understand what happens when you're successful professionally, but your health and fitness must compete with everything else.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2">
              <div className="p-3 rounded-sm bg-prime-900 border border-white/5 text-xs text-prime-200">
                &bull; Your career gets more demanding.
              </div>
              <div className="p-3 rounded-sm bg-prime-900 border border-white/5 text-xs text-prime-200">
                &bull; Your schedule gets harder to control.
              </div>
              <div className="p-3 rounded-sm bg-prime-900 border border-white/5 text-xs text-prime-200">
                &bull; Travel, family and responsibilities add up.
              </div>
            </div>

            <p>
              The strategies that worked when you were 25 don't necessarily work when you're 40 or 50. And yet, most of the fitness industry still treats men and women over 40 like they're simply trying to get their younger bodies back.
            </p>

            <p className="text-white font-semibold text-base sm:text-lg">
              I don't believe that's the goal. The goal is to build a stronger, more capable version of the man or woman you are today.
            </p>

            <p>
              That's why I created PrimeLaterFit. It's a performance-focused approach designed specifically for ambitious men and women over 40 who don't need another generic workout plan. They need a smarter system that fits their lives, adapts as circumstances change, and produces measurable results.
            </p>

            <p>
              We focus on the things that actually matter: <span className="text-gold-400 font-semibold">strength, conditioning, mobility, body composition, recovery and consistency.</span>
            </p>

            <div className="p-6 rounded-sm bg-prime-900 border border-gold-500/30 space-y-2">
              <p className="text-sm font-mono text-gold-400 uppercase tracking-wider font-bold">
                THE PRIMELATERFIT PRINCIPLE
              </p>
              <p className="text-base sm:text-lg font-bold text-white">
                "Because getting older is inevitable. Performing like you're getting older isn't. Your best years aren't necessarily behind you."
              </p>
              <div className="pt-2 text-xl font-display font-black text-gold-400 uppercase tracking-wider">
                YOUR PRIME STARTS LATER.
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
