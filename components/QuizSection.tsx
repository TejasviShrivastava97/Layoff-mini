import React, { useState } from 'react';
import { PLAYBOOK_URL } from '../App';

const QUESTIONS = [
  {
    id: 1,
    dimension: "Skill Uniqueness",
    warning: null,
    question: "If your company posted your job tomorrow, how long would it realistically take to find someone who could do what you do?",
    options: [
      { label: "A few days — my skills are common and in high supply.", value: 1 },
      { label: "A few weeks — there's decent supply but I'd need onboarding.", value: 2 },
      { label: "A few months — my combination of skills is harder to find.", value: 3 },
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
      { label: "A few senior people know what I contribute specifically.", value: 3 },
      { label: "Leadership regularly references my work or relies on my input.", value: 4 },
    ]
  },
  {
    id: 3,
    dimension: "Revenue Proximity",
    warning: null,
    question: "How directly does your work connect to money coming into the company?",
    options: [
      { label: "It's several steps removed — I support people who support revenue.", value: 1 },
      { label: "I indirectly enable revenue but it's hard to quantify my impact.", value: 2 },
      { label: "I can draw a clear line between my work and business outcomes.", value: 3 },
      { label: "I am directly responsible for revenue, retention, or critical operations.", value: 4 },
    ]
  },
  {
    id: 4,
    dimension: "Replacement Ease",
    warning: "This is the one that surprises people most.",
    question: "If you gave notice today and were gone in two weeks, how disrupted would your team actually be at the 90-day mark?",
    options: [
      { label: "Barely — someone would absorb my work within days.", value: 1 },
      { label: "Some disruption, but they'd be fine within a month.", value: 2 },
      { label: "Real gaps — it would take 2-3 months to stabilize.", value: 3 },
      { label: "Significant damage — projects, relationships, or systems would break.", value: 4 },
    ]
  },
  {
    id: 5,
    dimension: "Institutional Knowledge",
    warning: null,
    question: "How much of what you know lives only in your head — context, relationships, history that isn't written down anywhere?",
    options: [
      { label: "Very little — everything I do is documented or easily transferred.", value: 1 },
      { label: "Some things, but a capable person could ramp up fairly quickly.", value: 2 },
      { label: "Quite a bit — there's context and history that would take months to rebuild.", value: 3 },
      { label: "An enormous amount — I am the institutional memory in key areas.", value: 4 },
    ]
  },
  {
    id: 6,
    dimension: "Cross-Team Dependency",
    warning: null,
    question: "How many teams, workflows, or processes would stop or slow down if your role disappeared tomorrow?",
    options: [
      { label: "None really — my work is self-contained.", value: 1 },
      { label: "One or two teams would feel it.", value: 2 },
      { label: "Multiple teams depend on me to function properly.", value: 3 },
      { label: "I'm embedded in critical cross-functional workflows that would break.", value: 4 },
    ]
  },
  {
    id: 7,
    dimension: "Leadership Perception",
    warning: "Be honest here — most people are more invisible than they think.",
    question: "When the last round of budget cuts, reorgs, or restructuring happened at your company — how confident were you that your role was being protected?",
    options: [
      { label: "I was genuinely worried. I didn't feel secure at all.", value: 1 },
      { label: "Uncertain — I hoped for the best but didn't really know.", value: 2 },
      { label: "Fairly confident — I felt my contributions were visible.", value: 3 },
      { label: "Very confident — I knew leadership saw my value clearly.", value: 4 },
    ]
  },
  {
    id: 8,
    dimension: "Career Positioning",
    warning: null,
    question: "In the past 6 months, have you proactively made your value visible to anyone above your direct manager?",
    options: [
      { label: "No — I focus on my work and assume it speaks for itself.", value: 1 },
      { label: "Not really — I've thought about it but haven't done it.", value: 2 },
      { label: "A few times — I've shared wins or updates upward.", value: 3 },
      { label: "Regularly — I have an intentional strategy for visibility.", value: 4 },
    ]
  },
  {
    id: 9,
    dimension: "Role Criticality",
    warning: "This reveals whether your role is seen as 'cost' or 'investment'.",
    question: "If leadership had to cut 15% of headcount tomorrow, how would your role most likely be categorized?",
    options: [
      { label: "High risk — support function with unclear ROI.", value: 1 },
      { label: "Uncertain — depends who's making the decision.", value: 2 },
      { label: "Probably safe — my role has clear operational value.", value: 3 },
      { label: "Protected — I'm tied to something the company can't afford to lose.", value: 4 },
    ]
  },
  {
    id: 10,
    dimension: "Future Positioning",
    warning: null,
    question: "Over the next 12 months, is your role becoming more or less critical to how your company makes money or operates?",
    options: [
      { label: "Less critical — my function is being automated or deprioritized.", value: 1 },
      { label: "About the same — my role isn't growing in strategic importance.", value: 2 },
      { label: "More critical — the business is moving toward what I do.", value: 3 },
      { label: "Significantly more critical — I'm at the center of where the company is headed.", value: 4 },
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
    desc: "Your role is genuinely embedded. You have institutional knowledge, visibility, and structural dependency working in your favor. But here's what most people in your position miss: the professionals who get caught off guard in a reorg weren't performing poorly — they stopped actively protecting their position. One new manager, one budget cycle, one reorg away from that changing.",
    urgency: "The window to reinforce your position is open right now — before anything changes.",
    upsell: "The Layoff-Proof Playbook shows you how to lock in and deepen the advantages you've built so they survive leadership changes, reorgs, and budget pressure. Don't let a strong position become a false sense of security."
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
    headline: "You're safe — until you're not. There are specific gaps in your positioning.",
    desc: "You have real value and some visibility, but your score reveals specific dimensions where you look more replaceable than you realize. This is the most dangerous zone to be in — safe enough to feel comfortable, exposed enough to be cut when things get tight. The professionals laid off in the last wave weren't the obvious ones. They were the Moderately Anchored ones who assumed they were fine.",
    urgency: "The next reorg cycle will reveal who protected their position and who assumed they were fine.",
    upsell: "The Layoff-Proof Playbook identifies the exact dimensions where you're exposed and gives you a 90-day action plan to close those gaps before the next restructuring decision is made."
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
    desc: "This is the most common result — and the most actionable. You're doing the work, but the structural factors that protect a role during a reorg aren't in place. Your skills may be valuable, but they're not perceived as irreplaceable. Your contributions may be real, but they're not visible where decisions get made. This doesn't mean you're in immediate danger. It means the decision, if it comes, won't go in your favor.",
    urgency: "The average time between a restructuring decision and the announcement is 6-8 weeks. The decision may already be in motion.",
    upsell: "The Layoff-Proof Playbook was built specifically for this situation. It shows you which levers to pull — visibility, dependency, positioning — and how to shift your score in 30-60 days before the next cycle hits."
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
    headline: "Your role is defined by tasks, not by value. That's the most replaceable position to be in.",
    desc: "Your score indicates that your role lacks the structural anchors that protect people during restructuring. You're not in danger because you're performing badly — you're exposed because your role isn't perceived as irreplaceable. That's a fixable problem. But it requires intentional repositioning, not harder work. Working harder in a role that looks replaceable just makes you a more efficient cost center.",
    urgency: "This is urgent. Decisions about headcount are made quietly, weeks before anyone is told. The window to reposition is now.",
    upsell: "The Layoff-Proof Playbook gives you a step-by-step repositioning plan designed specifically for this situation. People in this tier who act within 30 days see the most dramatic improvement. This is the most important $27 you'll spend on your career this year."
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
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore);
  const progress = ((current) / QUESTIONS.length) * 100;
  const q = QUESTIONS[current];

  const handleSelect = (val: number) => setSelected(val);

  const handleNext = () => {
    if (selected === null) return;
    const newScores = [...scores, selected];
    setScores(newScores);
    setSelected(null);
    setHoveredOption(null);
    if (current + 1 < QUESTIONS.length) {
      setCurrent(current + 1);
    } else {
      setStep('email');
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
        body: JSON.stringify({
          email,
          name,
          score: totalScore,
          scoreLabel: getResult(totalScore).label
        })
      });
    } catch (e) {
      console.error('Mailchimp subscribe error:', e);
    }

    const fireLeadEvent = () => {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Replaceability Scorecard',
          value: 0,
          currency: 'USD'
        });
      }
    };
    setTimeout(fireLeadEvent, 500);

    setSubmitting(false);
    setStep('results');
  };

  const maxScore = QUESTIONS.length * 4;
  const scorePercent = Math.round((totalScore / maxScore) * 100);

  return (
    <section className="py-24 md:py-32 bg-slate-50" id="quiz">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.3em]">Free Assessment</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 mt-4 tracking-tight">
            The Replaceability Scorecard
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium max-w-xl mx-auto">
            10 questions. Brutal honesty. A clear picture of where you actually stand.
          </p>
        </div>

        {/* QUIZ STEP */}
        {step === 'quiz' && (
          <div className="bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden">
            {/* Progress bar */}
            <div className="h-1.5 bg-slate-100">
              <div className="h-full bg-red-600 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            <div className="p-10 md:p-14">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-500">{q.dimension}</span>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Question {current + 1} of {QUESTIONS.length}</p>
                </div>
                <div className="flex gap-1">
                  {QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i < current ? 'bg-red-600 w-4' : i === current ? 'bg-red-300 w-4' : 'bg-slate-200 w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Warning badge */}
              {q.warning && (
                <div className="flex items-center gap-2 mb-6 px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-2xl w-fit">
                  <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold text-amber-700">{q.warning}</span>
                </div>
              )}

              {/* Question */}
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-950 leading-tight mb-10">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-10">
                {q.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(option.value)}
                    onMouseEnter={() => setHoveredOption(i)}
                    onMouseLeave={() => setHoveredOption(null)}
                    className={`w-full text-left px-6 py-5 rounded-2xl border-2 transition-all duration-200 group ${
                      selected === option.value
                        ? 'border-red-600 bg-red-50'
                        : hoveredOption === i
                        ? 'border-slate-300 bg-slate-50'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                        selected === option.value
                          ? 'border-red-600 bg-red-600'
                          : 'border-slate-300'
                      }`}>
                        {selected === option.value && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className={`text-base font-medium leading-snug transition-colors ${
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
                className={`w-full py-5 rounded-2xl font-black text-xl transition-all ${
                  selected !== null
                    ? 'bg-slate-950 text-white hover:bg-red-700 hover:scale-[1.02] active:scale-95 shadow-lg'
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
          <div className="bg-white rounded-[3rem] border border-slate-200 shadow-sm p-10 md:p-14 text-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-serif font-bold text-slate-950 mb-3">Assessment Complete</h3>
            <p className="text-slate-500 font-medium mb-2 text-lg max-w-md mx-auto">
              Your diagnosis is ready.
            </p>
            <p className="text-slate-400 text-sm mb-10 max-w-sm mx-auto">
              Enter your details to see your full score, dimension breakdown, and what it means for your position right now.
            </p>

            <div className="space-y-4 max-w-md mx-auto text-left">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-950 font-medium focus:outline-none focus:border-slate-950 transition-colors text-base"
                />
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setEmailError(''); }}
                  placeholder="your@email.com"
                  className={`w-full px-5 py-4 rounded-2xl border bg-slate-50 text-slate-950 font-medium focus:outline-none transition-colors text-base ${
                    emailError ? 'border-red-400 focus:border-red-600' : 'border-slate-200 focus:border-slate-950'
                  }`}
                />
                {emailError && <p className="text-red-600 text-sm font-bold mt-2">{emailError}</p>}
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                No spam. Your results + occasional career insights. Unsubscribe anytime.
              </p>
            </div>

            <button
              onClick={handleEmailSubmit}
              disabled={submitting}
              className="mt-8 w-full max-w-md mx-auto block py-5 bg-slate-950 text-white font-black text-xl rounded-2xl hover:bg-red-700 transition-all hover:scale-[1.02] active:scale-95 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Analyzing your results...' : 'Reveal My Score →'}
            </button>
          </div>
        )}

        {/* RESULTS STEP */}
        {step === 'results' && (
          <div className="space-y-6">
            {/* Main score card */}
            <div className={`bg-white rounded-[3rem] border-2 ${result.borderClass} shadow-sm p-10 md:p-14`}>
              <div className="text-center mb-10">
                {name && <p className="text-slate-500 font-bold mb-3">{name}, here is your diagnosis.</p>}

                <div className={`inline-flex items-center gap-3 px-5 py-2 ${result.tierBg} ${result.tierText} rounded-full font-black text-xs uppercase tracking-widest mb-2`}>
                  {result.tier} — {result.riskLevel}
                </div>

                <div className={`inline-flex items-center gap-3 px-6 py-3 ${result.bgClass} ${result.textClass} rounded-full font-black text-sm uppercase tracking-widest mb-6 ml-2`}>
                  {result.label}
                </div>

                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-7xl md:text-8xl font-serif font-black text-slate-950">{totalScore}</span>
                  <span className="text-2xl font-bold text-slate-300 mt-4">/ {QUESTIONS.length * 4}</span>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-2 mb-8 max-w-xs mx-auto">
                  <div
                    className={`h-full ${result.colorClass} rounded-full transition-all duration-1000`}
                    style={{ width: `${scorePercent}%` }}
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-950 mb-4 max-w-xl mx-auto leading-snug">
                  {result.headline}
                </h3>

                <p className="text-slate-600 font-medium text-base max-w-xl mx-auto leading-relaxed">
                  {result.desc}
                </p>
              </div>

              {/* Dimension breakdown */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Your dimension breakdown</p>
                {QUESTIONS.map((q, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-xs font-black text-slate-400 w-44 truncate">{q.dimension}</span>
                    <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${result.colorClass} rounded-full transition-all duration-700`}
                        style={{ width: `${(scores[i] / 4) * 100}%`, transitionDelay: `${i * 80}ms` }}
                      />
                    </div>
                    <span className="text-sm font-black text-slate-950 w-6 text-right">{scores[i]}</span>
                    <span className="text-xs text-slate-300 w-4">/4</span>
                  </div>
                ))}
              </div>

              {/* Urgency callout */}
              <div className="bg-slate-950 rounded-2xl px-6 py-5 flex items-start gap-4">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  <span className="text-white font-bold">Timing matters: </span>
                  {result.urgency}
                </p>
              </div>
            </div>

            {/* Upsell */}
            <div className="bg-slate-950 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                  Your Next Step
                </span>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
                  The Layoff-Proof Playbook
                </h3>
                <p className="text-slate-400 font-medium text-lg mb-8 max-w-xl leading-relaxed">
                  {result.upsell}
                </p>
                <div className="space-y-3 mb-10">
                  {[
                    "90-Day Anti-Layoff Action Plan",
                    "Dimension-by-Dimension Repositioning Guide",
                    "Weekly Visibility Templates",
                    "Manager Communication Scripts",
                    "Early Warning Signal Checklist"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                      <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <a
                    href={PLAYBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).fbq) {
                        (window as any).fbq('track', 'InitiateCheckout', {
                          content_name: 'Layoff-Proof Playbook',
                          value: 27,
                          currency: 'USD'
                        });
                      }
                    }}
                    className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white font-black text-xl rounded-2xl hover:bg-red-500 hover:scale-[1.03] active:scale-95 transition-all shadow-2xl shadow-red-900/30"
                  >
                    Get The Playbook — $27
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <div>
                    <p className="text-white font-black text-lg">$27 <span className="line-through text-slate-500 font-normal text-base ml-1">$47</span></p>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">One-time · 14-day guarantee</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => { setStep('quiz'); setCurrent(0); setScores([]); setSelected(null); setName(''); setEmail(''); }}
              className="w-full py-4 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors"
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
