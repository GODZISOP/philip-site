import React, { useState } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  ShieldCheck,
  Award,
  Sparkles,
  Zap,
  X
} from 'lucide-react';
import { AssessmentResult } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface PerformanceAgeAssessmentProps {
  isModal?: boolean;
  onClose?: () => void;
  onApplyForPrime12?: () => void;
}

export const PerformanceAgeAssessment: React.FC<PerformanceAgeAssessmentProps> = ({
  isModal = false,
  onClose,
  onApplyForPrime12,
}) => {
  const [step, setStep] = useState(1);
  const [chronologicalAge, setChronologicalAge] = useState(48);
  const [role, setRole] = useState('Executive / Entrepreneur');
  const [strengthLevel, setStrengthLevel] = useState('Moderate (Noticeable loss from peak)');
  const [recoveryQuality, setRecoveryQuality] = useState('Fragmented sleep / 3 PM energy drop');
  const [travelBurden, setTravelBurden] = useState('Frequent (1-2 trips per month)');
  const [primaryGoal, setPrimaryGoal] = useState('Build athletic strength & drop visceral fat');

  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const calculatePerformanceAge = () => {
    let delta = 0;

    // Age delta calculations based on executive biomarkers
    if (strengthLevel.includes('Significant joint aches')) delta += 6;
    else if (strengthLevel.includes('Noticeable loss')) delta += 3;
    else if (strengthLevel.includes('Strong')) delta -= 3;

    if (recoveryQuality.includes('Exhausted')) delta += 5;
    else if (recoveryQuality.includes('Fragmented')) delta += 3;
    else if (recoveryQuality.includes('High energy')) delta -= 4;

    if (travelBurden.includes('Heavy')) delta += 3;
    else if (travelBurden.includes('Frequent')) delta += 1;
    else if (travelBurden.includes('Minimal')) delta -= 1;

    const calculatedPerfAge = Math.max(30, chronologicalAge + delta);

    let tier: AssessmentResult['tier'] = 'High Potential';
    if (delta >= 6) tier = 'Accelerated Decline';
    else if (delta >= 2) tier = 'Average Baseline';
    else if (delta <= -2) tier = 'Optimal Prime';

    const calculatedResult: AssessmentResult = {
      chronologicalAge,
      performanceAge: calculatedPerfAge,
      tier,
      summary:
        delta > 0
          ? `Your physiological and recovery markers indicate that your body is currently operating at a Performance Age of ${calculatedPerfAge} (${delta} years older than your chronological age). This is not irreversible aging—it is an outdated 25-year-old training and recovery strategy that no longer matches your career demands.`
          : `Your baseline is commendable, but you have substantial untapped headroom to lock in a true athletic prime for the next two decades.`,
      pillarScores: {
        strength: delta > 2 ? 62 : 82,
        recovery: delta > 2 ? 54 : 78,
        conditioning: delta > 2 ? 58 : 80,
        mobility: delta > 2 ? 65 : 75,
        consistency: delta > 2 ? 59 : 85,
      },
      recommendations: [
        'Shift from 90-minute junk volume to 45-minute high-density eccentric strength sessions.',
        'Implement Zone 2 mitochondrial conditioning to clear metabolic waste without raising joint inflammation.',
        'Incorporate travel-proof circadian and protein distribution protocols during executive flights.',
        'Weekly biometric check-in with a human coach to continuously adjust recovery and volume.',
      ],
    };

    setResult(calculatedResult);
    setStep(5); // Go to results view
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      id="assessment"
      className={`${
        isModal
          ? 'fixed inset-0 z-50 overflow-y-auto bg-prime-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6'
          : 'py-20 bg-prime-900/90 relative border-t border-b border-white/5'
      }`}
    >
      <ScrollReveal direction="up" className="max-w-4xl w-full mx-auto">
        <div className="w-full bg-prime-950 border border-gold-500/40 rounded-sm shadow-2xl p-6 sm:p-10 relative">
        
        {/* Modal Close button */}
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-prime-400 hover:text-white rounded-full bg-prime-900 border border-white/10"
            aria-label="Close Assessment"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Progress header */}
        <div className="space-y-2 pb-6 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-mono tracking-widest uppercase font-bold">
              <Activity className="w-4 h-4" />
              <span>PERFORMANCE AGE™ DIAGNOSTIC ENGINE</span>
            </div>
            <span className="text-xs font-mono text-prime-400">
              STEP {step} OF 5
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-prime-900 h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Chronological Baseline */}
        {step === 1 && (
          <div className="py-8 space-y-6 animate-in fade-in duration-300">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                Establish Your Baseline
              </h3>
              <p className="text-xs sm:text-sm text-prime-300">
                PrimeLaterFit is engineered for ambitious men and women 40–60. Enter your chronological age to begin.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-gold-400 uppercase tracking-wider block mb-2 font-bold">
                  Chronological Age: <span className="text-white text-lg font-display">{chronologicalAge}</span>
                </label>
                <input
                  type="range"
                  min="38"
                  max="70"
                  value={chronologicalAge}
                  onChange={(e) => setChronologicalAge(Number(e.target.value))}
                  className="w-full h-2 bg-prime-850 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-prime-500 mt-1">
                  <span>38</span>
                  <span>45</span>
                  <span>50</span>
                  <span>55</span>
                  <span>60+</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-prime-300 uppercase tracking-wider block mb-2">
                  Executive / Professional Role
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Executive / C-Suite',
                    'Founder / Entrepreneur',
                    'Business Owner / Leader',
                    'Former High-Level Athlete',
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setRole(item)}
                      className={`p-3.5 text-left rounded-sm border text-xs font-semibold tracking-wide transition-all ${
                        role === item
                          ? 'bg-prime-900 border-gold-500 text-white shadow-md'
                          : 'bg-prime-900/40 border-white/5 text-prime-300 hover:border-white/20'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Strength & Physical Joint Sensation */}
        {step === 2 && (
          <div className="py-8 space-y-6 animate-in fade-in duration-300">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                Strength & Joint Capacity
              </h3>
              <p className="text-xs sm:text-sm text-prime-300">
                How does your physical structure feel when lifting or moving through daily life?
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: 'Noticeable loss from peak',
                  desc: 'Used to feel athletic, but strength and physical confidence have slipped in the last 5-10 years.',
                },
                {
                  label: 'Significant joint aches / nagging stiffness',
                  desc: 'Lower back stiffness in the mornings, shoulder or knee pain preventing heavy training.',
                },
                {
                  label: 'Active, but plateaued',
                  desc: 'Working out regularly, but body composition and strength refuse to change.',
                },
                {
                  label: 'Strong & capable, seeking longevity',
                  desc: 'Solid foundation, looking for an elite protocol to sustain performance for decades.',
                },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setStrengthLevel(opt.label)}
                  className={`w-full p-4 text-left rounded-sm border text-xs transition-all ${
                    strengthLevel === opt.label
                      ? 'bg-prime-900 border-gold-500 text-white shadow-md'
                      : 'bg-prime-900/40 border-white/5 text-prime-300 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-white text-sm uppercase font-display">
                    {opt.label}
                  </div>
                  <div className="text-prime-400 mt-1 text-xs">{opt.desc}</div>
                </button>
              ))}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center px-4 py-3 text-xs font-mono uppercase text-prime-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Energy, Sleep & Afternoon Slump */}
        {step === 3 && (
          <div className="py-8 space-y-6 animate-in fade-in duration-300">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                Energy Architecture & Recovery
              </h3>
              <p className="text-xs sm:text-sm text-prime-300">
                True performance is governed by autonomic recovery and consistent cognitive stamina.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: 'Fragmented sleep / 3 PM energy drop',
                  desc: 'Wake up unrefreshed, hit a severe mental dip mid-afternoon, relying heavily on caffeine.',
                },
                {
                  label: 'Chronic high stress / wired at night',
                  desc: 'Mind racing with business decisions, high cortisol, difficulty winding down.',
                },
                {
                  label: 'Exhausted after workouts',
                  desc: 'Sessions wipe you out for the entire workday instead of energizing you.',
                },
                {
                  label: 'Consistent high energy & deep sleep',
                  desc: 'Waking up clear-headed with sustained focus through evening dinner meetings.',
                },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setRecoveryQuality(opt.label)}
                  className={`w-full p-4 text-left rounded-sm border text-xs transition-all ${
                    recoveryQuality === opt.label
                      ? 'bg-prime-900 border-gold-500 text-white shadow-md'
                      : 'bg-prime-900/40 border-white/5 text-prime-300 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-white text-sm uppercase font-display">
                    {opt.label}
                  </div>
                  <div className="text-prime-400 mt-1 text-xs">{opt.desc}</div>
                </button>
              ))}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center px-4 py-3 text-xs font-mono uppercase text-prime-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setStep(4)}
                className="inline-flex items-center px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Executive Friction & Travel */}
        {step === 4 && (
          <div className="py-8 space-y-6 animate-in fade-in duration-300">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                Calendar Demands & Travel
              </h3>
              <p className="text-xs sm:text-sm text-prime-300">
                A program that cannot withstand business travel and unpredictable board meetings is doomed to fail.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: 'Heavy Travel (Weekly flights & hotels)',
                  desc: 'Constant time-zone shifts, hotel gyms, and mandatory client dinners.',
                },
                {
                  label: 'Frequent (1-2 trips per month)',
                  desc: 'Regular business travel disrupting workout momentum and diet.',
                },
                {
                  label: 'Demanding local executive schedule',
                  desc: 'Rarely travel, but work 55+ hours weekly with unpredictable family obligations.',
                },
                {
                  label: 'Flexible calendar',
                  desc: 'Full control over daily timing and dedicated private gym access.',
                },
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setTravelBurden(opt.label)}
                  className={`w-full p-4 text-left rounded-sm border text-xs transition-all ${
                    travelBurden === opt.label
                      ? 'bg-prime-900 border-gold-500 text-white shadow-md'
                      : 'bg-prime-900/40 border-white/5 text-prime-300 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-white text-sm uppercase font-display">
                    {opt.label}
                  </div>
                  <div className="text-prime-400 mt-1 text-xs">{opt.desc}</div>
                </button>
              ))}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center px-4 py-3 text-xs font-mono uppercase text-prime-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span>Back</span>
              </button>
              <button
                onClick={calculatePerformanceAge}
                className="inline-flex items-center px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm transition-all shadow-lg hover:shadow-gold-glow"
              >
                <span>Calculate Performance Age™</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Complete Diagnostic Report & Lead Generation */}
        {step === 5 && result && (
          <div className="py-6 space-y-8 animate-in zoom-in-95 duration-400">
            
            {/* Score Comparison Display */}
            <div className="p-6 sm:p-8 rounded-sm bg-prime-900 border border-gold-500/40 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Chronological vs Performance Age */}
                <div className="md:col-span-6 space-y-3">
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block font-bold">
                    OFFICIAL DIAGNOSTIC VERDICT
                  </span>
                  <div className="flex items-baseline gap-4">
                    <div>
                      <div className="text-4xl sm:text-6xl font-black font-display text-white">
                        {result.performanceAge}
                      </div>
                      <div className="text-[11px] font-mono text-gold-400 uppercase">
                        PERFORMANCE AGE™
                      </div>
                    </div>
                    <div className="text-2xl font-light text-prime-500">vs</div>
                    <div>
                      <div className="text-3xl sm:text-5xl font-extrabold font-display text-prime-400">
                        {result.chronologicalAge}
                      </div>
                      <div className="text-[11px] font-mono text-prime-500 uppercase">
                        CHRONOLOGICAL
                      </div>
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 rounded bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase">
                    Status: {result.tier}
                  </div>
                </div>

                {/* Score Summary */}
                <div className="md:col-span-6 space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                  <p className="text-xs sm:text-sm text-prime-200 leading-relaxed font-medium">
                    {result.summary}
                  </p>
                </div>

              </div>
            </div>

            {/* 6 Pillars Breakdown Bar */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-prime-400 uppercase tracking-widest block font-bold">
                Pillar Health Breakdown
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {Object.entries(result.pillarScores).map(([key, score]) => (
                  <div key={key} className="p-3 rounded-sm bg-prime-900 border border-white/5 space-y-1">
                    <div className="text-[11px] font-mono uppercase text-prime-400">
                      {key}
                    </div>
                    <div className="text-xl font-bold font-display text-white">
                      {score}%
                    </div>
                    <div className="w-full bg-prime-800 h-1 rounded-full overflow-hidden">
                      <div
                        className="bg-gold-500 h-full"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Capture Form to Receive Full Dossier & Apply */}
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmitLead}
                className="p-6 sm:p-8 rounded-sm bg-prime-900/60 border border-white/10 space-y-5"
              >
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-tight">
                    Apply For The Prime 12™ Protocol
                  </h4>
                  <p className="text-xs text-prime-300">
                    Receive your comprehensive Performance Age™ diagnostic report and reserve an intake audit with Philip.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="px-4 py-3 rounded-sm bg-prime-950 border border-white/10 text-white text-xs placeholder:text-prime-500 focus:outline-none focus:border-gold-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Executive Email"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    className="px-4 py-3 rounded-sm bg-prime-950 border border-white/10 text-white text-xs placeholder:text-prime-500 focus:outline-none focus:border-gold-500"
                  />
                  <input
                    type="tel"
                    placeholder="Direct Phone / WhatsApp"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="px-4 py-3 rounded-sm bg-prime-950 border border-white/10 text-white text-xs placeholder:text-prime-500 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] font-mono text-prime-400">
                    Strict confidentiality guaranteed. We never spam.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-prime-950 bg-gold-500 hover:bg-gold-400 rounded-sm shadow-md hover:shadow-gold-glow transition-all"
                  >
                    <span>CLAIM AUDIT & PROTOCOL</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 rounded-sm bg-prime-900 border border-gold-500/60 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold text-white uppercase">
                  Assessment Dossier Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-prime-200 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-bold">{leadName}</span>. Your Performance Age™ profile has been securely registered. Philip and the executive coaching desk will review your diagnostic markers and reach out within 24 hours.
                </p>
                {onApplyForPrime12 && (
                  <button
                    onClick={onApplyForPrime12}
                    className="inline-flex items-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-prime-950 bg-gold-500 rounded-sm"
                  >
                    Explore Prime 12 Details
                  </button>
                )}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
