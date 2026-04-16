import React, { useState } from 'react';
import { PLAYBOOK_URL } from '../App';

const QUESTIONS = [
  {
    id: 1,
    dimension: "Skill Uniqueness",
    warning: null,
    question: "If your company posted your job tomorrow, how long to find someone who could do what you do?",
    options: [
      { label: "A few days — my skills are common.", value: 1 },
      { label: "A few weeks — decent supply but needs onboarding.", value: 2 },
      { label: "A few months — my combination is harder to find.", value: 3 },
      { label: "Six months or more — what I do is genuinely rare.", value: 4 },
    ]
  },
  {
    id: 2,
    dimension: "Operational Visibility",
    warning: "Most people overestimate this one.",
    question: "When your name comes up in a leadership meeting you're not in, what are they most likely saying?",
    options: [
      { label: "I'm not sure my name comes up at all.", value: 1 },
      { label: "My manager knows my work but I'm invisible above that.", value: 2 },
      { label: "A few senior people know what I contribute.", value: 3 },
      { label: "Leadership regularly references my work or relies on my input.", value: 4 },
    ]
  },
  {
    id: 3,
    dimension: "Revenue Proximity",
    warning: null,
    question: "How directly does your work connect to money coming into the company?",
    options: [
      { label: "Several steps removed — I support people who support revenue.", value: 1 },
      { label: "I indirectly enable revenue but it's hard to quantify.", value: 2 },
      { label: "I can draw a clear line between my work and business outcomes.", value: 3 },
      { label: "I'm directly responsible for revenue or critical operations.", value: 4 },
    ]
  },
  {
    id: 4,
    dimension: "Replacement Ease",
    warning: "This is the one that surprises people most.",
    question: "If you gave notice today, how disrupted would your team be at the 90-day mark?",
    options: [
      { label: "Barely — someone would absorb my work within days.", value: 1 },
      { label: "Some disruption, but fine within a month.", value: 2 },
      { label: "Real gaps — it would take 2-3 months to stabilize.", value: 3 },
      { label: "Significant damage — projects and systems would break.", value: 4 },
    ]
  },
  {
    id: 5,
    dimension: "Institutional Knowledge",
    warning: null,
    question: "How much of what you know lives only in your head — context, relationships, history not written down anywhere?",
    options: [
      { label: "Very little — everything is documented or easily transferred.", value: 1 },
      { label: "Some things, but a capable person could ramp up quickly.", value: 2 },
      { label: "Quite a bit — context that would take months to rebuild.", value: 3 },
      { label: "An enormous amount — I am the institutional memory.", value: 4 },
    ]
  },
  {
    id: 6,
    dimension: "Cross-Team Dependency",
    warning: null,
    question: "How many teams or workflows would slow down if your role disappeared tomorrow?",
    options: [
      { label: "None — my work is self-contained.", value: 1 },
      { label: "One or two teams would feel it.", value: 2 },
      { label: "Multiple teams depend on me to function properly.", value: 3 },
      { label: "I'm embedded in critical cross-functional workflows.", value: 4 },
    ]
  },
  {
    id: 7,
    dimension: "Leadership Perception",
    warning: "Most people are more invisible than they think.",
    question: "During the last reorg or budget cut at your company, how confident were you that your role was protected?",
    options: [
      { label: "I was genuinely worried. I didn't feel secure.", value: 1 },
      { label: "Uncertain — I hoped for the best but didn't really know.", value: 2 },
      { label: "Fairly confident — my contributions felt visible.", value: 3 },
      { label: "Very confident — leadership clearly saw my value.", value: 4 },
    ]
  },
  {
    id: 8,
    dimension: "Career Positioning",
    warning: null,
    question: "In the past 6 months, have you proactively made your value visible above your direct manager?",
    options: [
      { label: "No — I focus on my work and assume it speaks for itself.", value: 1 },
      { label: "Not really — I've thought about it but haven't done it.", value: 2 },
      { label: "A few times — I've shared wins or updates upward.", value: 3 },
      { label: "Regularly — I have an intentional visibility strategy.", value: 4 },
    ]
  },
  {
    id: 9,
    dimension: "Role Criticality",
    warning: "This reveals whether your role is seen as 'cost' or 'investment'.",
    question: "If leadership had to cut 15% of headcount tomorrow, how would your role be categorized?",
    options: [
      { label: "High risk — support function with unclear ROI.", value: 1 },
      { label: "Uncertain — depends who's making the decision.", value: 2 },
      { label: "Probably safe — my role has clear operational value.", value: 3 },
      { label: "Protected — tied to something the company can't lose.", value: 4 },
    ]
  },
  {
    id: 10,
    dimension: "Future Positioning",
    warning: null,
    question: "Over the next 12 months, is your role becoming more or less critical to how your company operates?",
    options: [
      { label: "Less critical — being automated or deprioritized.", value: 1 },
      { label: "About the same — not growing in strategic importance.", value: 2 },
      { label: "More critical — the business is moving toward what I do.", value: 3 },
      { label: "Significantly more critical — I'm at the center of where we're headed.", value: 4 },
    ]
  }
];

