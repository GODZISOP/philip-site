import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Calendar, UserCheck } from 'lucide-react';

interface Prime12ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Prime12Modal: React.FC<Prime12ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-prime-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="max-w-4xl w-full mx-auto bg-prime-950 border border-gold-500/40 rounded-sm shadow-2xl p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-prime-400 hover:text-white rounded-full bg-prime-900 border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-8">
            
            {/* Header */}
            <div className="space-y-2 border-b border-white/10 pb-5">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold">
                PRIME 12™ PROTOCOL APPLICATION
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
                12 Weeks to Your <span className="gold-gradient-text">Next Prime.</span>
              </h3>
              <p className="text-xs sm:text-sm text-prime-300 max-w-2xl leading-relaxed">
                A selective 1:1 executive performance engagement with Philip. Capped at 15 active executives per quarter to ensure uncompromising coaching fidelity.
              </p>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-sm bg-prime-900 border border-white/5 space-y-1">
                <div className="text-xs font-mono text-gold-400 flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>DURATION</span>
                </div>
                <div className="text-sm font-bold text-white">12 Weeks Structured</div>
                <div className="text-[11px] text-prime-400">Rebuild &bull; Improve &bull; Maximize</div>
              </div>

              <div className="p-4 rounded-sm bg-prime-900 border border-white/5 space-y-1">
                <div className="text-xs font-mono text-gold-400 flex items-center gap-1.5 font-bold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>COACHING</span>
                </div>
                <div className="text-sm font-bold text-white">Direct 1:1 Access</div>
                <div className="text-[11px] text-prime-400">Led directly by Philip</div>
              </div>

              <div className="p-4 rounded-sm bg-prime-900 border border-white/5 space-y-1">
                <div className="text-xs font-mono text-gold-400 flex items-center gap-1.5 font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>TIME COMMITMENT</span>
                </div>
                <div className="text-sm font-bold text-white">3 x 45-Min / Week</div>
                <div className="text-[11px] text-prime-400">Engineered for busy calendars</div>
              </div>
            </div>

            {/* What is Included List */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-prime-300 uppercase tracking-widest block font-bold">
                Everything Included In The Protocol:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-prime-200">
                {[
                  'Complete Biomechanical & Movement Screen Baseline',
                  'Dynamic Program Adaptive Engine (Home, Hotel, Club Gym)',
                  'Cognitive & Metabolic Nutrient Timing Protocols',
                  'Weekly Asynchronous Video Technique & Load Audits',
                  'Travel & Flight Restoration Emergency Protocols',
                  'Direct Encrypted Communication Stream with Philip',
                  'Autonomic Sleep & HRV Recovery Tracking Sync',
                  'Post-12-Week Permanent Operating System Handoff',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded bg-prime-900/50 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block font-bold">
                CONFIDENTIAL APPLICATION
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-prime-400 block mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-sm bg-prime-900 border border-white/10 text-white text-xs placeholder:text-prime-600 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-prime-400 block mb-1">EXECUTIVE EMAIL</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-sm bg-prime-900 border border-white/10 text-white text-xs placeholder:text-prime-600 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-prime-400 block mb-1">PHONE / WHATSAPP</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-sm bg-prime-900 border border-white/10 text-white text-xs placeholder:text-prime-600 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-prime-400 block mb-1">PROFESSIONAL ROLE</label>
                  <input
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Founder, Partner, Senior Executive"
                    className="w-full px-4 py-3 rounded-sm bg-prime-900 border border-white/10 text-white text-xs placeholder:text-prime-600 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-prime-400 block mb-1">
                  WHAT IS YOUR PRIMARY PHYSICAL OBJECTIVE FOR THE NEXT 12 WEEKS?
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Rebuild athletic power, eliminate chronic joint stiffness, drop 15 lbs of visceral fat without losing muscle..."
                  className="w-full px-4 py-2.5 rounded-sm bg-prime-900 border border-white/10 text-white text-xs placeholder:text-prime-600 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[11px] font-mono text-prime-400">
                  <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Strict confidentiality. No sales pressure.</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm shadow-md hover:shadow-gold-glow transition-all"
                >
                  <span>SUBMIT APPLICATION</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </form>

          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-display font-black text-white uppercase">
              Application Received
            </h4>
            <p className="text-sm text-prime-200 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-bold">{name}</span>. Your Prime 12™ application has been delivered to Philip's private desk. You will receive an initial response within 24 business hours to schedule your strategy interview.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-prime-950 bg-gold-500 rounded-sm font-bold"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
