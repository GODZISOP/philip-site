import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface NavbarProps {
  onOpenAssessment: () => void;
  onOpenPrime12: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment, onOpenPrime12 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-prime-950/85 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="group">
          <Logo variant="full" size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-prime-300">
          <a
            href="#home"
            className="hover:text-gold-500 transition-colors py-1"
          >
            HOME
          </a>
          <button
            onClick={onOpenAssessment}
            className="hover:text-gold-500 transition-colors py-1 flex items-center gap-1.5"
          >
            <Activity className="w-3.5 h-3.5 text-gold-500" />
            PERFORMANCE AGE™
          </button>
          <a
            href="#prime12"
            className="hover:text-gold-500 transition-colors py-1"
          >
            PRIME 12™
          </a>
          <a
            href="#how-it-works"
            className="hover:text-gold-500 transition-colors py-1"
          >
            HOW IT WORKS
          </a>
          <a
            href="#about"
            className="hover:text-gold-500 transition-colors py-1"
          >
            ABOUT
          </a>
          <a
            href="#brand-suite"
            className="text-prime-400 hover:text-white transition-colors py-1 text-[11px]"
          >
            BRAND SUITE
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={onOpenAssessment}
            id="nav-cta-assessment"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm transition-all duration-200 shadow-md hover:shadow-gold-glow active:scale-95"
          >
            <span>HOW PRIME ARE YOU?</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-prime-200 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-prime-950/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 text-sm font-semibold tracking-wider text-prime-200 uppercase">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-gold-500 transition-colors border-b border-white/5"
            >
              Home
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="text-left py-2 hover:text-gold-500 transition-colors border-b border-white/5 flex items-center justify-between text-gold-500 font-bold"
            >
              <span>Performance Age™ Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#prime12"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-gold-500 transition-colors border-b border-white/5"
            >
              Prime 12™ Protocol
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-gold-500 transition-colors border-b border-white/5"
            >
              How It Works
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-gold-500 transition-colors border-b border-white/5"
            >
              About Philip
            </a>
            <a
              href="#brand-suite"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-prime-400 hover:text-white transition-colors border-b border-white/5"
            >
              Logo & Brand Assets
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full py-3.5 text-xs font-extrabold uppercase tracking-wider text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm flex items-center justify-center space-x-2 shadow-gold-glow"
            >
              <span>HOW PRIME ARE YOU?</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
