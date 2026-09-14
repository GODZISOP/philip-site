import React, { useState } from 'react';
import { Logo } from './Logo';
import { Check, Copy, Download, Smartphone, Shirt, Layers, Sun, Moon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const LogoSuiteSection: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>('dark');
  const [copied, setCopied] = useState(false);

  const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 70" fill="none">
  <!-- PrimeLaterFit Primary Brand Logo -->
  <g transform="translate(6, 4) scale(0.68)">
    <rect x="18" y="14" width="13" height="72" rx="2" fill="${activeTheme === 'light' ? '#0B0D10' : '#F4F5F7'}" />
    <path d="M 31 14 L 64 14 C 78 14 87 23 87 36 C 87 48 78 56 65 57 L 80 86 L 63 86 L 49 57 L 31 57 Z" fill="#C5A059" />
    <path d="M 31 26 L 60 26 C 68 26 73 30 73 35.5 C 73 41 68 45 60 45 L 31 45 Z" fill="${activeTheme === 'light' ? '#FFFFFF' : '#0B0D10'}" />
    <polygon points="76,14 90,14 83,23" fill="#C5A059" />
  </g>
  <text x="82" y="47" font-family="'Outfit', sans-serif" font-size="31" font-weight="800" letter-spacing="0.14em" fill="${activeTheme === 'light' ? '#0B0D10' : '#F4F5F7'}">
    PRIME<tspan fill="#C5A059">LATER</tspan>FIT
  </text>
  <text x="444" y="30" font-family="sans-serif" font-size="11" font-weight="700" fill="#C5A059">TM</text>
</svg>`;

  const handleCopySvg = () => {
    navigator.clipboard.writeText(svgCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `primelaterfit-logo-${activeTheme}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPng = () => {
    const img = new Image();
    const svgBlob = new Blob([svgCode], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1840;
      canvas.height = 280;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        if (activeTheme === 'dark') {
          ctx.fillStyle = '#0B0D10';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const pngUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = pngUrl;
        a.download = `primelaterfit-logo-${activeTheme}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <section id="brand-suite" className="py-24 bg-prime-950 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-block text-xs font-mono tracking-widest text-gold-400 uppercase">
                OFFICIAL BRAND IDENTITY DELIVERABLE
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
                THE <span className="gold-gradient-text">PRIMELATERFIT™</span> LOGO SUITE.
              </h2>
              <p className="text-prime-300 text-sm sm:text-base leading-relaxed">
                Engineered with mathematical precision. Grounded spine representing disciplined foundation, forward-ascending loop representing continuing prime. Designed for apparel, luxury goods, digital apps, and print.
              </p>
            </div>

            {/* Theme & Actions Toolbar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="p-1 rounded-sm bg-prime-900 border border-white/10 flex items-center">
                <button
                  onClick={() => setActiveTheme('dark')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono font-bold transition-all ${
                    activeTheme === 'dark'
                      ? 'bg-prime-800 text-gold-400 shadow'
                      : 'text-prime-400 hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>DARK</span>
                </button>
                <button
                  onClick={() => setActiveTheme('light')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono font-bold transition-all ${
                    activeTheme === 'light'
                      ? 'bg-white text-prime-950 shadow'
                      : 'text-prime-400 hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>LIGHT</span>
                </button>
              </div>

              <button
                onClick={handleCopySvg}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-prime-900 hover:bg-prime-850 border border-white/10 text-xs font-mono text-white transition-all hover:border-gold-500/40"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-gold-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED SVG' : 'COPY SVG'}</span>
              </button>

              <button
                onClick={handleDownloadSvg}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-prime-900 hover:bg-prime-850 border border-white/10 text-xs font-mono text-white transition-all hover:border-gold-500/40"
              >
                <Download className="w-3.5 h-3.5" />
                <span>SVG</span>
              </button>

              <button
                onClick={handleDownloadPng}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-gold-500 hover:bg-gold-400 text-xs font-mono font-bold text-prime-950 transition-all shadow-sm hover:shadow-gold-glow"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD PNG (2000px)</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Live Logo Variants Grid (Staggered Scroll Animation) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Primary Full Wordmark Lockup */}
          <ScrollReveal direction="up" delay={100} className="h-full">
            <div
              className={`p-8 rounded-sm border transition-all duration-300 flex flex-col justify-between h-72 executive-card-hover group ${
                activeTheme === 'light'
                  ? 'bg-[#F4F5F7] border-gray-300 shadow-xl'
                  : 'bg-prime-900/80 border-white/10 shadow-2xl'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase">
                <span className={activeTheme === 'light' ? 'text-gray-500' : 'text-prime-400'}>
                  01 &bull; PRIMARY WORDMARK
                </span>
                <span className="text-gold-500 font-bold">HORIZONTAL</span>
              </div>

              <div className="py-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Logo variant="full" theme={activeTheme} size="lg" />
              </div>

              <div className={`text-[10px] font-mono ${activeTheme === 'light' ? 'text-gray-500' : 'text-prime-500'}`}>
                Website Header / Executive Presentations / Signage
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Standalone Vector Progression Icon */}
          <ScrollReveal direction="up" delay={200} className="h-full">
            <div
              className={`p-8 rounded-sm border transition-all duration-300 flex flex-col justify-between h-72 executive-card-hover group ${
                activeTheme === 'light'
                  ? 'bg-[#F4F5F7] border-gray-300 shadow-xl'
                  : 'bg-prime-900/80 border-white/10 shadow-2xl'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase">
                <span className={activeTheme === 'light' ? 'text-gray-500' : 'text-prime-400'}>
                  02 &bull; STANDALONE SYMBOL
                </span>
                <span className="text-gold-500 font-bold">VECTOR P</span>
              </div>

              <div className="py-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Logo variant="mark" theme={activeTheme} size="xl" />
              </div>

              <div className={`text-[10px] font-mono ${activeTheme === 'light' ? 'text-gray-500' : 'text-prime-500'}`}>
                Apparel Embroidery / Watermark / Future App Icon
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Minimal Compact Wordmark */}
          <ScrollReveal direction="up" delay={300} className="h-full">
            <div
              className={`p-8 rounded-sm border transition-all duration-300 flex flex-col justify-between h-72 executive-card-hover group ${
                activeTheme === 'light'
                  ? 'bg-[#F4F5F7] border-gray-300 shadow-xl'
                  : 'bg-prime-900/80 border-white/10 shadow-2xl'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase">
                <span className={activeTheme === 'light' ? 'text-gray-500' : 'text-prime-400'}>
                  03 &bull; COMPACT WORDMARK
                </span>
                <span className="text-gold-500 font-bold">MONOSPACE</span>
              </div>

              <div className="py-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Logo variant="wordmark" theme={activeTheme} className="text-xl sm:text-2xl" />
              </div>

              <div className={`text-[10px] font-mono ${activeTheme === 'light' ? 'text-gray-500' : 'text-prime-500'}`}>
                PDF Reports / Legal Documents / Social Media Banner
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Real-World Application Mockup Showcase (Staggered entrance) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Mockup 1: Mobile App Icon Preview */}
          <ScrollReveal direction="up" delay={150} className="h-full">
            <div className="p-7 rounded-sm bg-prime-900 border border-white/10 flex items-center gap-6 h-full executive-card-hover group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-prime-850 via-prime-900 to-prime-950 border border-gold-500/40 shadow-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-gold-glow">
                <Logo variant="mark" theme="dark" size="lg" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-gold-400 text-xs font-mono font-bold">
                  <Smartphone className="w-4 h-4" />
                  <span>FUTURE APP ICON ARCHITECTURE</span>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  PrimeLaterFit iOS / Android Icon
                </h4>
                <p className="text-xs text-prime-400 leading-relaxed">
                  Engineered for immediate recognition in the dock alongside elite tools like Oura, Whoop, and Apple Health.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Mockup 2: Performance Apparel Monogram Preview */}
          <ScrollReveal direction="up" delay={250} className="h-full">
            <div className="p-7 rounded-sm bg-prime-900 border border-white/10 flex items-center gap-6 h-full executive-card-hover group">
              <div className="w-20 h-20 rounded-sm bg-[#121418] border border-white/5 shadow-inner flex items-center justify-center shrink-0 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-[radial-gradient(#262a34_1px,transparent_1px)] [background-size:6px_6px] opacity-40" />
                <Logo variant="mark" theme="dark" size="md" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-gold-400 text-xs font-mono font-bold">
                  <Shirt className="w-4 h-4" />
                  <span>TACTICAL APPAREL & MERCHANDISE</span>
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Muted Gold Embroidery Mark
                </h4>
                <p className="text-xs text-prime-400 leading-relaxed">
                  Tested for single-color dark thread embroidery on performance hoodies, caps, and technical merino gym apparel.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