const getResult = (score: number) => {
  if (score >= 34) return {
    label: "Structurally Embedded",
    tier: "TIER 1",
    colorClass: "bg-emerald-600",
    textClass: "text-emerald-600",
    borderClass: "border-emerald-200",
    bgClass: "bg-emerald-50",
    tierBg: "bg-emerald-50",
    tierText: "text-emerald-700",
    riskLevel: "Low Risk",
    riskColor: "text-emerald-600",
    headline: "You're harder to cut than most — but complacency is the real threat.",
    desc: "Your role is genuinely embedded. Institutional knowledge, visibility, and structural dependency are working in your favor. But the professionals who get caught off guard in a reorg weren't performing poorly — they stopped actively protecting their position. One new manager, one budget cycle, one reorg away from that changing.",
    urgency: "The window to reinforce your position is open right now — before anything changes.",
    upsell: "The Layoff-Proof Playbook shows you how to lock in and deepen the advantages you've built so they survive leadership changes, reorgs, and budget pressure."
  };
  if (score >= 25) return {
    label: "Moderately Anchored",
    tier: "TIER 2",
    colorClass: "bg-blue-600",
    textClass: "text-blue-700",
    borderClass: "border-blue-200",
    bgClass: "bg-blue-50",
    tierBg: "bg-blue-50",
    tierText: "text-blue-700",
    riskLevel: "Moderate Risk",
    riskColor: "text-blue-600",
    headline: "You're safe — until you're not. Specific gaps exist in your positioning.",
    desc: "You have real value and some visibility, but your score reveals specific dimensions where you look more replaceable than you realize. This is the most dangerous zone — safe enough to feel comfortable, exposed enough to be cut when things get tight. The professionals laid off in the last wave weren't the obvious ones. They were the Moderately Anchored ones who assumed they were fine.",
    urgency: "The next reorg cycle will reveal who protected their position and who assumed they were fine.",
    upsell: "The Layoff-Proof Playbook identifies exactly where you're exposed and gives you a 90-day action plan to close those gaps before the next restructuring decision."
  };
  if (score >= 15) return {
    label: "Functionally Replaceable",
    tier: "TIER 3",
    colorClass: "bg-orange-500",
    textClass: "text-orange-700",
    borderClass: "border-orange-200",
    bgClass: "bg-orange-50",
    tierBg: "bg-orange-50",
    tierText: "text-orange-700",
    riskLevel: "High Risk",
    riskColor: "text-orange-600",
    headline: "Your role exists. Your value to leadership doesn't — not yet.",
    desc: "This is the most common result — and the most actionable. You're doing the work, but the structural factors that protect a role during a reorg aren't in place. Your skills may be valuable, but they're not perceived as irreplaceable. Your contributions may be real, but they're not visible where decisions get made.",
    urgency: "The average time between a restructuring decision and the announcement is 6-8 weeks. The decision may already be in motion.",
    upsell: "The Layoff-Proof Playbook was built specifically for this situation — showing you which levers to pull across visibility, dependency, and positioning to shift your score in 30-60 days."
  };
  return {
    label: "Highly Exposed",
    tier: "TIER 4",
    colorClass: "bg-red-600",
    textClass: "text-red-700",
    borderClass: "border-red-200",
    bgClass: "bg-red-50",
    tierBg: "bg-red-50",
    tierText: "text-red-700",
    riskLevel: "Critical Risk",
    riskColor: "text-red-600",
    headline: "Your role is defined by tasks, not by value. That's the most replaceable position.",
    desc: "Your score indicates your role lacks the structural anchors that protect people during restructuring. You're not in danger because you're performing badly — you're exposed because your role isn't perceived as irreplaceable. Working harder in a role that looks replaceable just makes you a more efficient cost center.",
    urgency: "Decisions about headcount are made quietly, weeks before anyone is told. The window to reposition is now.",
    upsell: "The Layoff-Proof Playbook gives you a step-by-step repositioning plan for this exact situation. People in this tier who act within 30 days see the most dramatic improvement."
  };
};

type Step = 'quiz' | 'email' | 'results';

const QuizSection: React.FC = () => {
  const [step, setStep] = useState<Step>('quiz');
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore);
  const progress = (current / QUESTIONS.length) * 100;
  const q = QUESTIONS[current];

  const handleSelect = (val: number) => setSelected(val);

  const handleNext = () => {
    if (selected === null) return;
    const newScores = [...scores, selected];
    setScores(newScores);
    setSelected(null);
    if (current + 1 < QUESTIONS.length) {
      setCurrent(current + 1);
      window.scrollTo({ top: document.getElementById('quiz')?.offsetTop ?? 0, behavior: 'smooth' });
    } else {
      setStep('email');
      window.scrollTo({ top: document.getElementById('quiz')?.offsetTop ?? 0, behavior: 'smooth' });
    }
  };

  const handleEmailSubmit = async () => {
    if (!email.includes('@') || !email.includes('.')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setSubmitting(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, score: totalScore, scoreLabel: getResult(totalScore).label })
      });
    } catch (e) {
      console.error('Mailchimp subscribe error:', e);
    }
    setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', { content_name: 'Replaceability Scorecard', value: 0, currency: 'USD' });
      }
    }, 500);
    setSubmitting(false);
    setStep('results');
    window.scrollTo({ top: document.getElementById('quiz')?.offsetTop ?? 0, behavior: 'smooth' });
  };

  const maxScore = QUESTIONS.length * 4;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  return (
    <section className="py-12 md:py-20 bg-slate-50" id="quiz">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em]">Free Assessment</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-950 mt-3 tracking-tight">
            The Replaceability Scorecard
          </h2>
          <p className="text-slate-500 mt-3 text-base font-medium max-w-md mx-auto">
            10 questions. Brutal honesty. A clear picture of where you actually stand.
          </p>
        </div>

        {/* QUIZ STEP */}
        {step === 'quiz' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-1 bg-slate-100">
              <div className="h-full bg-red-600 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500">{q.dimension}</span>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Question {current + 1} of {QUESTIONS.length}</p>
                </div>
                <div className="flex gap-1">
                  {QUESTIONS.map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all duration-300 ${
                      i < current ? 'bg-red-600 w-3' : i === current ? 'bg-red-300 w-3' : 'bg-slate-200 w-1.5'
                    }`} />
                  ))}
                </div>
              </div>

              {/* Warning badge */}
              {q.warning && (
                <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-amber-50 border border-amber-200 rounded-xl w-fit">
                  <svg className="w-3 h-3 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold text-amber-700">{q.warning}</span>
                </div>
              )}

              {/* Question */}
              <h3 className="text-lg md:text-xl font-serif font-bold text-slate-950 leading-snug mb-5">
                {q.question}
              </h3>

              {/* Options — compact, no scroll needed */}
              <div className="space-y-2 mb-5">
                {q.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(option.value)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all duration-150 ${
                      selected === option.value
                        ? 'border-red-600 bg-red-50'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                        selected === option.value ? 'border-red-600 bg-red-600' : 'border-slate-300'
                      }`}>
                        {selected === option.value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className={`text-sm font-medium leading-snug ${
                        selected === option.value ? 'text-slate-950' : 'text-slate-600'
                      }`}>
                        {option.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                disabled={selected === null}
                className={`w-full py-4 rounded-xl font-black text-base transition-all ${
                  selected !== null
                    ? 'bg-slate-950 text-white hover:bg-red-700 active:scale-95 shadow-md'
                    : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                }`}
              >
                {current + 1 < QUESTIONS.length ? 'Next Question →' : 'See My Results →'}
              </button>
            </div>
          </div>
        )}

        {/* EMAIL CAPTURE STEP */}
        {step === 'email' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 text-center">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-950 mb-2">Assessment Complete</h3>
            <p className="text-slate-500 font-medium mb-1 text-base max-w-sm mx-auto">Your diagnosis is ready.</p>
            <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">Enter your details to see your full score, dimension breakdown, and what it means for your position right now.</p>

            <div className="space-y-3 max-w-sm mx-auto text-left">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-950 font-medium focus:outline-none focus:border-slate-950 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setEmailError(''); }}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3.5 rounded-xl border bg-slate-50 text-slate-950 font-medium focus:outline-none transition-colors text-sm ${
                    emailError ? 'border-red-400' : 'border-slate-200 focus:border-slate-950'
                  }`}
                />
                {emailError && <p className="text-red-600 text-xs font-bold mt-1.5">{emailError}</p>}
              </div>
              <p className="text-[11px] text-slate-400 font-medium">No spam. Unsubscribe anytime.</p>
            </div>

            <button
              onClick={handleEmailSubmit}
              disabled={submitting}
              className="mt-5 w-full max-w-sm mx-auto block py-4 bg-slate-950 text-white font-black text-base rounded-xl hover:bg-red-700 transition-all active:scale-95 shadow-md disabled:opacity-60"
            >
              {submitting ? 'Analyzing your results...' : 'Reveal My Score →'}
            </button>
          </div>
        )}

        {/* RESULTS STEP */}
        {step === 'results' && (
          <div className="space-y-4">
            <div className={`bg-white rounded-3xl border-2 ${result.borderClass} shadow-sm p-6 md:p-8`}>
              <div className="text-center mb-6">
                {name && <p className="text-slate-500 font-bold mb-2 text-sm">{name}, here is your diagnosis.</p>}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 ${result.tierBg} ${result.tierText} rounded-full font-black text-[10px] uppercase tracking-widest mb-2`}>
                  {result.tier} — {result.riskLevel}
                </div>
                <br />
                <div className={`inline-flex items-center gap-2 px-5 py-2 ${result.bgClass} ${result.textClass} rounded-full font-black text-xs uppercase tracking-widest mb-4`}>
                  {result.label}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-6xl md:text-7xl font-serif font-black text-slate-950">{totalScore}</span>
                  <span className="text-xl font-bold text-slate-300 mt-3">/ {QUESTIONS.length * 4}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-5 max-w-xs mx-auto">
                  <div className={`h-full ${result.colorClass} rounded-full`} style={{ width: `${scorePercent}%` }} />
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-slate-950 mb-3 max-w-lg mx-auto leading-snug">{result.headline}</h3>
                <p className="text-slate-600 font-medium text-sm max-w-lg mx-auto leading-relaxed">{result.desc}</p>
              </div>

              <div className="space-y-2 mb-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Your dimension breakdown</p>
                {QUESTIONS.map((q, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-slate-400 w-36 truncate">{q.dimension}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${result.colorClass} rounded-full`} style={{ width: `${(scores[i] / 4) * 100}%` }} />
                    </div>
                    <span className="text-xs font-black text-slate-950 w-8 text-right">{scores[i]}/4</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-950 rounded-xl px-4 py-4 flex items-start gap-3">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  <span className="text-white font-bold">Timing matters: </span>{result.urgency}
                </p>
              </div>
            </div>

            {/* Upsell */}
            <div className="bg-slate-950 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">Your Next Step</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 leading-tight">The Layoff-Proof Playbook</h3>
                <p className="text-slate-400 font-medium text-sm mb-6 max-w-lg leading-relaxed">{result.upsell}</p>
                <div className="space-y-2 mb-6">
                  {["90-Day Anti-Layoff Action Plan","Dimension-by-Dimension Repositioning Guide","Weekly Visibility Templates","Manager Communication Scripts","Early Warning Signal Checklist"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-300 font-medium text-sm">
                      <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href={PLAYBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).fbq) {
                        (window as any).fbq('track', 'InitiateCheckout', { content_name: 'Layoff-Proof Playbook', value: 27, currency: 'USD' });
                      }
                    }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-black text-base rounded-xl hover:bg-red-500 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-red-900/30"
                  >
                    Get The Playbook — $27
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <div>
                    <p className="text-white font-black text-base">$27 <span className="line-through text-slate-500 font-normal text-sm ml-1">$47</span></p>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">One-time · 14-day guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => { setStep('quiz'); setCurrent(0); setScores([]); setSelected(null); setName(''); setEmail(''); }}
              className="w-full py-3 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
            >
              Retake the assessment
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
